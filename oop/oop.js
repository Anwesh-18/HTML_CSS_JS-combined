const user = {
    username: "Anwesh",
    password: "1234",
    signedIn: true,
    loginCount: 10,

    getUserDetails: function(){
        console.log(`User name: ${this.username}`);
        
    }
}
console.log(user.getUserDetails());

// constructor function
const User = function(userName,userPass,isLoggedin){
    this.userName = userName;
    this.userPass = userPass;
    this.isLoggedin = isLoggedin;

    return this;
}

const user1 = new User("Anwesh","Anwesh123",true)
const user2 = new User("Hitesh","Hitesh789",false)

console.log(user1)
console.log(user2)
