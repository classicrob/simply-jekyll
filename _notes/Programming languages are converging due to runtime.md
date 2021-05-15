---
title: Programming languages are converging due to runtime
---
I recently sent [[James Lu]] this fascinating video by "Uncle Bob" and asked him for his thoughts.

<iframe width="560" height="315" src="https://www.youtube.com/embed/P2yr-3F6PQo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### This is his response, discussing runtime and its innovation:

Over a multi-decade horizon, programming languages ARE converging.  
They're converging not in language-level features, that's not important, they're converging in the runtime's features. A runtime is the program that executes the language.  
  
Runtimes allow programs to execute quickly.  
  
People are a bit off when they say "Every programming language is different, there is no perfect language for every task." There is a perfect programming language for everything. It's called Python.  
  
But Python is slow because its runtime supports all the features Python has, and Python has a lot of features.  
  
A very large number of real-world applications have to be significantly faster than what Python's current runtime can handle.  
  
**Runtimes** are converging. Runtimes gain new features that allow languages to be fast.  
  
Runtime examples: GCC, OpenJDK, OpenJ9, CPython, Rosyln C# compiler, TruffleRuby, V8, and LuaJIT.  
  
The runtime is how the computer understands a program written in a programming language at a deep- not shallow- level. It is what allows the computer to capture and understand the intent of the programmer.  
  
Most runtimes do not really execute the program directly. They are executing the intent.
  
JITs, such as the one JS has in Google Chrome, or OpenJDK, do this by having a program that guesses at the intent by suing the actual execution of the code reading to the program itself, to guess the intent and translate that into a faster program. If it guesses the intent incorrectly– it goes back and executes the program literally, while in parallel starts guessing again.  
  
C++ less room to guess, forcing the programmer to be specific. You have to tell it things are an integer. (In JavaScript, you just use a number, and the runtime figures out if it's an integer or a decimal/floating point on the fly, writing code according.) But it also executes the intent, in a different way.  
  
A safe runtime is one that detects the programmer's error, and halts execution. But that can hinder the runtime in writing fast code. It may need to write code to detect errors.  C++ programs have what we can consider a "literal meaning". It's what a naive computer would do to execute the code. C++ compilers (C++'s runtime) believe the programmer does not intend to make a program that has an error. (Footnote: This is called undefined behavior) It assumes the programmer intended the program to do something useful. Sometimes programmers will write a program, that upon certain conditions does something useless. The C++ runtime's mentality is "You don't want the useless part to slow down the useful part do you?" So it writes code to make the times when it is useful faster. But instead of doing something useless (like crashing) when those conditions are met, the runtime will change it to a program that does something very useful for someone else. The marketing name for not writing code to detect errors is "zero-overhead programming."  
  
For example, C++ allows the programmer to assume a number will not be greater than a certain amount. It makes increasing numbers faster and easier. As a result, the Boeing 747, which puts the time-since-boot number in a number that was chosen to be too small, the plane must be rebooted every 2 weeks by a technician. Otherwise it could explode. I'm exaggerating only slightly with the explode part.  
  
Another example is [Heartbleed](https://heartbleed.com/). Programmers did not intend to code heartbleed. The runtime wrote heartbleed. Or rather, the programmers never accounted for someone doing things that activate heartbleed and left it as impossible. The C/C++ runtime understood that. It wrote code that, instead of aborting and thus immediately alerting the programmer, it read data that was supposed to be secret. Most security bugs are from how C/C++ runtimes interpret programmer intent.  
  
Runtimes have been gaining features. [Garbage collection](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)), [RAII](https://en.wikipedia.org/wiki/Resource_acquisition_is_initialization), [value types](https://en.wikipedia.org/wiki/Value_type_and_reference_type), virtual method inlining, [auto-vectorization](https://en.wikipedia.org/wiki/Automatic_vectorization), [stack allocation](https://en.wikipedia.org/wiki/Stack-based_memory_allocation), [dynamic type inference](https://en.wikipedia.org/wiki/Type_inference), lazy deoptimization, and many other optimizations.  
  
Runtime features enable language features to be used with less and less overhead.  
  
Originally, only Java and its forebearers had automatic garbage collection, defined as graph nodes unreachable from the root. But now C/C++ is very slowly getting garbage collection, powered special runtime technology to meet what people expect out of C++ runtimes: have a high frame rate and low-level control.  
  
And Java's runtime implementation slowly improved to have similar characteristics to how C++ is doing it manually.  
  
Runtime features enable language features. The language features reflect the runtime properties the language's users desire out of it.
  
Innovation in runtime technology allows features formerly inappropriate because of the performance demand of what people use the language runtime for (examples: low latency/high framerate, low battery usage, fast throughput) language features to be used with less overhead