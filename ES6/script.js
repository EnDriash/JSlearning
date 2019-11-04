'use strict'
// exercise 1

const a = 'Hello';
const b = 'World';

console.log(`${a} ${b}`);

// exercise 2

function multiply(a = 1, b = 1) {
    return a * b;
}

// exercise 3

function avarage(...args){
    let sum = 0;
    args.forEach((elem) => sum = (sum + elem)); 
    return console.log(sum/args.length);
}

// exercise 5

const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1];
avarage(...grades);

// exercise 6

