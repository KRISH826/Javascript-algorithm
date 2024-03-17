/** @format */

// Fibonacci Sequence
function fibonacci(n) {
  let sum = [0, 1];
  for (let i = 2; i < n; i++) {
    sum[i] = sum[i - 1] + sum[i - 2];
  }

  return sum;
}

console.log(fibonacci(3));
console.log(fibonacci(6));
console.log(fibonacci(15));

// factrial
function factorialNum(n) {
  let num = 1;
  for (let i = 2; i <= n; i++) {
    num = num * i;
  }

  return num;
}

console.log(factorialNum(5));

// prime number

function isPrime(n) {
  if (n < 2) {
    return false;
  }
  for (let i = 2; i < Math.sqrt(n); i++) {
    if (n % 2 == 0) {
      return false;
    }
  }
  return true;
}

console.log(isPrime(666));

// POWER OF TWO - pesudocode
// give a positive integer `n`, determine if the number is a power of 2 or not

function powerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
console.log(powerOfTwo(8));
