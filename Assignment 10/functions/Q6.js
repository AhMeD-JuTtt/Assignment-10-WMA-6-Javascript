// 6. Write a js program to find all prime numbers between given interval using functions.



let interval = 200;

function prime(x) {
    let primeNumbers = [1, 2, 3];
    for (let i = 1; i <= x; i++) {
        for (let j = 2; j <= i / 2; j++) {
            if (i % j == 0) {
                if (primeNumbers[primeNumbers.length - 1] == i) {
                    primeNumbers.pop();
                }
                break;
            }
            if (primeNumbers[primeNumbers.length - 1] == i) {
                continue;
            } else {
                primeNumbers.push(i);
                continue;
            }
        }
    }
    console.log("Prime Numbers:", primeNumbers);
}

prime(interval);