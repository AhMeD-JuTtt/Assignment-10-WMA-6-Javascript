// 16. Write a js program to check whether a number is palindrome or not using function.

let num = 7777;

function chkPalindrome(x) {

    convtdx = String(x);
    convtdx = convtdx.split("");
    convtdx = convtdx.reverse();
    convtdx = convtdx.join("");
    convtdx = Number(convtdx);
    if (convtdx == x) {
        console.log(`Yes, ${x} is a Palindrome Number.`)
    } else {
        console.log(`No, ${x} is not a Palindrome Number.`)
    }
}

chkPalindrome(num);