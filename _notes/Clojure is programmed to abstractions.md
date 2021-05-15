---
title: Clojure is programmed to abstractions
---
This is a dense topic, but the short version is:

Clojure has many different data types. Maps, vectors, and lists are all different data types, but you can generally use the same functions to work with them because, abstractly, they're all sequences. This means you need to learn fewer primitives and functions are more likely to work on whatever data type you're using if you think they will.

See the first couple of sections of [Chapter 4 of Clojure for the Brave and True](https://www.braveclojure.com/core-functions-in-depth/) for more details.