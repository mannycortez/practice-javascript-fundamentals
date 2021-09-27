const companies = [
    {name: 'Manny Cortez Studios', category: 'Web design', start: 2019, end: 2050},
    {name: 'Jules Winfield Art', category: 'Paintings', start: 1981, end: 2003},
    {name: 'Winston Wolf', category: 'Problem Solving', start: 1981, end: 2003},
    {name: 'Matoshi Cortemoto', category: 'Crypto investor', start: 1981, end: 2003},
    {name: 'Random Company', category: 'Web design', start: 1981, end: 2003},
    {name: 'Steak on the Roof', category: 'Food', start: 1981, end: 2003},
    {name: 'Mannys Game Design', category: 'Web design', start: 1981, end: 2003},
    {name: 'Jack Rabbit Slim', category: 'Restaurant', start: 1981, end: 2003},
    {name: 'Butchs', category: 'Meat Shop', start: 1981, end: 2003}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// Basic 'for loop'

// for(let i = 0; i < companies.length; i++) {
//     console.log(companies[i]);
// }

// ARRAY METHODS

// 'forEach method'

// companies.forEach(function(company) {
//     console.log(company.name);
// });



// 'THE FILTER METHOD IN 3 WAYS'



// BASIC 'FOR LOOP' (ok)

// let canDrink = [];
// for(let i = 0; i < ages.length; i++) {
//     if(ages[i] >= 21) {
//         canDrink.push(ages[i]);
//     }
// }
// console.log(canDrink);

// FILTER METHOD AS REGULAR FUNCTION (good)

// const canDrink = ages.filter(function(age) {
//     if(age >= 21) {
//         return true;
//     }
// })
// console.log(canDrink);

// FILTER METHOD WITH AN ARROW FUNCTION (better)

// const canDrink = ages.filter(age => age >= 21);
// console.log(canDrink);


// map
// CREATE ARRAY OF COMPANY NAMES
// .map method as a regular function:
// const companyNames = companies.map(function(company) {
//     return company.name;
// });
// console.log(companyNames);

// .map method with an arrow function:
    const testMap = companies.map(company => `${company.name} [${company.start} - ${company.end}]`);
    console.log(testMap);
// sort
// reduce