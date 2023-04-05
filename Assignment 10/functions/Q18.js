// 18. Write a js program to find factorial of any number using function.

let num = 5;

function findFactorial(x) {
    factorial = 1;
    for (let i = 1; i <= x; i++) {
        factorial *= i;
    }
    console.log(`Factorial of ${x} is ${factorial}.`)
}

findFactorial(num);