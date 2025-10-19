// function multiplyByFive(num,score){
//     this.num = num
//     this.score = score
// }

// const { use } = require("react")

// multiplyByFive.prototype.power2 = function(num){
//     return num*num;
// }

// // console.log();
// // console.log(multiplyByFive.power);
// const ob = new multiplyByFive(5,10); // it gives constructor functions with new key word
// console.log(ob.power2(10));
// console.log(ob.prototype);

// proper use of new
const userCreate = function(userName,pass){
    this.userName = userName
    this.pass = pass
}

userCreate.prototype.changePass = function(newPass){
    this.pass = newPass;
}

// creating an onbject..new keyword is neccessary to update the object about the newly created methods!!/ constructor function
const user = new userCreate("Anwesh","Anwesh123")
console.log(`old Pass: ${user.pass}`)

// using my self created function/method
user.changePass("Anwesh007")
console.log(`new Pass: ${user.pass}`);

