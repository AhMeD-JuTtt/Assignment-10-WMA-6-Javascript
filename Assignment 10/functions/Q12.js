// 12. Write a js program to print all even or odd numbers in given range using function.

let start = 10;
let end = 20;

function printEvenOdd(s, e) {

    let even = [];
    let odd = [];

    for (let i = s; i <= e; i++) {
        if (i % 2 == 0) {
            even.push(i);
        } else {
            odd.push(i);
        }
    }

    console.log(`Even Numbers between ${s} and ${e} are:`);
    console.log(even);

    console.log(`Odd Numbers between ${s} and ${e} are:`);
    console.log(odd);

}

printEvenOdd(start, end);