// task 1
const a = 1;
const b = 2;

console.log(`
    Завдання 1
    a + b = ${a + b} 
    a - b = ${a - b}
    a * b = ${a * b}
    a / b = ${a / b}
`);




// task 2
const radius = 5;
const perimeter = 2 * Math.PI * radius;
const area = Math.PI * radius * radius;

console.log(`
    Завдання 2
    Периметр: ${perimeter}
    Площа: ${area}
`);




// task 3
const m = +prompt('Введіть значення m ');
let n;
if (!Number.isInteger(m)) {
    n = '"m" не є цілим числом';
} else if (m > 0) {
    n = "n = 1";
} else if (m === 0) {
    n = "n = 0";
} else {
    n = "n = -1";
}

console.log(`
    Завдання 3
    ${n}
`);




// task 4
const num = +prompt("Введіть число ");
if (num % 2 === 0) {
    console.log(`
    Завдання 4
    Число непарне`);
} else {
    console.log(`
    Завдання 4
    Число парне`);
}




// task 5
let sum = 0;
let product = 1;

for (let i = 1; i <= 10; i++) {
    sum += i;
    product *= i;
}

console.log(`
    Завдання 5
    Сума = ${sum}
    Добуток = ${product}
`);




// task 6
const nVar = +prompt('Введіть значення n ');
const sumOfRow = (n) => {
    let term = 1;
    let sum = 0;

    for (let i = 1; i <= n; i++) {
        sum += term;
        term = term * 10 + 1;
    }

    return sum;
}

const result = sumOfRow(nVar);
console.log(`
    Завдання 6
    Сума рядка: ${result}
`);




// task 7
const yearVar = +prompt('Введіть рік ');
const isLeap = (year) => {
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

const result7 = isLeap(yearVar);
console.log(`
    Завдання 7
    ${result7}
`);




// task 8
function arrayCalculations(arr) {
    const positiveNumbers = arr.filter(num => num > 0);
    const negativeNumbers = arr.filter(num => num < 0);

    const max = Math.max(...arr);
    const min = Math.min(...arr);
    const sumPositive = positiveNumbers.reduce((acc, curr) => acc + curr, 0);
    const productNegative = negativeNumbers.reduce((acc, curr) => acc * curr, 1);

    return {
        max,
        min,
        sumPositive,
        productNegative,
        negativeCount: negativeNumbers.length,
        positiveCount: positiveNumbers.length
    };
}

const numbersArray = [-9, 5, 4, 2, -7, -4, 1, -8, 6, 10]; 
const result8 = arrayCalculations(numbersArray);
console.log('Завдання 8', result8);