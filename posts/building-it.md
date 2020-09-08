---
title: "How we're building it"
date: "2020-09-08"
author: "Christian Broms and Sydney Zheng"
summary: "Much of the focus of the Pith blog has been about why we're designing the system and what we're considering while doing so. We've yet to discuss much about how we're building Pith, specifically the technologies we're using and architecture of the system."
---

Much of the focus of the Pith blog has been about *why* we're designing the system and what we're considering while doing so. We've yet to discuss much about *how* we're building Pith, specifically the technologies we're using and architecture of the system. This post will outline our current approach and rationale. 

## The system architecture

At the most basic level, Pith has two components: a web-based client interface and a server that handles coordinating multiple clients. 

### Client

We've opted for having the client handle the UI display logic as a standalone [React](https://reactjs.org/) / [Redux](https://redux.js.org/) project as opposed to server-rendered pages (such as with [Next.js](https://nextjs.org/) or [Django](https://www.djangoproject.com/)) because we want the server to be generalizable to different client implementations. We see the UI as a flexible and extensible component that sits on top of the core Pith structure and could take many different forms. The web app that we're designing could be extended, remixed, or completely replaced and Pith's core functionality would remain unchanged. 

### Communication

Given Pith is a place for realtime discussion, we needed to build the system a bit like [IRC](https://en.wikipedia.org/wiki/Internet_Relay_Chat) with updates automatically pushed to the clients by the server. For websites, this functionality can be implemented using [websockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API). We're using the [socket.io](https://socket.io/) library because it's easy to use and provides all the functionality we need with its [rooms](https://socket.io/docs/rooms/) and [namespaces](https://socket.io/docs/namespaces/). 

### Server

Rather than use the official Node.js server library for [socket.io](http://socket.io), we have opted to use the community built and maintained [python-socketio](https://python-socketio.readthedocs.io/en/latest/) library for two main reasons. First, we're more comfortable with Python as a language, and second, when it comes to implementing the network, reliable and well documented packages like [nltk](https://www.nltk.org/), [networkx](https://networkx.github.io/), and [graph-tool](https://graph-tool.skewed.de/) will make development simpler than finding javascript equivalents. 

The server is composed of a number of smaller services:

- `app`: the socketio interface that's used by [the React client](https://github.com/rainflame/pith-client).
- `worker`: a worker script using the [arq task queue](https://github.com/samuelcolvin/arq) for executing assorted long-term tasks such as archiving discussions when they're complete.
- `redis`: a Redis database used by the task queue (`worker`) and as a message queue by socketio (`app`).
- `mongo`: the MongoDB database used to store the discussion content.

We use docker and docker compose for orchestrating building and running each of these services in containers. You can read more about this process in [the project's readme file](https://github.com/rainflame/pith-api/blob/master/README.md). 

### Managers

The `app` specifies the [API](https://pith-api.readthedocs.io/en/latest/app.html) the frontend uses. However, the functions within `app` only handle the parsing and validation of requests and the proper return or emit of the response. The actual logic of the function is encapsulated in a managing-function called between request handling and response handling. These managing functions reside in manager classes. Currently, we have a manager for any logic surrounding the discussion abstraction. We are also planning on making a manager for logic surrounding the board abstraction and one for the user abstraction.