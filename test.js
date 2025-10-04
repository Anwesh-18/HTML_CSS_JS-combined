// import { Temporal } from "@js-temporal/polyfill";
const name = "Anwesh";
let gmail = "Anwesh@example.com";
// console.table([name, gmail]);
let price = 21.34;
// console.log(typeof price);
// console.table([name, gmail, price]);
/*
number => 2 to the power 53
bigint => 2 to the power 53
string => "Anwesh"  
boolean => true/false
undefined => variable not assigned
null => empty value
symbol => unique value
object => array, function, date, regex
*/

/*
"33" => 33 (string to number)
"33abc" => NaN (Not a Number)
33 => "33" (number to string)
true => 1
false => 0
"" => false
"Anwesh" => true
null => 0
undefined => NaN
object => NaN
array => "1,2,3" (toString) 
*/

// Date and Time
// let myDate = new Date();
// console.log(myDate);
// console.log(typeof myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toJSON());

// // Arrays
// let myArr = [1, 2, 3, 4, 5, "Anwesh", true];
// let arr2 = new Array(1, 2, 3, 4, 5);
// // spread operator
// let arr3 = [...myArr, ...arr2];
// console.log(arr3);
// console.log(typeof arr3);
// console.log(Array.from("Anwesh")); // ['A', 'n', 'w', 'e', 's', 'h']
// console.log(Array.from({name: "Anwesh"})); // []
// console.log(Array.isArray(myArr)); // true
// splice, slice, push, pop, shift, unshift, map, filter, reduce
// splice changes the original array and slice doesn't
// console.log(myArr.splice(2, 3)); // removes 3 elements from index 2
// console.log(myArr); // original array is changed
// console.log(myArr.slice(2, 5)); // doesn't change original array
// console.log(myArr); // original array is not changed

// Objects
let person = {
  name: "Anwesh",
}
