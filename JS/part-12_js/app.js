function runthis(outfun){
    console.log("Running...")
    outfun();
}
runthis(function(){
    console.log("F1");
})

runthis(function(){
    console.log("F2");
})

//why use promise?
// Promises in JavaScript are used to handle asynchronous operations 
// and manage the flow of asynchronous code. They provide a cleaner and more organized way to deal 
// with callbacks and help avoid the so-called "callback hell" or "Pyramid of Doom." 
// Here are some reasons why promises are widely used:


// const PENDING=0;   //process pending
const FULFILLED=1;
const REJECTED=2;

function CustomPromise(executer){
    let state=PENDING;
    let value=null;  //value or error message;
    let handlers=[]; //more than one handling function, more then one callback to run when work completed 
    let catches=[];  // handle things if something goes wrong

    function resolve(result){
        if(state!=PENDING) return;

        state=FULFILLED;
        value=result;

        handlers.forEach((h)=>h(value));
    }

    function reject(err){
        if(state!==PENDING) return;

        state=REJECTED;
        value=err;

        caches.forEach((c)=>c(err));
    }

    this.then=function(callback){
        if(state===FULFILLED){
            callback(value);
        }
        else{
            handlers.push(callback);
        }
    }
    executer(resolve,reject);
}

const dowork=(res,rej)=>{
    setTimeout(()=>{res("Hello World")},1000);
}

let sometext = new CustomPromise(dowork);

sometext.then((val)=>{
    console.log("1st log : " +val)
})

sometext.then((val)=>{
    console.log("2st log : " +val)
})

setTimeout(()=>{
    sometext.then((val)=>{
        console.log("3st log : " +val)
    })
},3000)








// ---- (extra learn in outside course)-------

// Promises:
// Promises are objects that represent the eventual completion or failure of an asynchronous 
// operation and its resulting value. They provide a cleaner way to handle asynchronous code 
// compared to traditional callback patterns.
// A promise can be in one of three states: pending, fulfilled, or rejected.

// const myPromise = new Promise((resolve, reject) => {
//     // Asynchronous operation
//     if (/* operation is successful */){
//         resolve(result);
//     } else {
//         reject(error);
//     }
// });

myPromise
    .then(result => {
        // Handle the successful result
    })
    .catch(error => {
        // Handle the error
    });


//Async
// The async keyword is used to define asynchronous functions. 
// An asynchronous function returns a promise implicitly, and within the function, 
// you can use the await keyword to pause execution until a promise is resolved.

async function fetchData() {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    return data;
}


// await Keyword:
// The await keyword is used inside async functions to wait 
// for a Promise to resolve before moving on to the next line of code. 
// It can only be used within an async function.



/// extra--------------------------------

for (var i = 0; i < 5; i++) {
  
    setTimeout(() => {
        console.log(i);
    }, 3000); // Adjusted timing for demonstration
}


 var b = [1, 2, 3, [4, 5, 6], 7, [8, [8, 9], 10]];

var flattenedArray = b.flat(Infinity);

console.log(flattenedArray);
// Output: [1, 2, 3, 4, 5, 6, 7, 8, 8, 9, 10]
