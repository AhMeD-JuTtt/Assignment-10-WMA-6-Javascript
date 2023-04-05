// 7. Write a js program to print all strong numbers between given interval using functions.

let num = 145;

function strongNumber(x) {

    let digits = [];
    let factorialsArr = [];
    let digitsSum = 0;
    x = String(x)

    for (let i = 0; i < x.length; i++) {
        digits.push(Number(x[i]));
    }

    for (let index = 0; index < digits.length; index++) {
        let factorial = 1;
        for (let i = 1; i <= digits[index]; i++) {
            factorial *= i;
        }
        factorialsArr.push(factorial);
    }

    for (let i = 0; i < factorialsArr.length; i++) {
        digitsSum += factorialsArr[i];
    }

    if (digitsSum == x) {
        console.log(`Yes, ${x} is a Strong Number.`);
    } else {
        console.log(`No, ${x} is not a Strong Number.`);
    }

}

strongNumber(num);