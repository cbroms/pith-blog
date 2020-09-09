---
title: "How We're Building Pith: Architecture"
date: "2020-09-08"
author: "Christian Broms and Sydney Zheng"
summary: "Much of the focus of the Pith blog has been about why we're designing the system and what we're considering while doing so. We've yet to discuss much about how we're building Pith, specifically the technologies we're using and architecture of the system."
---

Much of the focus of the Pith blog has been about _why_ we're designing the system and what we're considering while doing so. We've yet to discuss much about _how_ we're building Pith, specifically the technologies we're using and architecture of the system. This post will outline our current approach and rationale.

## The system architecture

At the most basic level, Pith has two components: a web-based client interface and a server that handles coordinating multiple clients.

### Client

_Find the [client repository on GitHub](https://github.com/rainflame/pith-client)._

We've opted for having the client handle the UI display logic as a standalone [React](https://reactjs.org/) / [Redux](https://redux.js.org/) project as opposed to server-rendered pages (such as with [Next.js](https://nextjs.org/) or [Django](https://www.djangoproject.com/)) because we want the server to be generalizable to different client implementations. We see the UI as a flexible and extensible component that sits on top of the core Pith structure and could take many different forms. The web app that we're designing could be extended, remixed, or completely replaced and Pith's core functionality would remain unchanged.

### Communication

Given Pith is a place for realtime discussion, we needed to build the system a bit like [IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) with updates automatically pushed to the clients by the server. For websites, this functionality can be implemented using [websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API). We're using the [socket.io](https://socket.io/) library because it's easy to use and provides all the functionality we need with its [rooms](https://socket.io/docs/rooms/) and [namespaces](https://socket.io/docs/namespaces/).

### Server

_Find the [server repository on GitHub](https://github.com/rainflame/pith-api)._

Rather than use the official Node.js server library for [socket.io](http://socket.io), we have opted to use the community built and maintained [python-socketio](https://python-socketio.readthedocs.io/en/latest/) library for two main reasons. First, we're more comfortable with Python as a language, and second, when it comes to implementing the network, reliable and well documented packages like [nltk](https://www.nltk.org/), [networkx](https://networkx.github.io/), and [graph-tool](https://graph-tool.skewed.de/) will make development simpler than finding javascript equivalents.

The server is composed of a number of smaller services:

-   `app`: the socketio interface that's used by [the React client](https://github.com/rainflame/pith-client).
-   `worker`: a worker script using the [arq task queue](https://github.com/samuelcolvin/arq) for executing assorted long-term tasks such as archiving discussions when they're complete.
-   `redis`: a Redis database used by the task queue (`worker`) and as a message queue by socketio (`app`).
-   `mongo`: the MongoDB database used to store the discussion content.

We use docker and docker compose for orchestrating building and running each of these services in containers. You can read more about this process in [the project's readme file](https://github.com/rainflame/pith-api/blob/master/README.md).

### Managers

When it comes to functionality, the `app` specifies the [API](https://pith-api.readthedocs.io/en/latest/app.html) that's used by the client. However, the functions within `app` only handle the parsing and validation of requests and the proper return or emit of the response. The actual logic of the function is encapsulated in a managing-function called between request handling and response handling. These managing functions reside in manager classes. Currently, we have a manager for any logic surrounding the discussion abstraction. We are also planning on making a manager for logic surrounding the board abstraction and one for the user abstraction.

## Decentralization

The architecture we've outlined so far is fairly familiar to many online services. However, it's _centralized,_ that is, based on a model in which one organization controls the server(s) responsible for driving the web app. The alternative is a more decentralized approach, perhaps using technology such as WebRTC to allow individual clients to act as their own servers so each individual is responsible for storing and serving their data. However, [a persistent problem](https://www.inkandswitch.com/local-first.html#thin-client) with this model is that a user can clear their cookies and data at any time, destroying their contributions to a discussion or board if they are the sole owner of their data. The common response to this issue has been to push the layer of decentralization out to the _server._ This is the [fediverse](https://en.wikipedia.org/wiki/Fediverse), a space in which servers operating independently from one another communicate over a common protocol to create an emergent network. [Mastodon](https://joinmastodon.org/) is a Twitter-like social service that runs on a network of independently owned and operated servers. [Matrix](https://matrix.org/docs/guides/introduction) provides the framework for developing chat-like applications using this same decentralized model.

While we don't imagine Pith to take the model of the fediverse (as in independent servers that communicate with each other) we do see decentralization as a crucial component to the project. We'd like to give anyone the freedom to host their own data and create their own instance of a Pith server, for free. The code for the project will always remain open-source with an extremely permissive license (Apache 2.0). Of course, Pith's value isn't based on every user spinning up their own cloud-based virtual machine and running the code. Most will likely engage with Pith through an entity that sets up a server on their behalf, a service that will have to come at a cost. Even so, the separation of Pith's services creates the opportunity for users to provide alternative data storage locations (perhaps with a managed instance of MongoDB with [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)) in order to further limit which entities have access to their data.

With this model, we create an ecosystem of Pith servers all running with variable levels of user control:

1. Individuals with full control over their data _and_ server through self hosting both the database and server instances locally or in the cloud.
2. Individuals with control over their database in the cloud or locally and provided a connection string to the hosting service (the hosting service has no access to the database outside the server software that requires it to run).
3. Individuals who rely on the hosting service to create a database and server for their Pith instance.

Moving down the list moves control of data/server from individual → corporate entity, in addition to monetary cost from free → more expensive. Of course, the opposite is true for time investment in starting the Pith service, here the list goes from quite large → very small. One other trade-off that's common with this model is that technology proficiency would move from highly advanced (infrastructure management ability) → minimal (web browsing ability). We'd like to avoid this particular trade off by ensuring Pith's deployment steps are exceptionally well documented and clear so that a large number of people _could_ follow them, regardless of if they would _want_ to follow them (the time trade off will always be a pertinent one).
