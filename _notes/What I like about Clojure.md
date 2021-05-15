---
title: What I like about Clojure
---
The syntax of Clojure is simple and uniform. In order to enable learnable programming, people should not have to think hard about syntax. When I look at code in other languages, I see so much syntax that I don't even want to think about learning it. 

![](/assets/blogpics/joy-clojure-uniform-syntax.png)
*An excerpt from my notes on [The Joy of Clojure](https://www.manning.com/books/the-joy-of-clojure-second-edition)*

In Clojure, just about everything you'll do is (operator argument argument). The fact that it's a lot of parentheses doesn't scare me... if anything, it makes it look more uniform and consistent.
 
Some example functions:
```clojure
(+ 1 2) 
; adds 1 and 2

(+ 3 (/ 6 2))
; adds 3 and 3

(define x "hello")
; defines the var x as the string "hello"

(reverse [1 2 3 4])
;reverses the order to '(4 3 2 1)
```

You can even use [Parinfer](https://shaunlebron.github.io/parinfer/) to make it so Clojure is basically an indentation language, reducing the syntax overhead even more. You barely need to pay attention to parentheses, they're more or less just a prefix at that point.

<blockquote class="twitter-tweet"><p lang="en" dir="ltr">But here&#39;s something awesome too: Parinfer is a structural editor that infers your parentheses from your indentation, so everything will be balanced and visually pleasing. Even less syntax to think about. Quick little video to show what I&#39;m talking about <a href="https://t.co/08NAkUBlAN">https://t.co/08NAkUBlAN</a></p>&mdash; Robert Haisfield (@RobertHaisfield) <a href="https://twitter.com/RobertHaisfield/status/1392998552461135872?ref\_src=twsrc%5Etfw">May 14, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>

I love that functions can be treated as arguments for other functions. Clojure (and Lisp more generally) is so composable that I am able to make extremely simple and direct fill in the blank functions. See [[Direct functions and end-user programming]]. The fact that [[Clojure is programmed to abstractions]] means that Clojure is basically just sequence manipulation.

I also love the [[The data-driven programming mental model]].

This thread has more of my early thoughts on that:
<blockquote class="twitter-tweet"><p lang="en" dir="ltr">I just want to use Clojure data structures (composable collections) and functions to model out and visualize systems I&#39;m working with. I see what people say when they describe Clojure as a tool for thought.</p>&mdash; Robert Haisfield (@RobertHaisfield) <a href="https://twitter.com/RobertHaisfield/status/1390100663023980553?ref\_src=twsrc%5Etfw">May 6, 2021</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>