- [[Intentionally design for [[failure state]]s]] [[draft]] [[October 10th, 2020]]
    --
    title: Intentionally design for failure states
    tags: Gamification BehavioralProductStrategy Retention
    status: inDevelopment
    --
    A failure state is when users fail to reach their goal in some way. In goal striving, it is inevitable that the user will experience failure states, because a goal is by definition a discrepancy between your desired state of reality and your present state. If we didn't have failure states, the [[Intention-Behavior Gap]] [[There tends to be a gap between what people intend to do and what they actually do, Sheeran & Gollwitzer 2006::rmn]] would be a non-issue (rather than one of the hardest problems in the world to solve. Before people start using your app, they probably tried to accomplish their goals unsuccessfully in some other way.
    Some potential causes of user failure include:
        - Lack of knowledge
        - Obstacles in real life
        - Misinterpreting signals
        - Struggle to pick up where they left off
        - Don't give up on one goal when they should
        - Usability obstacles
        - Forgetfulness
        - Too challenging
        - Lack of belief in themselves
        - Something isn't there that should be
    Many apps ignore failure states and have no plan for when they happen. The user inevitably fails, and [[Users who fail to recover churn]] because they've lost their [[self-efficacy]]. However, games intentionally design for failure because they recognize they have no other choice - otherwise people would stop playing as soon as they mess up. They need to motivate players to retry and help them learn how to be successful.
	
    ### Failure Redemption in [[Hollow Knight]]
	In Hollow Knight, they wanted to make a challenging game because they wanted players to feel the accomplishment of beating something that previously beat them.
	
	So you’re exploring around this map, killing monsters, earning money. When you die, you lose all of your money, and go back to your last checkpoint.
	
	Sounds super demotivating, right?  Well, the same thing is basically happening in a [[streak counter]].  You work up days in a row, and then upon failure, you have to start over again.  Sound similar in structure?
	
	**Hollow Knight** does something clever to deal with this.  When you die, you leave a “shade” where you died, lose all of your money, and go back to your last checkpoint.  In order to get all of your money back, you need to get to the shade and beat it.  If you die again before then, then you lose all the money for good.
	
	Hollow Knight's designers wanted players to try again after failing. In order to encourage that behavior, they gave players something to lose from failing and a chance to regain it all from trying again to get to the point where they lost everything. This allowed the designers to use loss aversion / the endowment effect for motivating the player while they were successful and for restarting when they failed.
	
    ### [[Fabriq]]
	
	Fabriq is a personal relationship management tool that helps you prioritize, track, and invest in the people close to you. You can add contacts to your inner, middle, or outer circle, set connection frequencies, and note down important details.
	When you should connect with a person next is communicated through their touch-base timer, a circle around the contact's picture that is green when it's full, yellow when it's half-full, and red when it's close to empty.
	
	Users generally like this and find it's helpful. Each time the touch base goes into the red, the user has a small failure. If the user lets too many connections slip, then their screen will start to look like this.
		![](https://firebasestorage.googleapis.com/v0/b/firescript-577a2.appspot.com/o/imgs%2Fapp%2FRobAndHisNotes%2FByIvg6D2gA.png?alt=media&token=3d41b6b3-4bc8-4f76-be04-6aad49647d7e)
	
	If it reaches the point where most of the user's contacts are in the red, we offer to give them a fresh start. Fabriq will refresh all of the user's timers, removing the failure state, and take the user through a series of prompts to reduce the amount of social connections they need to make per week.[*]([[difficulty matching]])
	
	What if we want to reduce the likelihood that a user gets to the point where most of their contacts are in the red in the first place? Here we decided to give users the option to "snooze" a connection. If Fabriq sends the user a push notification telling them it's time to reach out to a contact and the user doesn't feel like it, they can snooze that contact and partially refill their timer. This reduces the likelihood that any individual contact will go in the red.
	
    ### [[GuidedTrack]]
	
	[[saved view]] for failure states and GuidedTrack
		{{query: {and: {or: [[failure state]] [[partial failure margin]] [[error code]]} [[GuidedTrack]] {not: {or: [[query]] [[saved view]]}}}}}
	
	With GuidedTrack, we have two primary failure states to deal with.
		- The failure of having a blank page and not knowing what to do with it
		- The failure of seeing error codes when you compile the code
	
	For the blank page failure, we've already added in a visual code editor. This means that someone can successfully build out most of our functionality with what is essentially a drag-and-drop interface. Additionally, we're exploring options to allow users to start a program from a template.
	When users compile their code and run into [[error code]]s, that means that they thought their code worked differently than it actually does.
	
	GuidedTrack is primarily built for people without any prior coding experience. It's made to be easy, but since it's a coding language, error codes are inevitable. At the same time, people who don't code aren't used to seeing error codes in the applications they use. We need to convey to users that they are capable of fixing the errors.
		In order to do this, we designed 
            
    ### Takeaways
        Break big failure up into small failures
        
    
- {{[[TODO]]}} [[Use positive feedback loops to increase user involvement]] should be contrasted with how you can [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]] {{[[∆]]:15+5}}
- {{[[TODO]]}} [[Use positive feedback loops to increase user involvement]] should be contrasted with how you can [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]] {{[[r/moved]]}}[*](((hxGoaz_7R)))
- {{[[TODO]]}} [[Use positive feedback loops to increase user involvement]] should be contrasted with how you can [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]] {{[[r/moved]]}}[*](((hxGoaz_7R)))
    - The most obvious option is with [[dynamic difficulty]] - when users are unsuccessful, try to confer an advantage to them in their next attempt
        - [[Elliott Hedman]] talks about how giving tips in the form of questions preserves [[user agency]] and helps them get started again.
