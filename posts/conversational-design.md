---
title: "First Draft of Conversational Design"
date: "2020-05-31"
author: "Christian Broms & Sydney Zheng"
summary: "We've outlined a few goals for the design of the conversation in addition to features that help address them.  The system should be online to allow an arbitrary number of people anywhere to converse with each other."
---

## Goals

We've outlined a few goals for the design of the conversation in addition to features that help address them.  The system should be online to allow an arbitrary number of people anywhere to converse with each other.

### Conversation that is intuitive

- Have people communicate in a chat-based or forum-based style.
- People make posts.  Offered features allow them to interact with the conversation in more sophisticated ways.
- See [posts and blocks](#posts-and-blocks) for more about this.

### Conversation that encourages both objective and subjective viewpoints

- Posts can include *external* citations to help people find more objective sources. Any piece of content can be included as part of a post, from a web link to an uploaded document.
- Posts can include *internal* citations (references made via transclusion) to help people connect with each other's viewpoints.
- Users can save blocks over conversations to use as references in the future.
- Users can search for posts by using a sophisticated search (using the context of the conversation to find a post).
- People, if they want, can advertise their contribution using "flairs" as done in Quora or Reddit, such as by marking themselves as "Concerned Citizens" or "biology expert" or "water policy expert".
- People can, if they want, "tag" their block or post as being some specific type of contribution.  For example, it could propose an action, offer a personal story, deconstruct an analysis.
- See [posts and blocks](#posts-and-blocks) for more about this.

### Conversation that allows people to understand each other instead of talk past each other

- The use of an ongoing summary to help everyone keep track of what matters and what has been said.
- Direct democracy. This conversation can be used to compose solutions. Every voice is critical to the conversation because every voice belongs to a person who is involved in the potential solution.
- Allowing people to listen to each other more carefully by encouraging them to form small groups to discuss in real-time.  Even better if each group has members that have different backgrounds.
- The use of reflection.  People are encouraged to reflect on the course of their conversation every so often.  This serves as a large-scale meta-cognition.  Should the course of conversation change based on what people have observed about it so far?
- See [conversation organization](#conversation-organization) for more about this.

## Posts and blocks

Posts (outlined in blue) are composed of blocks (outlined in black). Blocks can be one unit of information: one URL, one image, one bullet, one line of code. These are the most atomic elements that hold all other content. A block also can contain metadata such as the time of posting, poster, discussion, and tags assigned by the author. 

A set of blocks (outlined in red) can be something as familiar as bulleted lists, numbered lists, code snippets, quotations, links, images, videos, audio, etc. as well as more customized groups of blocks. A set of blocks can be referenced by another block (shown by the arrow), to help clarify the relationship between them. A tag can be assigned to a block, for example, to mark it as "Important" or as an "Action".

![](/images/overviewDraft.png)

Perhaps the most important aspect to blocks is that they can be transcluded in other posts. For example, another participant might make a reference to one of the previous poster's blocks (now filled with light yellow):

![](/images/transclusionDraft.png)

Their reference is not a copy of the original block, but rather a pointer to the original block itself; a transclusion. If the original block updates, then the reference block updates the same way. Each block has a unique link that can be included in any post. The unique link may also show you other posts that referenced the original block or post. This allows for participants to follow the entire history of a particular block to see how an idea has been used and referenced throughout the conversation. 

![](/images/transclusionDraft2.png)

## Conversation organization

A conversation begins when a  group of people create a new topic to discuss. The topic might be large and complicated, but as they begin discussing, smaller sub-topics may emerge and can be used to create a smaller discussion. As this process continues, the larger topic is *decomposed* into many smaller topics and discussions. At each of these levels, discussion happens between  individuals using the posting format outlined above in the [posts and blocks](#posts-and-blocks) section. 

### Summaries

In parallel with the discussion, participants are actively creating a summary of it. This is a collection of blocks from people's posts that are pulled out from the conversation when any participant deems them important enough to preserve. The summary from a sub-topic's conversation is pulled up to the parent topic conversation summary, and participants can further pare it down there. This process continues until the summary reaches the top-level topic, at which point the entire conversation has theoretically been summarized. To encourage people to avoid including every post or block in a summary, the summary must always be under a maximum length, or people can only include so many posts every interval of time.

### Meta-organization

Meta-organization is decided by the discussion members. They can break off and recombine discussions as they see fit. In addition any member of a discussion can see the state of all other discussion summaries as they're being built, regardless of if they're a participant in that discussion. This way, they can have a high-level understanding of the entire conversation of perhaps hundreds of participants even while engaged in an in-depth discussion with just a few other people. Summary visualizations provide an even higher-level insight into what's being discussed. If two discussions are more similar, they are represented more closely in a visualization. This allows people to get a sense of what is being talked about and how they can jump into the conversation.