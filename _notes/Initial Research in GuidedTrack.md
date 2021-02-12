*If you have not yet read the [[Background info on GuidedTrack]], I would highly recommend reading that first.*

### First, I wanted to look at what was already there

We have help documentation, a location for people to ask questions to support, and a few sample programs made in GuidedTrack so people can learn through observation.

## Hard Problem of Onboarding Horizontal Products

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

Not knowing how to write code was actually the easy part. We have a visual code editor that allows the user to select what they want to do and then fill out a form to generate the correct code. Our help documentation is very thorough, easy to use, and filled with examples. We give the user sample programs to see examples in context. **Our users so far have told us that it's very easy to learn GuidedTrack.** However, many people don't give it a chance because of the other failure states. **We needed to make a positive first impression on users so they would give it a shot and realize they were capable of learning.**  ^417687

* *See [[Adoption requires a baseline of user involvement in order to overcome inertia]].*

The blank page failure state was significant. [[The user may have a lack of imagination as to what user goals they can accomplish]], and we really want new users to play with GuidedTrack. [[The most successful app adoptions come from a project]], largely because that would allow the user to see GuidedTrack in context. If people don't know what to use it for, then they won't use it. They need some help coming up with ideas so they could have something exciting enough that they would put effort into learning.

The error code failure state is a main focus for the onboarding. When people see an error, we want them to think to themselves, "I can fix this!" and "I know what's wrong." We also want to avoid a scenario where people write a ton of code before checking it by compiling and see a buildup of errors long enough that it feels daunting to deal with. Ideally, **new users** check their code frequently early in the experience and only need to fix one or two errors at a time.

[[User skill level increases over time]], so eventually they can write code comfortably for longer without checking while also feeling capable of dealing with longer lists of errors. However, that is bad practice for new users, and people without a coding background likely won't yet have a habit of checking their code frequently.



### Personas - Who is using GuidedTrack?

