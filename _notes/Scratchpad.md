#draft
-   Write about explainers vs. feedback loops
-   Clean up my writing on feedback loops
-   Add my notes from my Public Roam in - [[Progress monitoring and feedback systems]]
-   Review my notes on [[Use positive feedback loops to increase user involvement]]
-   Once done with that, update my GT plan to link to stuff about feedback loops

# Explainers vs. Feedback Loops
An explainer

[[Feedback loops are a more efficient method of communication]]



# [[explainer]]


# Feedback loop

In game design, feedback loops are the process with which players update their intuition. In a game, it looks like this:

![](/assets/blogpics/GameFeedbackLoop.png)
*From this youtube video: https://www.youtube.com/watch?v=PMj8Q4ViKzs*

I also find it helpful to visualize it more generally like this. It's basically the same thing, just with more app-specific language. The main difference is that I would say the "mental model" of how things work comes into play at the stage where the user is making a prediction, and is updated at the comparison point.
![](/assets/blogpics/AppFeedbackLoop.png)

Based on the discrepancy between the user's perception of the app/user's current and desired/predicted state, users can:
- Update their behavior
- Update their desired/predicted state
- Update their predictions of the outcomes of their behavior

Designing a feedback loop to influence user behavior is about showing the user the discrepancy between current and predicted/desired states of reality, while also ensuring that their causal predictions of the outcomes of their behavior on the system are as accurate as possible.

I don't expect users to immediately understand the impact of their behavior on the system. If I did, [[Continuous onboarding]] wouldn't be necessary. The idea is that people learn by going through this loop multiple times, seeing the outputs of their behavior, and then updating their expectations about what the outputs of their behavior will be in the future.

An example can be seen in [[Onboarding Plan as Presented to GuidedTrack on 10-20-20]], specifically the section "Tighten feedback loops to build appropriate mental models." 

In short - [[GuidedTrack]] is a simple and readable programming language. If new users can read a program and understand what's going on, then they experience [[Self-efficacy]]. Before, users would read their code separately from viewing a preview. It was hard to understand what each line of code might do because you needed to hold predictions in your head. Now we're developing a side-by-side preview / debugger that shows you the code next to the program, and highlights the specific code that's active at any point. This makes the connection between inputs and outputs clear and allows the user to tinker and more quickly adjust their mental models of how they can work in GuidedTrack.

The more clearly the user understands how the app will interpret their behavior, the more effectively they'll be able to operate within the app. Providing immediate feedback (or getting as close to immediate feedback as possible) as a response to user behavior is a solid way to do that.

An important thing to note from the above example - when the user improves their mental model of how the app works, they feel more competent. As a result, they'll enjoy GuidedTrack more and be more resilient to things not working quite the way they expect, because they expect that they'll be able to figure it out.

In general, while designing a product for behavior change, I want reliable feedback loops where I know that if people are using the product they are learning how it works. 

*Note: This is similar to what [[Perceptual Control Theory]] states. My main point of disagreement is that I don't believe everything is a negative feedback loop. I agree that people's behavior is generally in response to some discrepancy between predicted/desired and actual state, but I disagree that the response is always to "correct" the error term.*