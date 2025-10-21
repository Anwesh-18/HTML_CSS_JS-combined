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
