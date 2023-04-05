// 11. Write a js program to print all natural numbers between 1 to n using function.

let n = 10;

function printNaturalNumbers(x) {
    console.log(`Natural Numbers between 1 and ${x} are:`)
    for (let i = 1; i <= x; i++) {
        console.log(i);
    }
}

printNaturalNumbers(n);