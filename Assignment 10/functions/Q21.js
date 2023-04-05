// 21. Write a js program to find LCM of two numbers using function.

let a = 16;
let b = 28;

function lcm(num1, num2) {

    let min = (num1 > num2) ? num1 : num2;

    while (true) {
        if (min % num1 == 0 && min % num2 == 0) {
            let lcmValue = min;
            return lcmValue;
        }
        min++;
    }
}

let result = lcm(a, b);
console.log(`The LCM of ${a} and ${b} is ${result}.`)