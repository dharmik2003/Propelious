//-----------------------------------------------------
//8} Object, function & this:- 
//-----------------------------------------------------

//Here 'this' keyword point to global object
console.log(this); 
//output: window

function a(){
    console.log(this);
    this.newvariable="dharmik"
}
a();    //output: window
console.log(newvariable);   //output: dharmik


var result=function(){
    console.log(this);
}
result();

//output: window (full window object print)

// case: 1
// var c={
//     name="this c",
//     log:function(){
//         console.log(this);
//     }
// }

// c.log(); //output: {name: 'this c', log: ƒ}

// case: 2
// var d={
//     name:"this is d",
//     log:function(){
//         this.name='update inside d';
//         console.log(this);
//     }
// }
// d.log(); //output: {name: 'this is inside d', log: ƒ}

// case: 3 (both output same)
// var d={
//     name:"this is d",
//     log:function(){
//         this.name='update inside d'; //this value update on local object (inside object in this reason)
//         console.log(this);      //output: {name: 'update inside d', log: ƒ}
//         var setname=function(newname){
//             this.name=newname;
//         }
//         setname('update again this d'); // this value update on global object (inside function use in this reason)
//         console.log(this);      //output: {name: 'update inside d', log: ƒ}
//     }
// }
// d.log();


// case: 4 (self) (both output different)

// var d={
//     name:"this is d",
//     log:function(){
//         var self=this
//         self.name='update inside d'; //this value update on local object (inside object in this reason)
//         console.log(self);      //output: {name: 'update inside d', log: ƒ}
//         var setname=function(newname){
//             self.name=newname;
//         }
//         setname('update again this d'); // this value update on global object (inside function use in this reason)
//         console.log(self);      //output: {name: 'update again this d', log: ƒ}
//     }
// }
// d.log();


//-----------------------------------------------------
//9} Array:- 
//-----------------------------------------------------

// inside array you can store anything store in array like string, number, object, array, boolean.

var arr=new Array();
var arr1=[];

arr1=[1,
    2,
    true,
    "dharmik",
    5,
    {
        name:"Dharmik",
        address:"A-1102"
    }, 
    function(name){
        var greet="Kachhadiya";
        console.log(greet+name)
    }
]

console.log(arr1)
//output:
// (7) [1, 2, true, 'dharmik', 5, {…}, ƒ]
// 0: 1
// 1: 2
// 2: true
// 3: "dharmik"
// 4: 5
// 5: {name: 'Dharmik', address: 'A-1102'}
// 6: ƒ (name)


//-----------------------------------------------------
//10} argument & spread:- 
//-----------------------------------------------------

function abc(fname,lname,language){

    if(arguments.length===0){
        console.log("Missing parameters");
    }

    language=language ||'en' // (it will be check already assign value or not) (if assign then print "guj", else print"en" )
    console.log(fname);
    console.log(lname);
    console.log(language);
    console.log(arguments); //output: ['dharmik','kachhadiya','guj']
    console.log("---------------")

}

abc(); //output: unfined unfined 
abc('dharmik'); //output: Dharmik unfined 
abc('dharmik','kachhadiya'); //output: Dharmik Kachhadiya 
abc('dharmik','kachhadiya'); //output: Dharmik kachhadiya en 
abc('dharmik','kachhadiya','guj'); //output: Dharmik kachhadiya guj

//-----------------------------------------------------
//11} Function overloading:- (same name different parameter)
//-----------------------------------------------------

// case:1 (normal case)
// function abcd(fname1,lname1,ln){
//     ln = ln || "eng";
//     if(ln==="eng"){
//         console.log(fname1 + " " +ln)
//     }
//     if(ln==="guj"){
//         console.log(lname1 + " " +ln)
//     }
// }

// abcd("Dharmik","Kachhadiya","eng");  //output: Dharmik eng
// abcd("Dharmik","Kachhadiya","guj"); //output: Kachhadiya guj


// case:2 (overloading same function use at time two other function)


