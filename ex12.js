const prompt = require('prompt-sync')();

function fibonacci(n) {
    let fib = [1, 1];
    for (let i = 2; i < n; i++) {
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

const n = 10;
const fibSequence = fibonacci(n);

console.log(`Os primeiros ${n} elementos da sequência de Fibonnaci são: `);
console.log(fibSequence.join(", "));