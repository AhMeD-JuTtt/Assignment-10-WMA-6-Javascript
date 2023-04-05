// 24. Write a js program to find maximum and minimum elements in array using function.let arr = [131, 3412, 31, 43214, 53214, 123, 31, 656];


let arr = [131, 3412, 31, 43214, 53214, 123, 31, 656];

function displayAllElements(x) {

    let max = Number.MIN_SAFE_INTEGER;
    let min = Number.MAX_SAFE_INTEGER;

    for (let index = 0; index < x.length; index++) {
        if (x[index] > max) {
            max = x[index];
        }
        if (x[index] < min) {
            min = x[index];
        }
    }

    console.log(`Maximum number in array is: ${max}.`)
    console.log(`Minimum number in array is: ${min}.`)
}

displayAllElements(arr);