function abcd(fname1,lname1,ln){
    ln = ln || "eng";
    if(ln==="eng"){
        console.log(fname1 + " " +ln);
        console.log("Done");      
    }
    if(ln==="guj"){
        console.log(lname1 + " " +ln);
    }
}

function english(fname1, lname1){
    abcd(fname1,lname1,"eng"); 
}
function spanish(fname1, lname1){
    abcd(fname1,lname1,"guj"); 
}

english("Dharmik","kachhadiya");
spanish("Dharmik","kachhadiya");

// output:
// Dharmik eng
// Done
// kachhadiya guj

//-----------------------------------------------------
//12} Syntax paser: Js execute sequece by sequence (retur -> error) (return-> return;) (semocolon add automatic)
//-----------------------------------------------------

//-----------------------------------------------------
//13} Dangerous Aside Automatic Semicolon Insertion
//-----------------------------------------------------

// -> no programming language is perfect 
// -> Js ignoer semicolon (;)
// -> Js automatic semicolon insertion.

// case:1 {unfined}
// function getperson(){
//     return 
//     {
//         fnam:"Dharmik"
//     }
// }

// console.log(getperson()) //unfined

// case:2 {print}
function getperson(){
    return {
        fnam:"Dharmik"
    }
}

console.log(getperson()) //output: {fnam: 'Dharmik'}


//-----------------------------------------------------
//14} Dangerous Aside Automatic Semicolon Insertion (Js remove whitespace automatic)
//-----------------------------------------------------

// -> Invisible character that create literal space in your written code.
// -> carriage returns, tabs, spaces
// -> Js engine ignore whitespace.

//-----------------------------------------------------
//15} Function Expressions
//-----------------------------------------------------

// Function Statement
function functionstatement(nam){
    console.log("Hello"+nam);
}
functionstatement();

//Function Expression
var express=function(nam){
    console.log("Hii"+nam);
}
express();

// using immediately invoke this Function Expressions (IIFE)
// (grey ->it's return string return)
var grey=function(nam){
    return "Hello"+nam;
}(' This function return string not function'); //function object {set parameter}

console.log(grey); ///output: Hello This function retun string not function


// JS
// (inside anything) breaket convert in normal function, not display error in output
(function(name){});
(3+4);
("1) This is string, Js allow this type of line")

// // case:1 ();
// var friend="Meet";

// //normal use function using.
// (function(name){
//     var A="Inside IIFE: Hello Dharmik";
//     console.log(A+" "+name);
// }(friend));
// //output: Inside IIFE: Hello Dharmik Meet

// // case:2 ()();
// var friend="Meet";
// //normal use function using.
// (function(name){
//     var A="Inside IIFE: Hello Dharmik";
//     console.log(A+" "+name);
// })(friend);
// //output: Inside IIFE: Hello Dharmik Meet


//-----------------------------------------------------
//16} Function Expressions
//-----------------------------------------------------


// case:1
//"-------IIFE not store value in Global level-------"
var friend="Meet";
//normal use function using.
(function(name){
    var A="Inside IIFE: Hello Dharmik";
    console.log(A+" "+name);
})(friend);
console.log(A); //output: update value, IIFE not store value in Global level
// global execution store "var A =   update value, IIFE not store value in Global level


// case:2
//"-------IIFE store value in Global level-------"
var friend="Meet";
(function(global, name){
    var A="Inside IIFE: Hello Dharmik";
    global.A="'new value set in global value'"
    console.log(A+" "+name);
})(window,friend);

console.log(A); //output: 'new value set in global value'




//-----------------------------------------------------
//17} Closure  
//(closure allows a function to retain access to the variables of its containing (enclosing) function, 
// even after the containing function has completed execution.)
//-----------------------------------------------------

function abc(what){
    return function(name){
        console.log(what+" "+name);
    }
}
// abc('Tony')('Man')  //output: Tony Man
var ab=abc('Tony');
ab('Man');      //output: Tony Man


//-----------------------------------------------------
//18} Closure Part-2
//-----------------------------------------------------

function buildfunction(){
    var xyz=[];
    for(var i=0;i<3;i++){
        xyz.push(
            function(){
                console.log(i);   
            }
        )
    }
    return xyz;
}

