//Organizing and storing data is a foundational concept of programming.
//One way we organise data in real life is by making lists. Let's make one here:
/*New Year's Resolutions:
1. Keep a Journal
2. Take a falconry class
3. Learn Kubernetes*/

//Now lets write this list in JavaScript, as an array.
let newYearsResolutions = ['Keep a journal', 'Take a falconry class', 'Learn Kubernetes'];
//Arrays are JavaScript's way of making lists.
//Arays can store any data types (including strings, numbers, and booleans)
//Like lists, arrays are ordered, meaning each item has a numbered position.

//One way we can create an array is to use an array literal.
//An array literal creates an array by wrapping items in square brackets []
//Remember from the previous exercise, arrays can store any data that holds all the same data types or an array that holds different data types.

const hobbies = ['Theater', 'rollerskating', 'partay'];
console.log(hobbies);
//I definately did not make the party hobby up

//Each element in an array has a numbered position known as index.
//We can access individual items using their index, which is similar to referencing an item in a list based on the item's position (or number).
//Arrays in JavaScript are zero-indexed, meaning the positions start counting from 0 rather than 1. Therefore, the first item in an array will be at position 0.

//Let's see how we could access an element in our "hobbies" array:
console.log(hobbies[0]);
//This should respond with "Theater".

//Practice:
let listItem = hobbies;
console.log(hobbies[0]);
//Theater
console.log(hobbies[2]);
//Partay
console.log(hobbies[3]);
//undefined

let seasons = ['Winter', 'Spring', 'Summer', 'Fall'];
seasons[3] = 'Autumn';
console.log(seasons);
// [ 'Winter', 'Spring', 'Summer', 'Autumn' ]

newYearsResolutions[0] = 'Graduate';
console.log(newYearsResolutions);