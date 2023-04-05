// 9. Write a JavaScript program to calculate the area and perimeter of a circle.   

// Note : Create two methods to calculate the area and perimeter. The radius of the circle will be supplied by the user.


function area(r) {
    return pi * r * r;
}

function perimeter(r) {
    return 2 * pi * r;
}

const pi = 3.1415;

console.log("Area of Circle is", area(20).toFixed(4))
console.log("Perimeter of Circle is", perimeter(20).toFixed(4))