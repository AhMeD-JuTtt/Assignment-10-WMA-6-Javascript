// 9. Write a js program to print all perfect numbers between given interval using functions.


let interval = 1000;

function perfect(x) {

    let perfectNumbers = [];

    for (let num = 1; num <= x; num++) {

        let divisors = [];
        let sum = 0;

        for (let i = 1; i <= num / 2; i++) {
            if (num % i == 0) {
                divisors.push(i);
            }
        }

        for (let i = 0; i < divisors.length; i++) {
            sum += divisors[i];
        }

        if (sum == num) {
            perfectNumbers.push(num)
        }
    }

    if (perfectNumbers.length == 0) {
        console.log("Oops! There are no Perfect Numbers in given interval.");
    } else {
        console.log(`Perfect Numbers upto ${x}:`);
        console.log(perfectNumbers);
    }
}


perfect(interval);