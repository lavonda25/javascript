// ===============================
// STRING MANIPULATION FUNCTIONS
// ===============================

// 1. Reverse a String
function reverseString(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString("hello"));


// 2. Count Characters
function countCharacters(str) {
  return str.length;
}

console.log(countCharacters("JavaScript"));


// 3. Capitalize Words
function capitalizeWords(sentence) {
  return sentence
    .split(" ")
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

console.log(capitalizeWords("hello world from javascript"));



// ===============================
// ARRAY FUNCTIONS
// ===============================

// 4. Find Maximum
function findMax(arr) {
  return Math.max(...arr);
}

console.log(findMax([2, 7, 1, 9, 4]));


// 5. Find Minimum
function findMin(arr) {
  return Math.min(...arr);
}

console.log(findMin([2, 7, 1, 9, 4]));


// 6. Sum of Array
function sumArray(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumArray([1, 2, 3, 4]));


// 7. Filter Array
function filterArray(arr) {
  return arr.filter(num => num > 5);
}

console.log(filterArray([2, 8, 3, 10, 1]));



// ===============================
// MATHEMATICAL FUNCTIONS
// ===============================

// 8. Factorial
function factorial(n) {
  let result = 1;

  for (let i = 1; i <= n; i++) {
    result *= i;
  }

  return result;
}

console.log(factorial(5));


// 9. Prime Number Check
function isPrime(num) {

  if (num <= 1) {
    return false;
  }

  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrime(7));
console.log(isPrime(10));


// 10. Fibonacci Sequence
function fibonacci(n) {

  let sequence = [0, 1];

  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }

  return sequence;
}

console.log(fibonacci(10));