// 14. Write a js program to find sum of all even or odd numbers in given range using function.

let start = 10;
let end = 20;

function printEvenOdd(s, e) {

    let sumOfEven = 0;
    let sumOfOdd = 0;

    for (let i = s; i <= e; i++) {
        if (i % 2 == 0) {
            sumOfEven += i;
        } else {
            sumOfOdd += i;
        }
    }

    console.log(`Sum of Even Numbers between ${s} and ${e} is:`);
    console.log(sumOfEven);

    console.log(`Sum of Odd Numbers between ${s} and ${e} is:`);
    console.log(sumOfOdd);

}

printEvenOdd(start, end);