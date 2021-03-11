---
title: GuidedTrack live preview
---
Originally, [[GuidedTrack]] had two separate views for working with your program. You could either be in the code view, where you were editing code, or in the preview, where you saw the output of your code.

There were a few problems with that. One was that people would need to read and write code while picturing in their head what the output would be. Then when they were looking at the preview, they needed to remember the code that would produce what they were seeing. This meant that it was challenging for people to build up a [[mental model]] of how GuidedTrack works. 

Brand new users looking at example programs would have to take a few mental steps to really understand the code, and would be frustrated by the need to constantly flip between the code and preview. One common complaint we heard during user interviews was that it was hard to tell what would be on one page and what would be on another. This is one of the relative disadvantages of a textual interface vs. using a GUI like Typeform - things aren't quite so clearly separated into "blocks."

While writing code, new users would often write for a while without checking the output in the preview. By the time they would click on the preview, they would have built up a laundry list of error messages - perhaps so many that they would grow overwhelmed.

We implemented a live preview, technically referred to as a debugger, where it shows you your code side-by-side with the preview, and it highlights the currently active code gray so you know where you are in the program. Users now experience far higher [[Self-efficacy]] as a result, as they are able to read code while knowing exactly what was going on.

![](/assets/blogpics/debugger.gif)

We built an MVP of this based on a combination of theory, specific requests from users, and validation from competitors. Other form builders do the same thing, and there is a rich history in [[Learnable programming]] around live previews. At this point, a live preview seemed obvious - it would tighten the [[feedback loop]] to make the output of user behavior more obvious.

### Validation

The MVP required you to refresh your preview any time you updated your code. We performed some informal "usability tests" on friends and family and noticed that they were doing much better than the average new user would with the code view separated from the preview. They all reported wanting it to automatically update. I followed this up with a more formal user interview with someone less biased, and we saw the same trend.

At this point, I just wanted to bring in a lot of qualitative insight quickly, as user interviews take up a lot of time. Belen Cobeta, [[Spencer Greenberg]], and I developed the following study protocol:

1. Deploy a 2 minute screening survey (made with GuidedTrack, of course) via [[Positly]] to find people who were similar to our users. 10 people who passed the screener would receive an email.
2. This email included a link to a GuidedTrack program that would take them through a series of instructions. We asked them to download [Loom](loom.com) so they could record video of themselves, fill out the questionnaire we're planning on giving new users, log into the an account we made for each of them in the staging build for GuidedTrack, and then look through and modify example programs while thinking out loud. These tasks took around half an hour.
3. After they completed their tasks, they would fill out a feedback survey asking them qualitative questions about their experience and then submit their loom recording. After this, they would receive their compensation.

Remarkably, we saw the same trend as before among every single one of them: they believed that learning GuidedTrack was easy, they were able to more easily predict the output of code, and they wanted it to auto-update the preview whenever they changed anything in the code.

At this point, it was clear that the debugger represented a huge win for the onboarding. It was also obvious that it would be worth the effort to figure out auto-update. We will add the debugger to the main production build when that is ready.