- [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]]
    - "The most obvious option is with [[dynamic difficulty]] - when users are unsuccessful, try to confer an advantage to them in their next attempt"
        - in games like [[Iconoclast]] and [[Half-Life]], you find more health pickup items when you’re low on health
- Give the user an advantage in the next round #[[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]]
- {{[[TODO]]}} [[Use positive feedback loops to increase user involvement]] should be contrasted with how you can [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]] {{[[r/moved]]}}[*](((hxGoaz_7R)))
- In [[Dead Cells]], they [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]] and confer an advantage in the next attempt [*](((oU2SUA65u))). They give the player some money and new weapons as a boost to start out.
- [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]] and confer an advantage in the next attempt
    - When "Failure doesn't persist onto the next attempt" in [[roguelike]]s and there's no negative feedback loops, [[skill level]] is crucial
    - When [[roguelike]]s confer an advantage on the next step or have a [[meta [[progression system]]]], then any player can complete the game. However, it has a weird difficulty curve for [[difficulty matching]].
        - Some games have a meta progression system that's a [[lateral progression]] system.
- {{[[TODO]]}} [[Use positive feedback loops to increase user involvement]] should be contrasted with how you can [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]] {{[[r/moved]]}}[*](((hxGoaz_7R)))
- This increases behavior too much. [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]]
- They [[Intentionally design for [[failure state]]s]]
    - #develop [[failure state]]s can be mitigated through 2 methods: {{[[r/moved]]}}[*](((J2hGHVCKB)))
        - [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]][*]([[[[lens]] of [[failure state]]s]])
        - The positive feedback loop of failure begetting failure can be mitigated if a failure state isn't persisted onto the next round. [*](((j9ecahifi)))
- {{[[TODO]]}} [[Use positive feedback loops to increase user involvement]] should be contrasted with how you can [[Use [[negative feedback loop]]s to [[Intentionally design for [[failure state]]s]]]] {{[[r/moved]]}}[*](((hxGoaz_7R)))
- Let's say I want to prepare for a talk about [[Intentionally design for [[failure state]]s]] for a [gamification conference]([[Gamicon]])
    - I want to give a case study about designing intentionally for failure states, but those thoughts don’t need to be combined into a block. So I’ll write a query that searches for when either of those failure terms were linked to GuidedTrack:
        - {{[[query]]: {and: [[GuidedTrack]] [[failure state]]}}}
