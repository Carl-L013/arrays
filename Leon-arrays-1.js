//Arrays with let and const
/*You may recall that you can declare variables with both let and const keywords.
Variables declared with let can be reassigned.

Variables declared with the const keyword cannot be reassigned.

However, elements in an array declared with const remain mutable. 
Meaning that we can change the contents of a const array, but cannot reassign a new array or a different value.*/

//Practice Time!

let condiments = ["Ketchup", "Mustard", "Relish"];
condiments[0] = 'Mayo';
console.log(condiments);
condiments = 'Mayo';
console.log(condiments);

const utensils = ['fork', 'spoon', 'knife']
utensils[2] = 'spork';
console.log(utensils);

const newYearsResolutions = ['Keep a journal', 'Take a Falconry class'];
console.log(newYearsResolutions.length);
//output: 2
console.log(newYearsResolutions[newYearsResolutions.length -1]);
//output: Take a Falconry class

//The .length property
/*We use dot notation, chaining a period with the property name to the array, to access the length property of the newYearsResolutions array.

Then we log the length of newYearsResolutions to the console.

Since newYearsResolutions has two elements, 2 would be logged to the console.

When we want to know how many elements are in an array, we can access the .length property.*/


//Practice Time!!

console.log(condiments.length);

//The .push() method

/*
Lets learn about some built-in JavaScript method that make working with arrays easier.
These methods are specifically called on arrays to make common tasks, like adding and removing elements, more straightforward.

One method, .push() allows us to add items to the end of an array.
Here is an example of how this is used:
*/

const itemTracker = ['item 0', 'item 1', 'item 2'];
itemTracker.push('item 3', 'item 4');
console.log(itemTracker);

//Practice Time!!!

const chores = ['take out trash', 'clean room', 'wash dishes'];
chores.push('walk dog', 'make food');
console.log(chores);

//Another array method, .pop(), removes the last item of an array:

/*
.pop() does not take any arguments, it simply removes the last element of an array.
.pop() returns the value of the last element. In the example, we store the returned value in a variable removed to be used for later.
.pop() is a method that mutates the initial array.

When you need to mutate an array by removing the last element, use .pop()
*/

const removed = chores.pop();
console.log(chores);
console.log(removed);

//yipppeeee

/*
Some "equivalent" methods to "push" and "pop" that operate on the first item in an array are:
.shift() and .unshift()
.shift() works from the beginning of the array and removes the first element
similarly to .pop(), it returns the removed element or undefined.
.shift() is destructive and relies on the .length property
.unshift() is the opposite of .shift() and inserts elements at the beginning of the array.
.unshift() returns the new elements and is destructive as well.
It also relies on the .length property.
*/