---
title: Feedback loops are a more efficient method of communication
tags: inProgress
---
I'm trying to train my dog not to jump on the bed while I sleep. Up until recently, we've had him sleep in the crate at night, but ideally we'd be able to give Bennie a bit more freedom. He's allowed to hang out with us on the bed during the day, so it's surely confusing that he can't at night. He also doesn't understand English, so we can't just explain to him the rules! 

To teach him the rules, we have to leave the crate door open at night, wait for him to jump on the bed, and then kick him off. We need to show him how his behavior is interpreted by the rules of the system.

In [[GuidedTrack]], we started off with a very different onboarding plan than what we have currently. The first iteration (before I started working with them) loaded each new account with sample programs that were very well commented to explain precisely what each function did. The second iteration (after I started working with them) had "competencies," which were essentially worksheets that would walk you through the steps of creating various types of programs, like a survey, experiment, or interactive lesson. These were also precisely commented to describe each step the user would take and the mechanics of what they were doing. One of the ultimate ideas behind the competencies is that they would place help documentation into the context of mini-projects, and people would be able to find those projects efficiently.

When we started doing user interviews, we noticed a few things.
1. It didn't seem to matter how precise our language was. There would always be misunderstandings.
2. Nonprogrammers would look at heavily commented code and be intimidated. It was almost like the fact that there were so many comments sent a signal that there was a lot to learn. Additionally, the comments broke up the code, making it more difficult to grasp the bigger picture.
3. Many people just skipped this optional instructional material.

We ultimately realized that both approaches sample programs and the competency system were [[explainer]]s.

When we decided to focus on more fundamental [[feedback loop]]s to make GuidedTrack inherently more learnable, we realized through user interviews that we didn't need to rely so much on explainers. With our side-by-side preview/debugger, we were literally able to remove comments and make something that is easier to understand and less intimidating. Our starter programs were suddenly self-explanatory. Compare the two images below of the same program:

![](/assets/blogpics/CommentedCodeInteractiveLesson.jpeg)

![](/assets/blogpics/Side-by-side-preview-lesson.png)

A side-by-side preview tightened the feedback loop between behavioral inputs (writing code) and viewing the output, allowing the user to gain a mental model for how GuidedTrack transforms their inputs into outputs. What's more? As long as you're using GuidedTrack, that feedback loop is unavoidable. More usage naturally leads to better understanding.