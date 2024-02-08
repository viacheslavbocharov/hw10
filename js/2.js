// 2 Знайти мінімальний елемент масиву та його порядковий номер.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let minEl = arr[0];
let minElOrdernumber = 0;

for (let i = 0; i < arr.length; i++) {
    if (minEl > arr[i]) {
        minEl = arr[i];
        minElOrdernumber = i;
    }
}

console.log("Min el is " + minEl);
console.log("Min el ordernumber is " + minElOrdernumber);