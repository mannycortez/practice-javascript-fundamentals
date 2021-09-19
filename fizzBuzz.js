//FizzBuzz problem

//Step #1. Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fuzz" instead of the number, and for numbers divisible by 5, print "Buzz" instead.
//Step #2. Modify program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

// Way #001 (Using a loop)

function FizzBuzzA(value1, value2) {
    let returnValue = "";
    for(let i = 1; i <= 100; i++) {
        if(i % value1==0 && i % value2==0) {
            returnValue += 'FizzBuzz ';
        }
        else if (i % value ==0) {
            returnValue += 'Fizz ';
        }
        else if (i % value ==0) {
            returnValue += 'Buzz';
        }
        else{
            returnValue += i + ' ';
        }
    }
    return returnValue;
}