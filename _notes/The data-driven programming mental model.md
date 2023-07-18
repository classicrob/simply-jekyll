---
title: The data-driven programming mental model
---
One of the core mental models of Clojure is: Write data structures. Create functions that take that data as input and create new data structures as their output, and flow the output of those into other functions. Essentially, model the world through data and its transformations. 

One of my biggest motivations to learn Clojure is to explore the idea of [[Domain-specific languages as end-user software]]. Given the data-driven programming [[mental model]], DSL creation would be just creating a notation that allows people to create data structures, have a bunch of functions that transform those data structures in the background, have a bunch of pre-made functions, and let people create new functions. Sounds easy, right? 🙃️