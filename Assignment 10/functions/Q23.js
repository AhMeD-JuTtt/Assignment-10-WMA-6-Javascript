// 23. Write a js program to find sum of elements of array using function.

let arr = [131, 3412, 31, 43214, 53214, 123, 31, 656];

function displayAllElements(x) {
    let sum = 0;
    for (let index = 0; index < x.length; index++) {
        sum += x[index];
    }
    console.log(`Sum of all Array Elements is: ${sum}.`)
}

displayAllElements(arr);