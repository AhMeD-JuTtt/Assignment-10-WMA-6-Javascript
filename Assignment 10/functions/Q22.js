// 22. Write a js program to display all array elements using function.

let arr = [131, 3412, 31, 43214, 53214, 123, 31, 656];

function displayAllElements(x) {
    console.log("All Array Elements are: ")
    for (let index = 0; index < x.length; index++) {
        console.log(x[index]);
    }
}

displayAllElements(arr);