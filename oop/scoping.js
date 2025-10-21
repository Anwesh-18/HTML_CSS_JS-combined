// function outer(){
//     let myName = "Anwesh"
//     // console.log(child); // can not access it here
//     function inner(){
//         let child = "child";
//         console.log("inner",myName);
//     }
//     function innerTwo(){
//         console.log("innerTwo",myName);
//         // console.log(child); // can not access it here as well
//     }
//     inner()
//     innerTwo()
// }
// outer()
// // console.log(myName);

// // closure
// function makeFunc(){
//     const name = 'myname'
//     function displayName(){
//         console.log(name);
//     }
//     return displayName; // this sends the whole lexical scope to the calling var
// }
// const myFunc = makeFunc()
// myFunc()

// Its real life use
function clickHandler(color){
    // document.body.style.backgroundColor = color
    function setColor(){
        document.body.style.backgroundColor = color
    }
    return setColor // this passes the referrence of the whole scope
}

document.getElementById('orange').onclick = clickHandler('orange')
document.getElementById('green').onclick = clickHandler('green')
