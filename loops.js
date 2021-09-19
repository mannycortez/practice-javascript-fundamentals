// Practice how to use a 'for loop' with an array

// const Products = ['books', 'paintings', 'web development', 'proofreading medium']

// // This would go through the entire area and create a 'div' for each

// for(let i = 0; i < Products.length; i++ ) {
//     let html = `<div>My products include ${Products[i]} and more</div>`
//     alert(html);
// }

// Using a 'break;' would stop the loop as soon as the condition is met. As soon, as it hits 100, it doesn't list the remaining scores (20, 10).

// The 'continue;' allows the loop to start over after condition is met.

const scores = [50, 25, 0, 30, 100, 20, 10];

for (let i = 0; i < scores.length; i++) {
    console.log('your score', scores[i]);
    if(scores[i] === 100) {
        const name = "Manny"
        console.log(`congrats ${name}`);
        break;
    }
}





