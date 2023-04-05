// 5. Write a js program to check whether a number is prime, Armstrong or perfect number using functions.

let num = 15;

function prime(x) {
    for (let i = 2; i <= x / 2; i++) {
        if (x % i == 0) {
            console.log(`No, ${x} is not a Prime Number.`);
            return 0;
        }
    }
    console.log(`Yes, ${x} is a Prime Number.`);
    return 1;
}

function armStrong(x) {
    let b = String(x);
    let nums = [];
    let sum = 0;
    for (let i = 0; i < b.length; i++) {
        nums.push(b[i]);
    }
    for (let j = 0; j < nums.length; j++) {
        sum += nums[j] ** nums.length;
    }
    if (sum == x) {
        console.log(`Yes, ${x} is armstrong.`);
    } else {
        console.log(`No, ${x} is not armstrong.`);
    }
}

function perfect(x) {
    let sum = 0;
    let divisors = [];
    for (let i = 1; i <= x / 2; i++) {
        if (x % i == 0) {
            divisors.push(i);
        }
    }
    for (let i = 0; i < divisors.length; i++) {
        sum += divisors[i];
    }
    if (sum == x) {
        console.log(`Yes, ${x} is Perfect Number.`);
    } else {
        console.log(`No, ${x} is not Perfect Number.`);
    }
}

console.log(`Given Number: ${num}`);
prime(num);
armStrong(num);
perfect(num);