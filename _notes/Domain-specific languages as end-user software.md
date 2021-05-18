---
title: Domain-specific languages as end-user software
---
### What I learned from GuidedTrack

Working on [[GuidedTrack]], I have become very interested in this concept of domain-specific languages as applications. GuidedTrack does this interesting thing where the functions are so high level that it's fairly plug and play to make a research study, form, or choose-your-own-adventure story.

![little preview of what you can do in GuidedTrack](/assets/blogpics/debugger-lite1.gif)

You can even write your code in a structured editor that lets you fill out a form to generate your code for you. As you get more familiar with the language, you don't need it as much, but it helps people write code before they know how.

![editing an image in the toolbar](/assets/blogpics/guidedtrack-image-toolbar.png)

Then we give people control flow options on top these easy to use functions. You can compose simple surveys and such without it, but with programming abstractions like loops and conditional logic people are able to create some really wild stuff. It's easy to save people's responses to questions as variables and re-use them later. We give them the ability to abstract - you can call another program. It's not quite the same as a function call, but the output is essentially the same. Empowered by these tools, entrepreneurs are able to build interactive educational apps, like [[OpenMind]], [[UpLift]], and [[Mind Ease]]. 

![little preview of what you can do in GuidedTrack](/assets/blogpics/debugger.gif)

The syntax is simple. Each line is it's own thing, and relationships are conveyed through indentation. In order to add a caption to an image, you indent a caption under the image. In order to ask a follow-up question, you can either save the user's response to a variable to use later in an if-statement, or **you can just indent the follow-up underneath the previous answer.**

![indentation-in-guidedtrack](/assets/blogpics/guided-track-indentation.png)
*Can you picture what this program will look like as you read it?*

So here's what we've got so far:
- A bunch of high level functions that make it easy for researchers, entrepreneurs, and educators to do what they want. Questions, media, randomization, charts, etc. where they just fill in the blank.
- Control flow made about as simple as it can possibly get
- A simple syntax (indentation and keywords at the start of the line) that doesn't make people think too hard about the language
- A structured editor to help people write code before they know how

*For more details on what we do to make GuidedTrack learnable, see [[Onboarding Plan as Presented to GuidedTrack on 10-20-20]].*

[[Horizontal product]]s are often marked by their high degree of flexibility, and what's more flexible than a programming language? No-code tools pale in comparison, and this isn't more difficult. The main challenge is just getting people to look at the code and think to themselves, "okay I'm not a programmer but I can do this." Given my focus on [[Continuous onboarding]], I'm not too worried about learnability obstacles.

### Okay, so applications can be made into domain-specific languages that require similar skill to graphical equivalents. Why text?

##### A DSL speeds up the author

GuidedTrack programs are just text, and ultimately nothing is going to be faster than typing. No-code tools just require you to click a bunch of things to type or move on to the next area where you can type. Being text, all of your keyboard shortcuts, like copy, cut, paste, undo, and redo, work for free. You can highlight a selection of as much or as little as you want and do anything with it - this isn't a given in GUI (graphical user interface) applications where everything has its own component.

##### A DSL allows the user to create functionality that a GUI designer would have to hard encode

I was playing around with Tripetto, a GuidedTrack alternative, and noticed they have functionality to ask a multi-select multiple choice question and then ask a follow-up question for each answer they selected in the previous question. Going through the process, it took 3 minutes and at least 20 clicks (outside of typing) to do it *after I already knew how to do it.*

In GuidedTrack, it was less than 15 lines of code to do the same thing better. This is slightly more advanced code than I've been showing so far, but people can get to this point easily and once they know how to do it, it's either thoughtless to redo it or it's copy/paste but changing specifics. As described in [[Removing GUI elements as the user's skill level increases]], the user is actually able to see their increase in skill represented as an increase in speed. The GUI tools we use like the [[GuidedTrack Toolbar]] are just there to ramp people up, not the final stopping point.

Tripetto had to hard code this in and meticulously design the user flow of screens. GuidedTrack just needed to give people primitives. [See this Figma file for a visual comparison.](https://www.figma.com/file/dTePTU7khNGg53ho1pbH8S/DSL-vs.-GUI-Speed-Comparison?node-id=0%3A1)

##### Text is portable

See [[Why I love interoperability]]. While you need the GuidedTrack web app in order to run and deploy code, you can take the text anywhere with you. We even have syntax highlighters for popular IDEs so people can edit elsewhere once they've learned the language. Since GuidedTrack is so easily readable, people will literally copy/paste their programs into Google Docs or Microsoft Word so team members can comment and propose changes. Typeform hasn't hard coded in ways for team members to comment and propose changes, and because their formats are locked in a GUI, it's not like people can just take the content elsewhere for comments. **Text can go just about anywhere.**