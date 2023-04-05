// 10. Write a js program to find power of any number using function.

let num = 4;
let pow = 3;

function findPower(n, p) {
    return n ** p
}

let result = findPower(num, pow);
console.log(`${num} raise to power ${pow} is ${result}.`)