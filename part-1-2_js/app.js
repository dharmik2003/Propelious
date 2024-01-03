//---------------------------------------------------------
//1} Global object:
//---------------------------------------------------------

// a and function b is global object 
//"this.a","a","window.a" -> in console in browser // Dharmik

var a="Dharmik";

function b(){
    var b=10   // this b is outer environment for global object
}


//---------------------------------------------------------
//2} Execution Context & hosting:
//---------------------------------------------------------

// b();                // calling B...
// console.log(a);     //unfined

var a="Dharmik";

function b(){
    console.log("calling B...");
}

b();                //calling B...
console.log(a);     //Dharmik


// hosting => "variable setup" variable set in top of code, not physically

//---------------------------------------------------------
//3} Undefined:
//---------------------------------------------------------

// case:1
var a=10;
console.log(a);

if(a===undefined){
    console.log('a is undefined') //10 //a is defined
}
else{
    console.log('a is defined')
}


// case:2 (a is not defined "error")
console.log(a);

if(a===undefined){
    console.log('a is undefined') //10 //a is defined
}
else{
    console.log('a is defined')
}


// case:3  
//(//Dharmik // a is undefined) (don't set a=undefined value it's wrong method)
var a="Dharmik";
console.log(a);

a=undefined

if(a===undefined){
    console.log('a is undefined') //output: 10 //a is defined
}
else{
    console.log('a is defined')
}


//---------------------------------------------------------
//4} Function invocation:
//---------------------------------------------------------

// case:1
function a(){
    b()
    var c;
}
function b(){
    var d;  //local
}
a();


// case:2
function a(){
    b()
    var c;
}
function b(){
    var d;  //local
}
a();
var d; //global

//---------------------------------------------------------
//5} Function, context, variable environment:
//---------------------------------------------------------

function b(){
    var myvar;  //local for this function only  "undefined"
    console.log(myvar)  //undefined

}
function a(){
    var myvar=2;  //local for this function only  "myvar=2"
    console.log(myvar)   //2
    b();
    
}

var myvar=1; //global execution context "myvar=1";  
console.log(myvar)   //1  
a();
console.log(myvar)   //1  


//---------------------------------------------------------
//6} Scop chain
//---------------------------------------------------------

// case: 1
function b(){
    console.log(myvar)  //1
}
function a(){
    var myvar=2;  //local for this function only  "myvar=2"
    b();
}

var myvar=1; //global execution context "myvar=1";  
a();


// case:2 (change lexical environment)
function a(){
    function b(){
        console.log(myvar)  // output: 2 
    }
    var myvar=2;  //local for this function only  "myvar=2"
    b();
} 
var myvar=1; //global execution context "myvar=1";  
a();
    

// case:3 (change lexical environment)
function a(){
    function b(){
        console.log(myvar)  // output: 1
    } 
    b();
} 
var myvar=1; //global execution context "myvar=1";  
a();


//---------------------------------------------------------
//7} Let
//---------------------------------------------------------

let a=50;
let b=10;

if(a>b){
    let c=true;
}
console.log(c);  //output: c is not defined


//---------------------------------------------------------
//8} Asynchronous 
//---------------------------------------------------------

// long running function
function waitthreeseconds(){
    var ms=3000+new Date().getTime();
    while(new Date()<ms){}
    console.log('finished function');
}

function clickhandler(){
    console.log("click event Done");
}

//listen for the click event
document.addEventListener('click', clickhandler);

waitthreeseconds();
console.log('finished execution');

//output:
// finished function
// finished execution
