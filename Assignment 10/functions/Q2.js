// 2. Write a js program to find diameter, circumference and area of circle using functions.

let pi = 3.14159;
let radius = 20;

function diameter(num) {
    return 2 * num;
}

function circumference(num) {
    return 2 * pi * num;
}

function area(num) {
    return pi * num * num;
}


let resultDiameter = diameter(radius);
let resultCircumference = circumference(radius);
let resultArea = area(radius);

console.log(`Radius: ${20} cm\nDiameter of circle: ${resultDiameter} cm\nCircumference of circle: ${resultCircumference} cm\nArea of circle: ${resultArea} cmSquare`)