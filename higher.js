let myArr = [1,2,3,4];
// const newArr = myArr.map((num) => num * 2).map((num) => num + 1).filter((num) => num > 5);
// console.log(newArr);

const sum = myArr.reduce((acc, num) => acc + num, 0);
console.log(sum);
// same we can do with objects also