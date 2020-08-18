---
title: "The Board and Network"
date: "2020-08-17"
author: "Christian Broms & Sydney Zheng"
summary: "Here we propose our current design for how Pith addresses organizing large-scale discussions to reach a decision effectively."
---

Here we propose our current design for how Pith addresses organizing large-scale discussions to reach a decision effectively.

## Board

The board is the space by which people organize what discussions should take place, what discussions are taking place, and what were the result of the discussions. The result of the discussions is summarized, and these summaries are condensed further to create a final summary of all the discussion that took place. This final summary is what helps the people make a decision.

The board is arranged in the following way:

- A board can have a time-limit to help people to organize their discussions and reach the deadline that a final decision is needed.
- People can create folders.  Folders can be added and "removed" over time and loosely represent the opening and closing of subtopics. These folders can help group discussions into different subtopics. For example, over the course of redesigning the road system, you may want to create folders for discussing how to expand the road, how to improve the traffic light system, how to summarize the concerns people have over noise in certain areas.
- People can pin discussions or prioritize them to encourage everyone to reflect more on particular points. Pinned discussions can highlight opportunities to bridge between folders or subfolders, to focus more on a folder/subfolder or create a new one, or to start closing a folder/subfolder. Pinning takes place within the "root" folder or within one of the subfolders. Pinned discussions, are encouraged to offer a reason as to why their existence is so important. In addition, they should consider providing a list of keywords (including folders) or especially notable super blocks or prior discussions that can serve as references. A feature that is especially useful for pinned discussions is the ability to "duplicate" a discussion so it has the same theme, references, and other metadata. This allows many people to have discussions around the same theme.
- Upon the conclusion of a discussion, people have made a summary. They can highlight certain parts of the summary to become "super blocks", which are essentially a super-condensed form of a section of the summary. People can choose which folders to file a super block under.
- Over the course of a folder's existence, people can begin to summarize super blocks into new super blocks. These summaries must transclude the super blocks and be approved by a percentage of those who created the transcluded blocks to ensure the summary accurately conveys their perspective. Eventually, the folder can be "closed" so the summary super blocks and remaining super blocks enter the parent folder. Note that even if a folder created for a topic was closed, a new folder for the same topic can be opened again. I.e., if people realize that expanding the road is important, they can make a folder for it even if they closed a folder on it before.
- Super blocks and summarized super blocks can be pinned to serve as points people may want to consider if they form a discussion under the folder.

## Network

The board is organized by folders, in "categories". Pith also seeks to encourage people to think across categories or in ways that are not so clearly defined by them. To do this, it uses a network to help people organize discussions and super blocks. The network allows people to study how connected or insular ideas are, or how prevalent or potentially understudied certain ideas are.

The network is arranged in the following way:

- Super blocks and discussions are tagged based on folders they have been in or are in.
- Super blocks are by default tagged by the key words that appear in its text. People can remove these tags.
- People can add additional tags to super blocks and discussions to help make new connections.
- People can view a part of the network by entering a tag query. This gives them a network view of the super blocks and discussions associated with the tag.
- People can also see which tags co-occur with some given tag, or explicitly perform queries that union/intersect tags. This allows them to study potential bridges or to determine if a tag is relatively under-discussed or insular (echo chamber).

## Macro to micro

Within a discussion, people can interact with the network and board. They can use either to find/explore information related to their topic. By clicking on a super-block in either view, they can view the relevant section of the discussion's summary.

They can also modify the board, such as by adding a folder, merging super blocks, creating new discussions all based on their current discussion. If people plan to merge super blocks, they are encouraged to review the summary behind the super block by clicking on the super block. On the flip side, people creating super blocks are encouraged to reflect the text as accurately as possible.

People can perform operations on the network to help them identify echo chambers, understudied topics, or potential bridges. 

## Randomness to mitigate bias

We propose having a feature where people can join a random discussion within root or a folder. A random discussion may be generated by a user or automatically created based on the pinned discussions. This mechanism can possibly help expose people to new perspectives they otherwise wouldn't be drawn to consider.

The board can be configured so that each user should participate in a certain proportion or number of random discussions. On their own, people are unlikely to participate in random discussions much. 

## To consider more

- How to help people have discussions on configuring the board, i.e. we should have more/less randomness, more/less approval needed for merging super blocks.
- The process by which people approve merges on super blocks they helped create.
- How to help people navigate super blocks associated with a tag, especially if there are many such super blocks.
- How to help people navigate folder-systems that are especially complicated, or to help them keep it simple in the first place. Closing folders helps to some extent. Maybe a basic search can also help.