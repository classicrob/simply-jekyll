---
title: How I'm learning Clojure
---
On these sorts of things, I like to [[Follow curiosity unconditionally]]. While I may not be progressing down a curriculum as fast as others, the fact that I'm trusting my curiosity means that I'm consuming more content overall. It's self-motivated, rather than obligated.

[[There is no curriculum that encompasses everything you should know]] applies here as well. It should be clear that my desired use case (exploring [[Domain-specific languages as end-user software]] and trying to create runnable models of systems) is non-traditional. As of right now, I have no intention of becoming a developer as a career move. This is largely personal curiosity, so pick and choose what you like.

At the top I just want to thank my friends: [[Brian James Rubinton]], [[Tasshin Fogleman]], [[Christopher Small]], and [[Paul Bauer]] have all been especially helpful with Clojure. [[James Lu]] has been helpful with programming concepts more generally.

### General concepts

[The Joy of Clojure](https://www.manning.com/books/the-joy-of-clojure-second-edition): Really great for the theoretical knowledge. Assumes some prior knowledge of coding concepts, so I’m using it more as my computer science source. It became clear fairly quickly that it wasn't for beginners, but as I'm learning from other content

[Clojure for the Brave and True](https://www.braveclojure.com/): Most of its examples in early chapters are pretty bad at showing the actual principles going on. I think Clojure from the Ground Up is better at this. In the “putting it all together” sections, the examples tend to be a bit more in depth than Clojure from the Ground Up, so I like it then. I've found it helpful to read about the concept first in Clojure from the Ground Up, and then come back to Clojure for the Brave and True.

[Clojure from the Ground Up](https://aphyr.com/posts/301-clojure-from-the-ground-up-welcome): This was the first intro I found that felt accessible. They explain the mechanics of the language very well and have a lot of legible examples. It was especially helpful for understanding Clojure data structures. I would recommend this as a starting resource. It glossed over recursion (functions that call themselves) pretty quickly though in chapters 3/4. Brave and True had the same issue. I was starting to feel lost, but then some people recommended The Little Schemer as a clear explanation of recursion. Luckily, this is one of the books Tasshin sent me, so I jumped in.

[The Little Schemer](https://www.amazon.com/Little-Schemer-Daniel-P-Friedman/dp/0262560992): I love it, what a delightful book. Very accessible approach to teaching me recursion through practice problems that are described step-by-step and require no prior knowledge. It shows me how to approach the problems and think about the questions and instructions the computer is following. I’m also very grateful for [this website](https://juliangamble.com/blog/2012/07/20/the-little-schemer-in-clojure/) that translates the concepts and functions to Clojure. Like Clojure, Scheme is a LISP dialect, so for the most part things are so similar that it doesn't matter, but that website made it so I could run the functions in the primary language I'm learning.

The Little Schemer also helped me realize that in Clojure, most of what I'm doing is using functions to select items from within a list and do stuff with them. 

[4clojure](https://www.4clojure.com/problem/1): A great way to practice. 90% of Clojure seems like it’s just operating on sequences or elements within sequences so it’s a good way to learn. There aren’t always the best explanations or hints though. I've made it through 20 or so problems as of the last time I updated this.

### Queries and navigation

[[The data-driven programming mental model]] is one of the core mental models of Clojure. Code is data and data is code, so being able to work with data is how I could build [[Domain-specific languages as end-user software]].

[Learn Datalog Today](http://www.learndatalogtoday.org/): really cool and accessible way to get started with Datalog. I've made it through a few chapters so far, and [this video is also great](https://www.youtube.com/watch?v=tV4pHW_WOrY&t=1461s), thanks to [[Stian Haklev]] for [the recommendation](https://twitter.com/houshuang/status/1361990006039076865?s=20). Datalog is interesting to me because I've got this hefty [EDN](https://github.com/edn-format/edn) (Clojure's alternative to JSON) from my [[Roam]] export and I think I could do some really cool things with it.

[Specter](https://github.com/redplanetlabs/specter): A Clojure library that makes it really easy to navigate nested data structures and apply functions to them. Marketed as "Clojure's Missing Piece." From my impressions talking with Paul and Tasshin, once you get used to it you'll want to use it in all of your programs. Since Clojure is mostly just finding stuff in nested sequences to plug into other functions, this seems like an obviously helpful library. I followed along with [this video first](https://www.youtube.com/watch?v=VTCy_DkAJGk&t=2058s) and [this one second](https://www.youtube.com/watch?v=rh5J4vacG98), and have used it in a couple of small projects. Some of the examples in my other resources point to more roundabout ways of performing certain functions, which I'll generally try to translate into Specter.

### Videos:

Oh gosh so many, most of which I barely understand. However, here are some good ones that felt genuinely illuminating (that I haven't already mentioned elsewhere in this post):

[Solving Problems the Clojure Way](https://www.youtube.com/watch?v=vK1DazRK_a0) by Rafal Dittwald helped me grasp the mental model of data-driven programming. 

One of the weird things about Clojure is that, through macros, you can actually write your code in multiple syntaxes. That can be a bit confusing, especially to a beginner who's trying to wrap their head around one. [This video was helpful for that](https://www.youtube.com/watch?v=qxE5wDbt964).

Basically anything by [[Eric Normand]]. His videos on functional programming are great. Here are two I recommend: [Lisp, a language for stratefied design](https://www.youtube.com/watch?v=GbZpTHg0KfQ) and this video on [domain-driven design](https://www.youtube.com/watch?v=Yx9s1q89MME).

### Projects

[[The most successful app adoptions come from a project]], so I'm just trying as hard as I can to put things into context. Right now my main project is just playing around with the export of my Roam EDN, but I'm also picking up little ones along the way. See [[Direct functions and end-user programming]]. I have more ideas than action here so far, but I'm also working on some text transformations on my directory of markdown files (the main area where I write notes now). I'm working through the books described at the top.

### Tooling

**IDE:** I use the community edition of [IntelliJ + Cursive](https://www.youtube.com/watch?v=vt1y2FbWQMg) (free for noncommercial use). Since I'm interested in [[Learnable programming]], I wanted a tool that had a great debugger. I don't really know what to do with the debugger yet, but that's another story. I like that I can hover preview over Clojure functions to see their documentation. I've also used a bit of [VS Code + Calva](https://www.youtube.com/watch?v=V3_mrbBHGMA) because it works fairly well out of the box. More things seem to "just work" with Cursive though. I've played around with Doom Emacs before when I was curious about its UX and trying to see how Org-Mode worked. While Emacs [is the canonical choice,](https://www.braveclojure.com/basic-emacs/) I would say that unless you want to spend a lot of time learning your tool before you can learn Clojure or you already know how to use Emacs, I'd go with one of the other two. You can always transition to Emacs later.

[Parinfer](https://shaunlebron.github.io/parinfer/): This is a plugin that works on most IDEs that handle Clojure that infers the locations of your closing parens (parens, square brackets, or curly brackets), from your indentation. This makes it easier to write code (parens are matched, paired, and syntactically correct automatically) while also prompting me more towards indentation, which makes the structure of my code more visually apparent to myself. [Watch this talk](https://www.youtube.com/watch?v=K0Tsa3smr1w) if you're a nerd like me and want to hear about the UX research.

[Leiningen](https://leiningen.org/): Okay so this was the weirdest part for me. A few things to remember: `lein new app "name"` is how you create a new Clojure project. The name should all be lower case. In order to use a library, go to your project.clj file, add `[library "version-number"]` to :dependencies like how you see below, and then add it to your namespace in your core.clj file following instructions on how to do that. If you don't add it to your dependencies first you'll get an error message about it not being in your classpath or something. After you add it to your dependencies, go to your terminal, write `cd project/file/path`, and then write `lein repl`. Leiningen will download the dependencies for you. I spent like 3 or 4 hours trying to figure this out before Brian helped me figure this out.

```clojure
:dependencies [[org.clojure/clojure "1.10.1"]
               [datascript "1.1.0"]]
```

Your namespace should look something like this:
```clojure
(ns playing-with-roam-backup.core
  (:require [clojure.java.io :as io]
            [clojure.edn :as edn]
            [datascript.core :as d]))
```