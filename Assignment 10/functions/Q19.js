// 19. Write a js program to generate nth Fibonacci term using function.

let n = 10;

function fibonacci(x) {

    let fibonacciNums = [0, 1];

    for (let i = 2; i <= x; i++) {
        fibonacciNums.push(fibonacciNums[fibonacciNums.length - 1] + fibonacciNums[fibonacciNums.length - 2]);
    }

    return fibonacciNums;
}

result = fibonacci(n);
console.log(`Fibonacci Sequence upto ${10} is following:\n${result}`)