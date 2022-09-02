const moment = require('moment');
const dateToday = Date();
console.log(moment(dateToday).format("X"));

const myArr = [1, 2, 1, 2, 3, 4, 4, 4, 5, 5, 5, 3, 3, 3, 1, 2, 2]
const myArrNew = require('uniq')(myArr)
console.log(myArr)
console.log(myArrNew)