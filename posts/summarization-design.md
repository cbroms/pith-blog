---
title: "Summarization Design"
date: "2020-07-27"
author: "Christian Broms"
summary: "In designing the summarization aspect to discussions, we've been faced with a plethora of options regarding both how the summary is created from existing blocks, and how it evolves as participants make edits."
---

In designing the summarization aspect to discussions, we've been faced with a plethora of options regarding both how the summary is created from existing blocks, and how it evolves as participants make edits. We're working with the goal of _ensuring the quality of the summaries is largely consistent between discussions._ This means creating a few small and well considered limitations to how content is added to and evolves within the summary.

## Limiting the size of the summary

Our goal in limiting the summary's size is to try and maintain a level of consistency between the quality of summaries made from potentially very different types of discussions and participants. While limiting the size is not the only way of working towards this goal, we believe that it will create the necessary environment to prompt participants to be thoughtful about what is and is not included in the final summary. There are three main options here:

1. A character limit on each block's content
2. A character limit on all blocks' content combined
3. A combination of both

## Adding and modifying blocks

When it comes to creating the summary, there are two directions we'd like to explore.

1. Allowing for adding blocks from the conversation, adding new blocks to the summary, and giving everyone the option to modify or remove any content in the summary. This direction allows for a great deal of freedom in how content is created and added to the summary by giving any member of the discussion the power to edit.
2. Allowing for adding blocks from the conversation and adding new blocks to the summary so long as they transclude existing blocks. This is a somewhat more restrictive option in that it requires all new additions to reference old ones.

## Prototyping the summary

There are three options for limiting the size of the summary and two options for how content is added to the summary, and we plan to roughly implement a combination of each. By testing out discussions that use each of the variations, we'll get a better sense of what's too open or too restrictive. We plan to begin this work in the coming weeks.
