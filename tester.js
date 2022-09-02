// Напишите функцию которая принимает имя(string)
// и выводит в консоль "Hello " + "имя"
function sayHello (name) {
    console.log('Hello ' + name + '!');
}

sayHello('Roman');


// Напишите функцию которая принимает число(number)
// возвращает(return) число умноженое на 10
const timesTen = function (number) {
    console.log((number * 10), 'inside');
    return number * 10
}
const ten = timesTen(6);
console.log(ten);

const timesTwo = number => {return number * 2}
console.log(timesTwo(10));



// Напишите функцию которая выводит в консоль 
// все значения свойств данного объекта
const myCar = {
    make: 'Honda',
    model: 'Civic',
    info: {
        color: 'red',
        mileage: 10000,
        isPopular: true
    },
    year: 2020
}
function printAllProperties(obj) {
    console.log('This is ' + obj.make + ' ' + obj.model);
    console.log('It is ' + obj.info.color + ', ' + obj.info.mileage + 'km ' + obj.year);
    console.log('It is ' + obj.info.isPopular + ' that my car is popular.');
}
printAllProperties(myCar);

// Напишите функцию которая увеличит свойство mileage
// на 5000, используйте объект myCar
const myProfile = {
    name: 'Roman',
    age: 34,
    info: {
        mileage: 0
    }
}

function increaseMileage(obj) {
    obj.info.mileage += 5000;
}
increaseMileage(myProfile);
console.log(myProfile);

increaseMileage(myCar);
console.log(myCar);
increaseMileage(myCar);
increaseMileage(myCar);
increaseMileage(myCar);
console.log(myCar);
console.log('hello');
console.log('hello');
console.log('hello');
console.log('hello');