---
title: Provide a smooth learning curve from new user to power user
---
Apps built for power usage are capable of so many things that they can't be learned in a day. This points towards the necessity of [[Continuous onboarding]] - if we tried to shove all of that information down the user's throat too early, they would just get intimidated and quit.

Given that I'm working on the onboarding for [[GuidedTrack]], I'll talk about how we're creating a smooth learning curve. If a goal is [[Removing GUI elements as the user's skill level increases]] to allow the user to interact more directly with our data structure by just typing what they want to happen, then we need to give them training wheels to go from stage to stage.

Below are just a few examples of us thinking about the stages of a user's progression and how we might provide an on ramp to the next stage.

### Side-by-side preview

When new users are learning how to read the code, we want them to use the side-by-side preview. This will help them understand exactly what code produces the output that they see in the preview, helping them gain an early mental model of how GuidedTrack works before they even create anything.

![](/assets/blogpics/debugger.gif)

### Toolbar

We expect brand new users to use the toolbar. They can find whatever command they are trying to execute and just fill out a form that generates code for them. This allows them to write code before they know how to write code!

![](/assets/blogpics/GuidedTrackToolbarQuestion.png)

Another way to do this would be something like the [Scratch](https://scratch.mit.edu/) visual editor.

![](/assets/blogpics/ScratchVisualEditor.png)

### Contextually aware autocomplete

The fastest way possible to create programs in GuidedTrack is to type code without looking at references. As they start to see the same code over and over again from the toolbar, they might try to do it themselves.

One thing we're considering (up in the air when or if we do this) is contextually aware autocomplete. Right now, we have dumb autocomplete - any time you type an asterisk, it will show you all possible keywords and attributes. What if it only showed you options that were syntactically correct?

For example, the following code is syntactically incorrect:

![](/assets/blogpics/ContextualAutocompleteSyntaxError.png)

Whereas this code is syntactically correct:

![](/assets/blogpics/ContextualAutocompleteSyntaxCorrect.png)

What if "type" didn't even come up as an autocompletion option if it wasn't indented underneath a question? If autocomplete only showed options that were syntactically possible, then that would help make typing code more idiot proof for people who are transitioning from using the toolbar.

### Command Palette

While we don't have a true command palette, we're working on a search bar that will pull up code snippets, help documentation, and relevant toolbar sections. Now users can read anything they are unfamiliar with, plug a search term into the search bar, and find out what it is and how it works. Additionally, if they know which command they want to use but don't know how to write it on their own, they can pull up a toolbar form from this search bar, providing a speed increase over the multi-click oriented user flow they had before.

![command K in SuperHuman](/assets/blogpics/CmdK-Superhuman.gif)

