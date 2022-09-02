// Напишите функцию которая будет принимать массив и число в качестве аргумента
// будет добавлять число в заданый массив
const myArr = [];
const addToArray = (arr, num) => {
    arr.push(num);
}
addToArray(myArr, 4);
addToArray(myArr, 5);
console.log(myArr);


// Напите функцию которая будет выводить в консоль
// каждый элемент данного массива и его тип данных
const mixedArray = [134, 'Hello', true, {a: 10, b: 20}, null, [1, 2, 3], 'Hero'];
const logArrayItems = function (arr) {
    arr.forEach(element => {
        console.log(element, typeof element);
    });
}

logArrayItems(mixedArray);


// Выведите в консоль строку используя данный массив
// Пример: This is Jack Smith. He is 30 years old. It is true that he is employed and his salary is 2000 euro.
const personArray = ['Jack', 'Smith', 30, {salary: 2000, employement: true}]
console.log(`This is ${personArray[0]} ${personArray[1]}. He is ${personArray[2]} years old. It is ${personArray[3].employement} that he is employed and his salary is ${personArray[3].salary} euro.`)

const sample = [1, 2, 3, {courses: ['Math', 'Biology', 'Physics']}]
console.log(sample[3].courses.forEach(element => console.log(element, typeof element)));
// Напищите код, который для каждой пары в заданом массиве
// будет возводить первое число в степень второго числа
// и выводить результаты в консоль
const numberPairs = [[2, 5], [3, 2], [6, 7], [3, 4], [5, 3]];
numberPairs.forEach(pair => console.log(pair[0] ** pair[1]));
numberPairs.map(pair => console.log(pair[0] ** pair[1]));