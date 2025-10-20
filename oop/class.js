class User{
    constructor(username,pass){
        // this.username = username
        this.username = username
        this.pass = pass
    }
    projectDone(){
        console.log("All the projects are completed!!");
    }
}

const student = new User("Anwesh","hello123")
console.log(student);
student.projectDone()

// // Behind the scene
// const setUsername = function(username){
//     this.username = username;
// }
// const User = function(username,pass,isLoggedin){
//     // this.username = username
//     // setUsername(username)// to set name we have to use .call 
//     setUsername.call(this,username) // we need to pass **this** object as well
//     this.isLoggedin = isLoggedin
//     this.pass = pass
// }

// const student = new User("Hitesh","Hitesh123",true)
// console.log(student);
