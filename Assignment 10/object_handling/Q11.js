// 11. Write a JavaScript function to print all the methods in an JavaScript object.   

// Test Data :

// console.log(all_properties(Array));

// ["length", "name", "arguments", "caller", "prototype", "isArray", "observe", "unobserve"]

let obj1 = {
    fname: "Muhammad",
    lname: "Ahmed",
    rollno: 4504,
    displayInfo: function(a) {
        if (a == 1) {
            console.log(`${this.fname} ${this.lname} is a BS Software Engineer and his Roll No. is ${this.rollno}.`)
        } else {
            console.log("Wrong Input.")
        }
    }
}


function listOfMethods(objecttofind) {
    let methods = [];
    for (const key in objecttofind) {
        if (typeof key == "function") {
            methods.push(key);
        }
    }
    return methods;
}

let result = listOfMethods(Array);
console.log(result)