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
