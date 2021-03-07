#presentation/feedbackloopsandexplainers 

Debugger

Readability

Remember everything vs. See side-by-side

People don't hold mental representations

Matt G Ref

Learnable Programming quote about feedback loops in LPE

--
In game design, feedback loops are the process through which players update their intuition. In a game, it looks like this:

![](/assets/blogpics/GameFeedbackLoop.png)
*From this youtube video: https://www.youtube.com/watch?v=PMj8Q4ViKzs*

I also find it helpful to visualize it more generally like this. It's basically the same thing, just with more app-specific language. The main difference is that I would say the "mental model" of how things work comes into play at the stage where the user is making a prediction, and is updated at the comparison point.

Based on the discrepancy between the user's perception of the app/user's current and desired/predicted state, users can:
- Update their behavior
- Update their desired/predicted state
- Update their predictions of the outcomes of their behavior

Designing a feedback loop to influence user behavior is about showing the user the discrepancy between current and predicted/desired states of reality, while also ensuring that their causal predictions of the outcomes of their behavior on the system are as accurate as possible.

I don't expect users to immediately understand the impact of their behavior on the system. If I did, [[Continuous onboarding]] wouldn't be necessary. The idea is that people learn by going through this loop multiple times, seeing the outputs of their behavior, and then updating their expectations about what the outputs of their behavior will be in the future.

The more clearly the user understands how the app will interpret their behavior, the more effectively they'll be able to operate within the app. Providing immediate feedback (or getting as close to immediate feedback as possible) as a response to user behavior is a solid way to do that.

Before, it used to be the case that users would have to read their code and form a prediction in their head about what the output would be. When they would run their code, they needed to remember what code they had written in order to produce that outcome. If something didn't work quite like they expected it would, fixing the mistake required the user to hold a lot of information in their working memory.

Now with the debugger, they can see the program being run side-by-side with the code, highlighting the active code to make it immediately visible what produces what. Suddenly, GuidedTrack code became more readable. People didn't have to remember or predict much of anything to see code and understand what the output would be.

In GuidedTrack, there are a few feedback loops running simultaneously. One is around failure - people write code, check it in the compiler, and see that it does or doesn't work. If it works, then great. If not, they try to fix their code and check again, or they give up. If they don't have an idea of how to fix their code and can't tell where the error is, then they are more likely to give up.

"intuitive design" is less about designing something that is intuitive and more about designing something that builds intuition. This distinction is especially important if you're building an innovative product, where prior intuition does not exist. GuidedTrack is way too powerful to be intuitive from the beginning.


Since we've tightened this feedback loop, it's way easier for users to learn how to use GuidedTrack correctly through observation of examples we create and through their own experimentation. This addresses the key behaviors described earlier and more in an open-ended way. Templates build on the debugger.