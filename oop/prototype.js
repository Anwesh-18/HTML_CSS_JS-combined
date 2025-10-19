// let myHeros = ["Thor","hulk"]

// let heroPower = {
//     thor: "hammer",
//     hulk: "Gamma",

//     getHulkPower: function(){
//         console.log("Got Gamma power!!");
//     }
// }

// Object.prototype.anwesh = function(){
//     console.log("anwesh is present in all objects");
// }

// // heroPower.anwesh()
// // myHeros.anwesh()

// Array.prototype.anwesh_2 = function(){
//     console.log("power injected in array");   
// }
// myHeros.anwesh_2()
// // heroPower.anwesh_2()

// const User = {
//     name: "Anwesh",
//     Email: "Anwesh@example.com"
// }

// const Teacher = {
//     isYoutuber: false,
//     isAvailable: true
// }

// const TeachingSupport = {
//     isGood: true,
//     isAvailable: true
// }

// const TeacherAssistant = {
//     isAvailable: false,
//     isProfessional: true,
//     __proto__: TeachingSupport // we can assign the prototype inside
// }
// Teacher.__proto__ = User // we can also assign the prototype outside

// Object.setPrototypeOf(TeachingSupport,Teacher) //we can use setPrototypeOf method as well

let myname = "Anwesh   "
// console.log(myname.length);


// I want a method true length that ignore the spaces
String.prototype.trueLength = function(){
    const str = this;
    let len = 0
    for(let i=0;i<str.length;i++){
        if(str[i]!==" "){
            len++;
        }
    }
    return len
}
console.log(myname.trueLength()); // This way we can create our own methods to work on