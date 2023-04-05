// 20. Write a js program to find GCD (HCF) of two numbers using function.

let num1 = 60;
let num2 = 72;
let hcfValue;

function hcf(a, b) {
    for (let i = 0; i <= a && i <= b; i++) {
        if (a % i == 0 && b % i == 0) {
            hcfValue = i;
        }
    }
    return hcfValue;
}

result = hcf(num1, num2);
console.log(`The HCF of ${num1} and ${num2} is ${result}.`);