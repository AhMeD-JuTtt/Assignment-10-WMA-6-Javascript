// 17. Write a js program to find sum of digits of a given number using function.

let num = 154;

function findSumOfDigits(x) {

    let sum = 0;
    convtdx = String(x);
    convtdx = convtdx.split("");
    for (let i = 0; i < convtdx.length; i++) {
        convtdx[i] = Number(convtdx[i]);
    }

    for (let i = 0; i < convtdx.length; i++) {
        sum += convtdx[i];
    }
    console.log(`Sum of digits of ${x} is ${sum}.`)
}

findSumOfDigits(num);