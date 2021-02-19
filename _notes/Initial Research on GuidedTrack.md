---
title: Initial Research on GuidedTrack
---
*If you do not know what GuidedTrack is, I highly recommend reading the [[GuidedTrack]] page first, where I have background info.*

### First, I wanted to look at what was already there

We have help documentation, a location for people to ask questions to support, and a few sample programs made in GuidedTrack so people can learn through observation.

## [[The hard problem of onboarding horizontal products]]

First, I looked at the project through my lenses to see if anything immediately stood out as relevant. Here's what became clear:

### Individual differences

[[There are individual differences between new users in their initial user goals]]. Because GuidedTrack is so flexible in its use cases, we have multiple distinct personas that we had already identified, and a few that we don't yet know.

[[People start using an app with different prior skill levels]]. GuidedTrack is a coding language! Some of our new users have a coding background with languages like HTML, Javascript, or R, and others only ever used drag and drop applications like Typeform. While everybody starts from a place of not knowing how to use GuidedTrack, some people would pick up on it much quicker than others. Eventually, I would realize that "prior skill" wasn't the right word for it so much as "pre-existing mental models," but more on that later.

[[People start using an app with different prior mental models]]. GuidedTrack is a coding language! Some of our new users have a coding background with languages like HTML, Javascript, or R, and others only ever used click and drag applications like Typeform. People who have never coded probably haven't had to deal with many error codes before, and may not be equipped to deal with them. While everybody starts from a place of not knowing how to use GuidedTrack, some people would pick up on it much quicker than others because their mental models more cleanly align with how GuidedTrack works.

### Code is intimidating to non-coders. Can you blame them?

Code can be terrifying to people without a coding background. While I'm technically proficient, I'm not a programmer. I don't think that I've ever executed terminal code successfully the first time, and I don't think I've ever seen a Read Me on Github that lays out every single step. They assume the user has a lot of tacit knowledge about how to run and edit code, and as a result, non-programmers are locked out.

All that is to say that **it would be absolutely crucial** to build for [[Self-efficacy]]. When people have high self-efficacy, they have a higher tolerance for friction and are more likely to look for creative workarounds when they run into obstacles. We needed new users to look at GuidedTrack code and think to themselves, "I can do this" and not freeze up.

We would need to [[Intentionally design for failure states]]. Despite the overall simplicity of GT's syntax, it is possible to write incorrect code, compile it, and then see error codes. If we have a researcher who is used to making experiments in Qualtrics, they will literally never see an error code.

People with prior programming experience know that fixing error codes is just a part of coding and don't think too much about it. People who have never had to deal with error codes before will often see the problem and think to themselves, "I am bad at this." They might be scared to edit and play with code for fear of breaking it. This is a moment where new users often stop using GuidedTrack altogether.

For the context of onboarding, there were a few key failure states to pay attention to:

* Not knowing how to write the code the user is envisioning ^272ce4
* Seeing a blank page and not knowing what to put on it
* Running syntactically incorrect code and seeing an error code (or worse, many errors!)
* Running syntactically correct code and finding that the code doesn't produce the expected outcomes.

Here's [[How we address GuidedTrack's key failure states]].

Not knowing how to write code was actually the easy part. We have a visual code editor that allows the user to select what they want to do and then fill out a form to generate the correct code. Our help documentation is very thorough, easy to use, and filled with examples. We give the user sample programs to see examples in context. **Our users so far have told us that it's very easy to learn GuidedTrack.** However, many people don't give it a chance because of the other failure states. **We needed to make a positive first impression on users so they would give it a shot and realize they were capable of learning.**

* *See [[Adoption requires a baseline of user involvement in order to overcome inertia]].*

The blank page failure state was significant. [[The user may have a lack of imagination as to what user goals they can accomplish]], and we really want new users to play with GuidedTrack. [[The most successful app adoptions come from a project]], largely because that would allow the user to see GuidedTrack in context. If people don't know what to use it for, then they won't use it. They need some help coming up with ideas so they could have something exciting enough that they would put effort into learning.

The error code failure state is a main focus for the onboarding. When people see an error, we want them to think to themselves, "I can fix this!" and "I know what's wrong." We also want to avoid a scenario where people write a ton of code before checking it by compiling and see a buildup of errors long enough that it feels daunting to deal with. Ideally, **new users** check their code frequently early in the experience and only need to fix one or two errors at a time.

[[User skill level increases over time]], so eventually they can write code comfortably for longer without checking while also feeling capable of dealing with longer lists of errors. However, that is bad practice for new users, and people without a coding background likely won't yet have a habit of checking their code frequently.

## Personas - Who is using GuidedTrack?

Some of our main personas include:

### Social science / market researchers

Market researchers sort of fell out as a potential persona from the main one we know, the "power user academics." Since they're both ultimately pursuing the same goal of running surveys/experiments online and collecting data, we're grouping them together.

They use advanced tooling for just about everything they do, and what could be more important to them than running studies and collecting data? They love the fact that everything is just text, because that makes managing large amounts of content across many programs much easier than in drag & drop interfaces. For many study designs, these people are limited by their prior tools (or in the case of Qualtrics, have to write JavaScript to customize it in a more advanced way). GuidedTrack lets them do just about anything they could need to do in a coding language that's only marginally more difficult to pick up than a drag and drop alternative.

### Scrappy entrepreneurs

Entrepreneurs want to focus on content decisions over development with something more flexible than no-code but easier than a language that requires expertise to build anything substantial (like Python or JavaScript). While many sorts of apps will ultimately need a higher powered language, GuidedTrack + integrations will take them surprisingly far and it doesn't take much to learn. "Library apps" like [Blinkist](https://www.blinkist.com/) or [Headspace](https://www.headspace.com/) work well, as do interactive courses like [[UpLift]] or [[Mind Ease]], and self-monitoring apps like habit trackers all are easily built using GuidedTrack.

### Online course creators and educators

All of the interactive educational programs on [Clearer Thinking](https://www.clearerthinking.org/) are built with it, and we've had corporate trainers contract our team to build programs for them. There's a lot of precedent for making interactive lessons, but less so for course creators. Course creators revealed themselves as a persona through user interviews but I'm really interested in it at this point. From conversations with a few course creators, I have a strong hunch that GuidedTrack could be an easy way for them to break free from the shackles of linear course structures and build an educational experience they envision without hiring developers.

I've participated in a few courses on [Teachable](https://teachable.com/) and [Podia](https://www.podia.com/), and noticed that they follow a linear structure that's really easy to replicate in GuidedTrack. In user interviews with course creators, they revealed that they loved how you can create nonlinear paths in GT. You can ask questions to check how well students comprehend your lessons, and based on that, provide helpful new material. Course creators want their students to all have accounts, and to be able to gate off material behind a one-time purchase or subscription. Additionally, they'll generally have other services in their stack (Mailchimp, Airtable, Zapier, etc.) and appreciate the ability to integrate with those services.

There are also **Business Process Creators.** Frankly, I'm not as familiar with this persona vs. others. We haven't seen external companies do much of this yet, it's mostly [[Spark Wave]] + portfolio companies. That doesn't mean much because technically we're pre-launch so it's to be expected that we would be underrepresented in certain use cases (we've mostly seen researchers, entrepreneurs, and educators). However, it's really great for things like screening job candidates, systematizing processes into interactive checklists, gaining feedback from stakeholders / employees, etc. There are a ton of services that HR people have to purchase individually that could all be made in GuidedTrack. For example, if you could build your employee engagement survey in GuidedTrack (or copy a template from someone else), there's no reason to buy a software that's specifically devoted to that.