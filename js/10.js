
// 10 Знайти найбільший серед елементів масиву, ост альні обнулити.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let maxEl = arr[0];
let maxElOrdernumber = 0;

for (let i = 0; i < arr.length; i++) {
    if (maxEl < arr[i]) {
        maxEl = arr[i];
        maxElOrdernumber = i;
    }
    arr[i] = 0;
}

arr[maxElOrdernumber] = maxEl;

console.log("Max el is " + maxEl);
console.log(arr);

