---
title: How we address GuidedTrack's key failure states
---
GuidedTrack has certain failure states for new users, and we need to [[Intentionally design for failure states]]. From [[Initial Research on GuidedTrack]]:

"For the context of onboarding, there were a few key failure states to pay attention to:

* Not knowing how to write the code the user is envisioning
* Seeing a blank page and not knowing what to put on it
* Running syntactically incorrect code and seeing an error code (or worse, many errors!)
* Running syntactically correct code and finding that the code doesn't produce the expected outcomes."

# Not knowing how to write the code the user is envisioning

This is when the user's skill level has not yet caught up to their imagination. We have a few solutions for this:

### The [[GuidedTrack Toolbar]]

The toolbar allows the user to visually scan through possible functions and fill out a form that writes the code for you. This reduces the amount of learning they need to do before doing. The toolbar also shows you documentation and examples.

https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FRobAndHisNotes%2FiZol_2GNCq.png?alt=media&token=288c25b6-2be2-4879-a3fa-7ddf8d7090bb

### Create program from template

This will allow users to create programs from pre-made templates that are meant to serve as useful, goal-oriented examples. When you look at these templates and compare your own code to what you see in them, it's easy to figure out where you're doing something different.

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FPjM45aimEKf0vYoIpNgq1j%2FCreate-Program-from-Template-Mockup%3Fnode-id%3D17%253A2%26scaling%3Dmin-zoom" allowfullscreen></iframe>

### Helpful community

We hope to develop a community of helpful users and deliver high quality support. Where our documentation, toolbar, and templates aren't helpful, we believe that people will play a crucial role in diagnosing and solving new user problems.

# Seeing a blank page and not knowing what to put on it

Our templates are meant to be helpful here to show you what sorts of programs you can make. Eventually we hope to have a solid way for the community to share their programs with each other, but that won't come for a while beyond ad hoc solutions (sharing your programs in community discussion channels for people to fork and comment on).

# Running syntactically incorrect code and seeing an error code (or worse, many errors!)

We don't have a great solution for this at the moment. There's a lot I still want to do with error messages. The lowest hanging fruit would be to show ranges of lines that might be the culprit for error messages inline with the code, where you hover over an icon to see a tooltip of what might be the problem.

The side-by-side preview improves the situation, because now people can see a list of error messages next to the code. Compare this to before, where people saw a list of error messages and had to remember them while they were editing code.

# Running syntactically correct code and finding that the code doesn't produce the expected outcomes.

This is the failure state where the user is incorrectly predicting the outcomes of their code. Their code isn't wrong according to our compiler, but the outcome doesn't look how they want it to.

Usually, this is a problem where they incorrectly predicted the flow of the program. They don't know what will come out on one page or another, and they don't understand the logic of what they are producing.

The [[GuidedTrack Live Preview]] is really great at addressing this problem. Since it highlights the part of the code that's actively producing the preview, it's really easy to diagnose problems. See [[Feedback loops are a more efficient method of communication]] for reference.

![](/assets/blogpics/FeedbackLoopCodingInGuidedTrack.png)