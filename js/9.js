// 9 Знайти добуток позитивних елементів.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveElMult = 0;
let firstPositiveElOrder;



for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveElMult = arr[i];
        firstPositiveElOrder = i;
        break;
    }
}


for (let i = (firstPositiveElOrder + 1); i < arr.length; i++) {
    if (arr[i] > 0) {
        positiveElMult *= arr[i];
    }
}

console.log("The multiplication of all positive el is " + positiveElMult);
