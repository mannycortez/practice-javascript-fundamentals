// Objects have properties and things they can do, similar to real life objects. Like a phone has color, size and model and it can ring, take a picture and use to talk to people.

// Creating an object literal. Uses curly braces instead of parenthesis

let user = {
    name: 'matoshi',
    age: 30,
    email:'manny@cortez.com',
    location:'san diego',
    food: ['pizza', 'fried chicken', 'cherries']
};


// Calling it using dot notation

console.log(user);
console.log(user.name); // this is how to console.log with dots
user.age = 36; // this is how to update age to 36 using dots
console.log(user.age);

// Calling it using square brackets

console.log(user['email']);// this is how to console.log with square brackets
user['name'] = 'Manny'; // this is how to update name using square brackets
console.log(user['name']);


// Do not use keyword 'this' in arrow functions, only regular functions.
// I can store objects inside of arrays. Like the 'blogs' example (title, likes, author)