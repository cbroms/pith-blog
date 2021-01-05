---
title: "Group Meta-Cognition"
date: "2021-01-05"
author: "Sydney Zheng"
summary: "Currently, I am designing how small groups or individual discussers can organize their ideas as an large group. Our main idea is the reflections of the large group are captured in a large, tree document. However, this presents several issues."
---

# Group Meta-Cognition

Currently, I am designing how small groups or individual discussers can organize their ideas as an large group. Our main idea is the reflections of the large group are captured in a large, tree document. However, this presents several issues.

## Issues

1. How will small groups form in the first place?
2. What if there are a lot of people all vying to edit the same piece of the document?
3. How will people within a small group agree on what edit should be made to the large document?
4. What if the growth of the large document gets out of hand, to the point it is no longer sensible? If ideas are all over the place, this could increase the difficulty of identifying what are the ideas and therefore what needs to be discussed further.
5. What does the document represent? The _content_ people have decided on or their _thoughts_ on continuing the discussion, their various perspectives and concerns?

## Potential Solutions

We believe the following traits could address each of the above issues respectively:

1. People can form a chat on a particular unit. At this point, we may make it one chat, but a stretch goal would be to allow the creation of more than one chat if there are a lot of people to break them into more manageable groups.
2. Edits (including additions and removals) are proposed to the large document but are not immediately in effect. They can be batched together as an "amendment". Amendments also have an attached chat through which people can discuss. An amendment must be approved before going through. We will have to consider how people will view amendments and have the opportunity to get them approved.
3. Amendments are made by individuals, not small groups. A small group can mediate how to agree on an amendment. One stretch idea is to allow the creation of polls for various changes to the large document.
4. Generally speaking, if there is more activity in a section of the large document, it should be more difficult to make a change. The idea is that more of the people involved in a section should consider amendments to prevent overlaps of ideas or bad organization. Generally speaking, the platform will keep track of how many amendments were proposed in the past X duration of time. Based on this, there must be more approval for each one. Approval could be by number or percentage.

![](/images/explorability.png)

5. The document will most likely be a combination of content and thoughts. The system should help a group perform what I am calling "group meta-cognition". This is the thought-process of a group in reflecting on how it should continue its actions: its discussion and how to organize its discussion. To do this, we have two metrics that people can influence for each unit in the large document: priority and explorability/stability. Priority indicates how important people believe a unit is. It has three weights: weak, medium, strong. People can create new topic-units with some indicated priority to spur new areas of discussion. The final priority is determined through a weighted vote of all those who care to vote upon it. If people believe a unit is more explorable, they believe there is still much worth to discuss further. Conversely, if people believe a unit is more stable, they believe the unit should not be changed much—this could mean they believe discussion on a unit (maybe a topic or subtopic) is finished. This metric is also on a three-point scale that is determined by a weighted average of those who choose to vote: explorable, neutral, stable. Perhaps the system can also recommend units as being explorable by comparing its priority to its normalized activity—if the unit has high priority but low activity considering the number of people involved or edits made in total, it should probably be explored more. This normalized activity may also be something people can see to decide for themselves how to act. It will be determined by only the system and be presented as on a three-point scale: low, medium, high. We believe each metric should be "finite" to prevent overbearing positive feedback loops, just as having more popularity generates more popularity. People can use these metrics to search for ones of high explicit explorability, for example, or potential explorability as indicated through the priority/normalized activity.

## Culture

Some of these mechanics could be determined by _culture_. For point 4, the group can choose how activity influences needed approval. We think this can help address some of the issues other platforms are facing with regards to how authoritarian/anarchistic management should be.

## Further Considerations

-   We are especially concerned about point 4 because of concurrency. We hope to manage some of it through socially-mediated mechanics.
-   We want to improve the searchability of content—not just the ease in finding a _specific_ kind of content but also in finding _potentially interesting_ content. We hope to broaden what people think about through search metrics, as discussed in point 5.
-   Combining the former bullets, we are concerned with how to present amendments in such a way they are given the consideration they deserve. There should be some organization in how they are found, but we hope to help people keep an open-mind about what they look into.
-   We imagine most discussion should take place on the units themselves so the large document acts as the "discussion square", and that discussion on amendments is mostly to make sure the amendment is reasonable. We should probably examine this more.
-   We focused mostly on the tree-structure. How can we help people network ideas across the tree to encourage more bridging between ideas?
-   How will the large document be incorporated in our current model of a small discussion?
