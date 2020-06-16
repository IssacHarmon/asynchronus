// let logString = (message) => console.log(message);


// logString("Hello!");

// setTimeout(() => {
//     logString("another string")
// }, 2000);

// let getWords = () => {
//     console.log("First message")

//     setTimeout(() => {
//         console.log("final message")
//     }, 3000);

//     setTimeout(() => {
//         console.log("third message")
//     }, 2000);

//     setTimeout(() => {
//         console.log("second message")
//     }, 1000);
// }

// getWords();

// Callbacks and Recursion
// let done = () => console.log("Job's done!"); 

// let countdown = (num, callback) => {
//     if(num === 0) {
//         callback();
//     } else {
//         setTimeout(() => {
//             console.log(num);
//             countdown(num -1, callback);
//         }, 1000);
//     }
// }
// countdown(3, done);

//Promises Promises

let lunchTime = true; 
const orderMeSomeFood = () => {
   return new Promise((resolve, reject) => {
    if(lunchTime) {
        let myFavLunch = {
            lunch: "pizza",
            drink: "coke"
        }
        resolve(myFavLunch);
    } else {
        let errorMessage = new Error("its not lunchtime!");
        reject(errorMessage);
    }
   }); 
}

orderMeSomeFood()
.then(res => console.log(res))  //res is response
.catch(err => console.log(err));