var fs=buildfunction();
fs[0]();//output: 3 
fs[1]();//output: 3 
fs[2]();//output: 3 

function buildfunction(){
    var xyz=[];
    for(var i=0;i<3;i++){
        xyz.push( 
            (function(j){
                return function(){
                console.log(j);   
                }
            }(i))
        )
    }
    return xyz;
}

var fs1=buildfunction();
fs1[0]();//output: 0 
fs1[1]();//output: 1 
fs1[2]();//output: 2



//-----------------------------------------------------
//19} Function Factories:-

// A function factory in JavaScript is a function that creates and returns another function. 
// Function factories are used to generate functions with specific behavior or configurations. 
// They are a powerful concept in functional programming and can be used 
// for creating reusable and customizable functions.
//-----------------------------------------------------

function make(lang){

    return function(fna,lna){
        if(lang==="en"){
            console.log(fna + " " +lna+" "+lang);
            console.log("Done");      
        }
        if(lang==="es"){
            console.log(fna + " " +lna + " " +lang);
        }
    }

}

var eng=make("en");
var span=make("es");

eng("dharmik","kachhadiya"); 
span("meet","thummar");

// output:
// dharmik kachhadiya en
// Done
// meet thummar es

//-----------------------------------------------------
//20} Closure and callbacks
//-----------------------------------------------------




// callback function:

// In JavaScript, a callback is a function that is passed as an argument to another function 
// and is intended to be executed after the completion of a specific task or at a designated time.
// Callbacks are a fundamental concept in asynchronous programming, allowing you to handle events, 
// make asynchronous requests, and manage the flow of your code.
function tellmewhendone(callback){
    // var a=1000;
    // var b=2000;

    callback(); //the 'callback; it runs the function I give it!

}

tellmewhendone(function(){
    console.log("I am Done");
});


tellmewhendone(function(){
    console.log("All Done....");
});

// output:
// I am Done
// All Done....


//-----------------------------------------------------
//21} call(), apply(), bind()
//-----------------------------------------------------

// The bind() method creates a new function with the same body as the original 
// function but a fixed this value and, optionally, partially applied arguments.
// Syntax: function.bind(thisArg, arg1, arg2, ...)
//bind()
var person={
    firname:"dharmik",
    lasname:"kachhadiya",
    getfullname:function(){
        var fullname=this.firname+" "+this.lasname;
        return fullname;
    }
}

var logname=function(l1,l2){
    console.log("Logged:"+this.getfullname());
    console.log(l1 + l2) //output: en es
    console.log("--------")
}
var logpersonname=logname.bind(person);  //Bind copy function and you can change artribute.  
logpersonname();
// output: Logged:dharmik kachhadiya


// ex-2
function displayInfo(email, phone) {
    console.log(`Name: ${this.name}, Email: ${email}`);
}

const user = { name: 'Bob' };

const boundFunction = displayInfo.bind(user, 'bob@example.com');
boundFunction();
// Output: Name: Bob, Email: bob@example.com



//call()
// The call() method is used to invoke a function with a specified this value and arguments provided individually.
logname.call(person,'en','es');  // call is not create copy, we change atribute value in same function

// ex-2
function greet(name) {
    console.log(`Hello, ${name}! I'm ${this.title}.`);
}

const person = { title: 'Mr.' };

greet.call(person, 'John');
// Output: Hello, John! I'm Mr.


//apply()
// The apply() method is similar to call(), but it takes an array or 
// an array-like object as its second argument for passing arguments to the function.
// Syntax: function.apply(thisArg, [arg1, arg2, ...])
logname.apply(person,['en','es']); // Apply similar to call but apply but array. 

// ex-2
function introduce(age, city) {
    console.log(`I'm ${this.name}, ${age} years old, from ${city}.`);
}

const personInfo = { name: 'Alice' };

introduce.apply(personInfo, [25, 'Wonderland']);
// Output: I'm Alice, 25 years old, from Wonderland.


// The Difference Between call() and apply()
// The call() method takes arguments separately.
// The apply() method takes arguments as an array.

