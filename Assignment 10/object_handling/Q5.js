// 5. Write a JavaScript program to get the volume of a Cylinder with four decimal places using object classes.   

// Volume of a cylinder : V = πr2h

// where r is the radius and h is the height of the cylinder.


function volumeOfCylinder(radius, height) {
    const pi = 3.141592;
    return height * pi * radius * radius
}

volume = volumeOfCylinder(20, 45);
console.log("Volume of Cylinder is", volume.toFixed(4))