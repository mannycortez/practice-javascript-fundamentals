// regular functions
// const calcArea = function(radius) {
//     return 3.14 * radius**2;
// }

// const greet = function() {
//     return 'hello, world';
// }

// const bill = function(products, tax) {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
// }

// arrow functions

// const calcArea = (radius) => {
//     return 3.14 * radius**2;
// }

// const area = calcArea(5);
// console.log('area is:', area)

// const greet = () => {
//     return 'hello, world';
// }
// const result = greet();
// console.log(result);

// const bill = (products, tax) => {
//     let total = 0;
//     for(let i = 0; i < products.length; i++) {
//         total += products[i] + products[i] * tax;
//     }
//     return total;
// }
// console.log(bill([15, 20, 25], 20));

// This is an example of a function declaration.
    // function greet(){
    //     console.log('hello');
    // }
    // greet();

// This is an example of a function expression.
    // const speak = function(){
    //     console.log('good day');
    // };
    // speak();

// This is an example of an arrow function.
    // const greet = () => {
    //     return 'hello world';
    // }
    // greet();

// A method is just like a function, because they do similar things. The only difference is where they are defined and how they are invoked.

// Example of a function
//     const firstName ='manny';

//     const greet = () => 'hello';
//     let resultOne = greet();
//     console.log(resultOne);

// // Example of a method
   
//     let resultTwo = firstName.toUpperCase();
//     console.log(resultTwo)

// Callbacks & Foreach

// let favoriteAnimals = ['cat', 'lion', 'doge', 'tiger'];

// favoriteAnimals.forEach(animal => {
//     alert(animal);
// });






// let favoriteWriters = ['Bukowski', 'Sowell', 'Wooten', 'Leonard']

// const author = (person, index) => {
//     alert(`${index} - Hello ${person}`)
// };

// favoriteWriters.forEach(author);



const ul = document.querySelector('.people');
const people = ['mario', 'luigi', 'cody', 'kiki', 'alberto'];
let html = ``;
people.forEach(person => {
    html += `<li style="color: purple">${person}</li>`;
});
console.log(html);
ul.innerHTML = html;