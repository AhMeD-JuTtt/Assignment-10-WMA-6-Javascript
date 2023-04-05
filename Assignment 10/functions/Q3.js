// 3. Write a js program to find maximum and minimum between two numbers using functions.


let num1 = 10;
let num2 = 30;

function findMaxandMin(a, b) {
    if (a > b) {
        console.log(`Maximum: ${a}\nMinimum: ${b}`)
    } else {
        console.log(`Maximum: ${b}\nMinimum: ${a}`)
    }
}

findMaxandMin(num1, num2);