// 6 Знайти кількість парних позитивних елементів.

const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47];

let positiveEvenElQty = 0;

for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
        if (arr[i] % 2 === 0) {
            positiveEvenElQty++
        }

    }
}

console.log("The qty of even positive el is " + positiveEvenElQty);