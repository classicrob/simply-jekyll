---
title: Direct functions and end-user programming
---
Just a little anecdote of a small project:

I needed to make a program to resize images in a weird way for [[GuidedTrack]]. Instead of scaling images, I needed to add whitespace to the horizontal margins. As far as I could tell, Clojure didn't have many pre-built libraries for it, so I switched to Racket, where it seemed to have some specific functions out of the box to do what I wanted. I figured a Lisp is a Lisp so it couldn't be that different. I was able to make a function in 6 lines of code that would take an images name and dimensions that would transform it. 

Here's the first version of it:
![image-resizer-first-draft](/assets/blogpics/image-resizer-first-draft.png)

Here's a version that's a bit more automatic (so I wouldn't need to manually enter the dimensions, just the title):
![image-resizer-second-draft](/assets/blogpics/image-resizer-second-draft.png)

The crazy thing to me about this is that the first version was fairly plug and play from finding the right items in the documentation. I'm not saying I would have been able to figure it out without any prior knowledge of Lisp from Clojure, but it didn't take much to get me there. That's 6 lines of code to do something where I could have spent a while searching to try and find a pre-made tool. The end function was so easy to use after it was built that I could have easily told someone else how to use it. It felt like I created my own little command line tool.

End-user programming is an incredibly exciting topic for me, and this gives me faith in [[Domain-specific languages as end-user software]]. What if we just give people a bunch of prepackaged, composable functions? What if people look at the REPL as an "app" to use these functions?

From [[Wade Dominic]]:

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">Still think software development is working on reproducible magic.<br><br>You go from this thing not being possible. To it sometimes being possible. To it being possible 99.9% of the time. <br><br>The 0.1% is just the universe letting you know that you still don&#39;t know shit.</p>&mdash; Wade Dominic (@groundedSAGE) <a href="https://twitter.com/groundedSAGE/status/1392483297838739463?ref\_src=twsrc%5Etfw">May 12, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
