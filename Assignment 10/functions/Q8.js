// 8. Write a js program to print all Armstrong numbers between given interval using functions.

let interval = 1000;

function armstrong(x) {

    let armstrongNumbers = [];

    for (let num = 1; num <= x; num++) {

        let digits = [];
        let sum = 0;

        num = String(num);

        for (let i = 0; i < num.length; i++) {
            digits.push(Number(num[i]));
        }

        for (let i = 0; i < digits.length; i++) {
            digits[i] = digits[i] ** digits.length;
        }

        for (let i = 0; i < digits.length; i++) {
            sum += digits[i];
        }

        if (sum == num) {
            armstrongNumbers.push(num);
        }

    }

    if (armstrongNumbers.length == 0) {
        console.log("Oops! There are no Armstrong Numbers in given interval.");
    } else {
        console.log(`Armstrong Numbers upto ${x}:`);
        console.log(armstrongNumbers);
    }

}

armstrong(interval);