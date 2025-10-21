// class User{
//     constructor(email,password){
//         this.email = email
//         this.password = password
//     }
//     get password(){
//         return `You are not allowed!`
//     }

//     set password(value){
//         this._password = value // if this.password is used we will get an error saying maximum call stack size exceeded
//     }
// }

//Old method
// function User(email,password){
//     this._email = email
//     this._password = password

//     Object.defineProperty(this,"email",{
//         get: function(){ return this._email.toUpperCase()},
//         set: function(value){ this._email = value}
//     })
// }

// const anwesh = new User("Anwesh@example.com","hello123")
// console.log(anwesh.email);

// in Object
const User ={
    _email: "A@example.com",
    _password: "abc",
    
    get email(){
        return this._email.toUpperCase();
    },
    set email(value){
        this._email = value; 
    },
    get password(){
        return this._password.toUpperCase();
    },
    set password(value){
        this._password = value; 
    }
}

// console.log(User.email);
// console.log(User.password);

// Inheritance in object
const anwesh = Object.create(User)
console.log(anwesh.email);

