// A 'while loop' is an alternative to the 'for loop'. A while loop has the counter, first outside of the function.

const heroes = ['miles', 'michael', 'james']

let i = 0;

while(i < heroes.length) {
  alert(`my heroes include: ${heroes[i]}`);
    i++;
}