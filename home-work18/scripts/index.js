console.log('JS #1. Домашнє завдання. Основи JavaScript: Працюємо зі змінними, типами даних');

/*
 * #1
 *
 * Створіть змінні зі значеннями.
 */

// ім'я змінної: myNum, значення: 10
// ім'я змінної: myStr, значення: 'some string'
// ім'я змінної: myBool, значення: true
// ім'я змінної: myArr, значення: 1, 2, 3, 4, 5
// ім'я змінної: myObj, значення: first: 'First Name', last: 'Last Name'
let myNum = 10; // число
let myStr = 'some string'; // рядок
let myBool = true; // булеве значення
let myArr = [1, 2, 3, 4, 5]; // масив
let myObj = { first: 'First Name', last: 'Last Name' }; // об'єкт

/*
 * #2
 *
 * Відформатуйте ціле число, яке зберігається в змінній myNum, щоб отримати результат з 2 знаками після коми.
 * Результат збережіть у змінній decimal2.
 */
let decimal2 = myNum.toFixed(2);

// decimal2

/*
 * #3
 *
 * Створіть змінну myBigInt і запишіть в неї число 123n (BigInt).
 * Потім збільште його на 1 та запищіть в цю ж саму змінну.
 */

let myBigInt = 123n; // літера n вказує, що це BigInt
myBigInt = myBigInt + 1n; // додаємо 1 (теж BigInt)

// myBigInt