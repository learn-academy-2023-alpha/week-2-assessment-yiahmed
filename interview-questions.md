# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: The difference between a parameter and an argument is that a parameter doesn't need to have any inherent value outside of the function. A function can be called without the parameter existing outside the function. An argument on the other hand must exist outside of the function can must contain logic or a value. Some examples of arguments are arrays and objects.

Researched answer: The difference between a parameter and an argument is that a parameter is are listed within the function and don't exist outside of it. Any variable created within the function is considered a parameter. An argument is a existing value that is passed into the function. Parameters can be used as placeholders for the values of the argument that is passed into the function.

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: The predefined parameter that the map method must take in is the value parameter. The map method is used to iterate across a variable/value and execute logic on each individual value/character. The second optional parameter is the index parameter. While reading docs for the .map() I encountered this parameter and found out it was optional. I don't have much experience using this parameter so I have yet to see what its purpose is.

Researched answer: The map() method takes one required parameter which is a function. This function should accept three arguments: value (required), index (optional), and array (optional). The function cannot be executed without the required parameter and the map() method can't be executed without the required function.

3. What is the difference between map and filter?

Your answer: When using choosing between the built in methods map and filter, they both have their specific uses. The map method runs a function ((parameter) => logic) once through each value of the array and returns the new values using the logic given into a new array at the same index. The filter method does the same in the sense that it runs a function once through each value. The filter method then asses whether the logic states the value is true or false and if true returns the value into a new array.

Researched answer: The map() and filter() are two array methods that are used to manipulate and transform arrays. The map() method transforms each element with in the specified array and returns an new array with the same number of values at the same indexes. The filter() method is different in the sense that it doesn't transform any values, it returns any values that are true according to the logic specified within the method into a new array.

1. What is iteration?

Your answer: Iteration is the action of repeating. An example of iteration would be a loop or a method that goes through each value performing a specific action.

Researched answer: Iteration is the action of executing the same block of code over and over until a specific condition is met.

1. What is the difference between a function and a method?

Your answer: The difference between a function and a method is that a function is meant to be called individually. A method is used on a variable such as an array or an object. Methods contain parameters just like functions but methods are pre-made thus having the name built-in methods and they don't have the need to be assigned like functions do.

Researched answer: The difference between a function and a method is that a method method is a function that is associated with an object, and is called on that object. A function is a reusable block of code that can be called by its name and can access inputs and return results.

6. STRETCH: What is hoisting in JavaScript?

Your answer:

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: Classes are a template for creating objects that share the same properties and methods. They are a way of implementing object-oriented programming (OOP) concepts in JavaScript.

2. Spread operator: A spread operator is a feature that allows an iterable (such as an array or a string) to be expanded into individual elements or arguments.

3. React state: React state refers to an object that represents the internal state of a component. It is used to store and manage data that changes over time and affects the behavior of the component.

4. React props: React props are a tool used for passing data from a parent component to a child component. They are a way of sharing information between components without the need for a shared state or global variables.

5. DOM events: DOM events are a tool for responding to user actions and other events that occur within the browser. Events can be triggered by user actions such as mouse clicks, keyboard input, or other actions.
