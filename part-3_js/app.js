//-----------------------------------------------------
//1} Types in JS
//-----------------------------------------------------

// | * Static typing     
// |  bool isnew ="hello"  //output: "error"

// | * Dynamic Typing

var isnew=true; 
isnew = 'yup';
isnew = 1;
console.log(isnew);   //outout: 1 

//Js is Dynamic Typing (any value assign like string, number, bool to variable)

//-----------------------------------------------------
//2} Primitive types in JS (total 6 types)
//-----------------------------------------------------

//unfined (declare variable, not assign value)
var a;
console.log(a);  //output: unfined
//null (set value as null)
var b = null;
console.log(b);  //output: null
//boolean (True or False)
var c = true;
console.log(c);  //output: true
//number (Floating point number)
var d = 10;
console.log(d);
var e = 20.20;
console.log(e);
//string (sequence of character)
var f = "Propelious";
console.log(f)
//Symbol 
var g=Symbol("Propelious");
console.log(g);             //output: Symbol(Propelious)
console.log(g.description); //output: Propelious


//-----------------------------------------------------
//3} Operator in JS (+,-,*,/,>,<)
//-----------------------------------------------------

var A = 10+30;
console.log(A); //output: 40
var B = 20-100;
console.log(B); //output: -80
var C = 10*10;
console.log(c); //output: true
var D = 4>3;
console.log(D); //output: true
var E = 3<1;
console.log(E); //output: false

//-----------------------------------------------------
//4} Operator precedence & Associativity 
//-----------------------------------------------------

// Operator Precedence: which operator function gets called first.
// Operator Associativity: what order operator function get called in left to right or right to left.
//(+,-,*,/)=> left to right Associativity (start scan to left)
// (=) => right to left Associativity (start scan to right)

var a1 = 2+3*5;
console.log(a1);

var A1=2, A2=3, A3=1;
A1=A2=A3;
//A1=A2=A3
//A1=A2=4
//A1=4
console.log(A1); //output:1
console.log(A2); //output:1
console.log(A3); //output:1

var A1=2, A2=3, A3=4;
A1=A2=A3;
console.log(A1); //output:4
console.log(A2); //output:4
console.log(A3); //output:4

var b1=(1+2)*5
console.log(b1); //output:15

//-----------------------------------------------------
//5} Coercion (converting a value from one type to another) 
//-----------------------------------------------------

var c1 = "Hello" + " Dharmik"
console.log(c1);

var c2 = 1 + "2";
console.log(c2);

//-----------------------------------------------------
//6} comperison Operators: 
//-----------------------------------------------------

console.log(1<2<3);  //output:true
console.log(3<2<1);  //output:true

//False -> 0
//True -> 1

console.log(Number(false));  //output:0
console.log(Number(true));  //output:1
console.log(Number(undefined)); //output:NaN
console.log(Number(null));  //output:0

console.log(3==3);  //output:true
console.log("3"==3); //output:true
console.log(false==0); //output:true

console.log(3===3);  //output:true
console.log("3"===3); //output:false
console.log("3"==="3"); //output:true

//-----------------------------------------------------
//7} Booleans:- 
//-----------------------------------------------------

console.log(Boolean(undefined)); //output:false
console.log(Boolean(null)); //output:false
console.log(Boolean("")); //output:false


if (a){
    console.log(" a is print ")
}
else{
    console.log(" a is not print because a is empty ")   
}
//output: a is not print because a is empty 
// (=== right to left)
var a=0;
if (a||a===0){
    console.log("a is print")
}
else{
    console.log("a is not print because a is empty ")   
}
//output: a is print


//-----------------------------------------------------
//7} Default values:- 
//-----------------------------------------------------

function geet(name){
    // name="Dharmik"   // output: Hello Dharmik
    console.log("Hello "+ name); //output:Hello undefined
}
geet();

function abc(name){
     name="abc" ||" Dharmik";
    console.log("Hello "+ name); //output: Hello abc
}
abc();

function dis(name){
    name=name||" Dharmik";
   console.log("Hello "+ name); //output: Hello Dharmik
}
dis();


//-----------------------------------------------------
//7} Framework aside:- 
//-----------------------------------------------------

console.log(libraryname);