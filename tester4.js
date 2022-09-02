// Напишите функцию которая будет принимать два аргумента (start, end)
// Для каждого числа в диапозоне от start до end будет выводить число
// И Четное оно Или нечетное
const oddOrEven = (start, end) => {
    if (start > end) {
        [start, end] = [end, start]
    }
    for (let i = start; i <= end; i++) {
        if (i % 2 === 0) {
            console.log(i, 'Even')
        } else {
            console.log(i, 'Odd')
        }
    }
}
oddOrEven(1000, 400)


// Напишите функцию которая принимает два числа в качестве аргумента
// Сравнивает их и выводит в консоль сообщение о том какое число больше
const compareTwoNumbers = (num1, num2) => {
    if (num1 > num2) {
        console.log(num1, 'is bigger than', num2)
    } else if (num1 < num2) {
        console.log(num1, 'is smaller than', num2)
    } else {
        console.log(num1, 'and', num2, 'are equal')
    }
}
compareTwoNumbers(10, 20);
compareTwoNumbers(30, 10);
compareTwoNumbers(10, 10);
// Напишите функцию которая примает три числа в качестве аргумента
// Находит наибольшее из трёх
const findLargestOfThree = (num1, num2, num3) => {
    if (num1 > num2 && num1 > num3) {
        console.log(num1, 'is the largest of three')
    } else if (num2 > num3) {
        console.log(num2, 'is the largest of three')
    } else {
        console.log(num3, 'is the largest of three')
    }
}
findLargestOfThree(1, 2, 3);
findLargestOfThree(2, 8, 3);
findLargestOfThree(7, 4, 3);
findLargestOfThree(3, 1, 3);


// Напишите программу которая выведет в консоль ключи и значения данного объекта
// При условии что значение это строка (string)
const myProfile = {
    name: 'Jack',
    surname: 'Smith',
    emailVerified: false,
    age: 20,
    gender: 'Male',
    city: 'London',
    zip: 13233,
    hasChildren: false,
    married: true
}
for (key in myProfile) {
    if (typeof myProfile[key] === 'string') {
        console.log(key, myProfile[key])
    }
}
for (value of Object.values(myProfile)) {
    if (typeof value === 'string') {
        console.log(value)
    }
}