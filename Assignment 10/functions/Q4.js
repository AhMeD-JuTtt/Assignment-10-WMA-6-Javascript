// 4. Write a js program to check whether a number is even or odd using functions.


let num = 45;

function chkEvenOrOdd(x) {
    if (x % 2 == 0) {
        console.log(`${x} is Even.`)
    } else {
        console.log(`${x} is Odd.`)
    }
}

chkEvenOrOdd(num);