// method:2

(function(l1,l2){
    console.log("Logged:"+this.getfullname());
    console.log(l1 + l2) //output: en es
    console.log("--------")
}).apply(person,['es','en']);


//function borrowing
// Function borrowing refers to the practice of using a method from "one object in the context of another object". 
// In JavaScript, objects can "share methods through" function borrowing, 
// allowing them to reuse or extend functionality without duplicating code. 
// This is often achieved using the call() or apply() methods.

var person2={
    firname:"meet",
    lasname:"thummar",
}
console.log(person.getfullname.apply(person2)); //meet thummar


//function currying (in cource)
function multiply(a,b){
    return a*b;
}

var multipleBtTwo=multiply.bind(this,2);
console.log(multipleBtTwo(4)); // output: 8

var multipleBtTwo=multiply.bind(this,2,2);
console.log(multipleBtTwo(4)); // output: 4 ||(2,2) ignore pass parameter

var multipleBtTwo=multiply.bind(this);
console.log(multipleBtTwo(4,2)); // output: 8

//----------function currying (in Extra) -----------------------

// Function currying is a technique in functional programming where a 
// function is transformed into a sequence of functions, each taking a single argument. 
// The result is a chain of partially applied functions, leading to a more modular and reusable code structure. 
// Currying allows you to create specialized versions of a function by fixing some of its arguments.

// Non-curried function
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // Output: 6

// Curried version of the same function
function curryAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

// Usage of the curried function
console.log(curryAdd(1)(2)(3)); // Output: 6

// Or you can partially apply the function
const addWith1 = curryAdd(1);
const addWith1And2 = addWith1(2);

console.log(addWith1And2(3)); // Output: 6



//-----------------------------------------------------
//22} Functional Programming:-
//-----------------------------------------------------

//Simple Programming
var array1=[1,2,3];
console.log(array1);

var array2=[];

for(var i=0;i<array1.length;i++){
    array2.push(array1[i]*2);
}
console.log(array2);
// output: 
// [1,2,3]
// [2,4,6]


//Functional Programming
function mapToEach(arr,fn){
    var newarray=[];
    for(var i=0;i<arr.length;i++){
        newarray.push(fn(arr[i]));
    }
    return newarray;
}

//1
var array3=[1,2,3];
console.log(array3);
var array4=mapToEach(array3,function(items){
    return items*2;
});
console.log(array4);
// output: 
// [1,2,3]
// [2,4,6]
 

//2
var array5=mapToEach(array3,function(items){
    return items>2;
});
console.log(array5);
//output: [false, false, true]
 

//3
var checkitems=function(limit,items){
    return items>limit;
}
var bindmethoduse=mapToEach(array1 ,checkitems.bind(this,1));
console.log(bindmethoduse);
// output: (3) [false, true, true]

//4 
var bindmethoduse=mapToEach(array1 ,function(limit,items){
    return items>limit;
}.bind(this,2));
console.log(bindmethoduse);
// output: (3) [false, false, true]

//-----------------------------------------------------
//23} Functional Programming part:2:- (map, filter)
//-----------------------------------------------------

var array6= array1.map(function(items){ return items*3});
console.log(array6);
//output: (3) [3, 6, 9]

var arrry=[1,2,3,4,5,6,7,8,9];
var filter1= arrry.filter(function(items){return items%2==0;})
console.log(filter1);
// output:[2,4,8]

console.log("-----------");

("Map");
// The map function is used to transform each element of an array by applying a provided function. 
// It creates a new array with the results of applying the provided function to every element of the original array.
const numbers = [1, 2, 3, 4, 5];

// Using map to square each element
const squaredNumbers = numbers.map(function(x) {
    return x * x;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


("Filter");
// The filter function is used to create a new array containing only elements that satisfy a given condition. 
// It tests each element in the array against a provided function and includes only the elements that pass the test.
const numbersq = [1, 2, 3, 4, 5];

// Using filter to keep only even numbers
const evenNumbers = numbersq.filter(function(x) {
    return x % 2 === 0;
});

console.log(evenNumbers); // Output: [2, 4]
