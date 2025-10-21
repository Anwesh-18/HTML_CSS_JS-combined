function outer(){
    let myName = "Anwesh"
    // console.log(child); // can not access it here
    function inner(){
        let child = "child";
        console.log("inner",myName);
    }
    function innerTwo(){
        console.log("innerTwo",myName);
        // console.log(child); // can not access it here as well
    }
    inner()
    innerTwo()
}
outer()
// console.log(myName);

// closure
function makeFunc(){
    const name = 'myname'
    function displayName(){
        console.log(name);
    }
    return displayName; // this sends the whole lexical scope to the calling var
}
const myFunc = makeFunc()
myFunc()

