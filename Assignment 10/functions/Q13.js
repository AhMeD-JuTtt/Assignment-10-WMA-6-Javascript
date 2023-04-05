// 13. Write a js program to find sum of all natural numbers between 1 to n using function.


let n = 30;

function findSum(x) {
    sum = 0;
    for (let i = 1; i <= x; i++) {
        sum += i;
    }
    console.log(`The sum of all natural numbers between 1 and ${x} is ${sum}.`);
}

findSum(n);