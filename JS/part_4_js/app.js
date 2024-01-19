//-----------------------------------------------------
//1} Object:- 
//-----------------------------------------------------

var person = new Object();

person["firstname"]="Dharmik";
person["lastname"]="Kachhadiya";

// method-1
console.log(person);        //output: {firstname: 'Dharmik', lastname: 'Kachhadiya'}
console.log(person["firstname"])  //output: Dharmik

// method-2
console.log(person.firstname); //output: Dharmik
console.log(person.lastname); //output: Kachhadiya

//Person inside create new object address
person.address = new Object();
person.address.street ="A-1102 Apple";
person.address.city ="Surat";
person.address.state ="Gujarat";

//display address
console.log(person.address.street);  //output: A-1102 Apple
console.log(person.address.city); //output: Surat
console.log(person["address"]['state']); //output: Gujarat
//always use . operator method for diaplay object data.


//-----------------------------------------------------
//2} Object and object literals:- 
//-----------------------------------------------------


var person1 = {
    firstname1: "Dharmik", 
    lastname1:"Kachhadiya",
    address1:{
        street1:"A-1102 Apple",
        city1: "Surat",
        state1: "Gujarat",
    }
};
console.log(person1.firstname1);
console.log("-");

//Print data 
function greet(person1){
    console.log("Hi "+ person1.firstname1);
}
greet(person1) // Hi Dharmik

greet({firstname1: "Rushik", lastname1: "Nikunj"});  //output: Rushik

person1.address1={
    street:"Amroli"
}

console.log(person1)

//output:
//{firstname1: 'Dharmik', lastname1: 'Kachhadiya', address1: {…}, address2: {…}}
// address1: {street1: 'A-1102 Apple', city1: 'Surat', state1: 'Gujarat'}
// address2: {street: 'Amroli'}
// firstname1:"Dharmik"
// lastname1: "Kachhadiya"


//-----------------------------------------------------
//3} Framework aside(namespace)
//-----------------------------------------------------


// Namespace: A container for variable and functions
var per1="Dharmik";
var per1="kachhadiya";
console.log(per1);

var english={}   // make one container(object)
var spanish={}   // make one container(object)

english.per1="Dharmik";
spanish.per1="Kachhadiya";

// english.greeting.per1="Dharmik"; || output: error (not available contain first create then add)

english.greeting ={}   //  first create container
english.greeting.greet="nikunj"; // add data in container inside container

// english -> per1,greeting-> greet

// output:
// greeting: {greet: 'nikunj'}
// per1: "Dharmik"
// [[Prototype]]: Object

console.log(english); //output: {per1: 'Dharmik'}
console.log(spanish); //output: {per1: 'Kachhadiya'}
console.log(english.greeting.greet); //output: nikunj

//-----------------------------------------------------
//4} Json (Java script object notation):- 
//-----------------------------------------------------

var objectliteral={
    firstname:'Dharmik',
    isaprogrammer:true,
}
console.log(objectliteral);  //output: {firstname: 'Dharmik', isaprogrammer: true}


//-----------------------------------------------------
//5} Function are object:- 
//-----------------------------------------------------

// function are actually objects in javascript
function greet(){
    console.log('Hi')
}

greet.laguage="English";
console.log(greet);
//output: 
// ƒ greet(){
//     console.log('Hi')
// }
console.log(greet.laguage);  //output: English


//-----------------------------------------------------
//6} Function statement and Function Expressions:- 
//-----------------------------------------------------

//Function statement = not return value like if()
//Function Expressions = anonymous function (value store in varible)

gree();

function gree(){
    console.log("Gree function"); //output: Gree function
}

// anonymousgreet();  // error after function declare then below call function 
var anonymousgreet=function(){
    console.log('anonymous done');
}
anonymousgreet(); 

function log(a){
    console.log(a)
}

// pass value
log(3)   //output: 3

// pass object
log({
    gre:"Dharmik",   //output: {gre: 'Dharmik'}
})  

//pass function (print full function)
log(function(){
    console.log("HI")
})
//output: 
// ƒ (){
//     console.log("HI")
// }

//-----------------------------------------------------
//7} By value and By reference:- 
//-----------------------------------------------------

//By value
var a=3;
var b;
b=a;
a=2;
console.log(a);  //output: 2
console.log(b);  //output: 3

//By reference
var c={greei:'hi'};
var d;
d=c;
c.greei="hello";

//Mutable
console.log(c);  //output: {greei: 'hello'}
console.log(d);  //output: {greei: 'hello'}

//by reference (event as parameters) (d value change)
function changevalue(obj){
    obj.greei="change value event parameters"
}

changevalue(d);

console.log(c); //output: {greei: 'change value event parameters'}
console.log(d); //output: {greei: 'change value event parameters'} 

//euqal operator sets up new memory space(new address)
//next output is import output----------->
c= {greei:'howdy'};
// d=c;   this write then same output display else both are different
console.log(c); //output: {greei: 'howdy'}
console.log(d); //output: {greei: 'change value event parameters'}



