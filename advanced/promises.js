// // How resolve,then works and how promises are created
// const promiseOne = new Promise(function(resolve,reject){
//     //DB calls
//     //Do an async task
//     setTimeout(()=>{
//         console.log("Async task is complete!");
//         // reject();
//         resolve();
//     },3000) //executed later as this one delay for 3 seconds
// })

// promiseOne.then(function(){
//     console.log("promise is consumed!");
// })

// //we can pass params to resolve
// new Promise(function(resolve,reject){
//     console.log("This is promise 2")
//     resolve({user:"Anwesh",email:"Anwesh@example.com"})
// }).then(function(user){
//     console.log(user);
// })

// Chaining of then and using reject
// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(()=>{
//         let err = false
//         if(!err){
//             resolve({userName:"Anwesh",pass:"Anwesh123"})
//         }else{
//             reject("ERROR! somwthing went wrong!")
//         }
//     })
// })
// consuming the promise
// promiseFour.then((user)=>{
//     if(user.userName){
//         return user.userName
//     }else{
//         console.log("No such attribute!")
//     }
// }).then((userName)=>{
//     console.log(`The username is ${userName}`);
// }).catch((err)=>{
//     console.log(err); // if err is true this will run
// }).finally(()=>{
//     console.log("Your promise is either resolved or rejected") //Runs every time
// })

// another way of consuming the promise
const promiseFive = new Promise((resolve,reject) => {
    setTimeout(()=>{
        let error = true;
        if(!error){
            resolve({userName:"JavaScript",pass:"123"})
        }else{
            reject("ERROR!");
        }
    },2000)
})

// Consuming the promiseFive
async function consumeFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumeFive()