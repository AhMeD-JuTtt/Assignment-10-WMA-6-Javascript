// 15. Write a js program to find reverse of any number using function.

let num = 7777;

function reverseNumber(x) {
    convtdx = String(x);
    convtdx = convtdx.split("");
    convtdx = convtdx.reverse();
    convtdx = convtdx.join("");
    convtdx = Number(convtdx);
    console.log(`${x} is reversed as ${convtdx}.`)
}

reverseNumber(num);