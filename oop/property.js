const decripter = Object.getOwnPropertyDescriptor(Math,"PI")
console.log(decripter);
// As writable and configurable is false for this property we can not overwrite it

// creating own object
const me = {
    name: "Anwesh",
    age: 19,
    isAdult: true,
    getTitle: function(){
        console.log("Barpanda");
    }
}
console.log(Object.getOwnPropertyDescriptor(me,"name"));// writable: true

//iterating

// for (let [key,value] of me) { // this will give error as we can not directly iterate an object, we actually iterate properties inside it.
//     console.log(`${key}: ${value}`);
// }

for (let [key,value] of Object.entries(me)) {
    if(typeof value !== 'function'){ // we dont need function in the iteration.
        console.log(`${key}: ${value}`);       
    }
}

// changing the iterable and writable values of name
Object.defineProperty(me,"name",{
    writable: false,
    enumerable: false,
    configurable: false
})
console.log(Object.getOwnPropertyDescriptor(me,"name"));

// This wont work on **name** as the enumerable property has been changed
for (let [key,value] of Object.entries(me)) {
    if(typeof value !== 'function'){
        console.log(`${key}: ${value}`);       
    }
}

