//1 Дан масив. Знайти суму та кількість позитивних елементів.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveElSum = 0;
let positiveElQty = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0){
        positiveElSum += arr[i];
        positiveElQty++
    }
}

console.log("The sum of positive el is " + positiveElSum);
console.log("The qty of positive el is " + positiveElQty);