//-----------------------------------------------------
//2} Understanding prototype:
//-----------------------------------------------------

// In JavaScript, each object has a prototype, and the prototype is essentially an 
// object from which the original object inherits properties and methods. 
// The prototype chain is a way to achieve inheritance in JavaScript.

// object 1
var person={
    firstname:'Default',
    lastname:'Default',
    getfullname:function(){
        return this.firstname + " " + this.lastname;
    }
}

// object 2
var john={
    firstname:"Dharmik",
    lastname:"Kachhadiya",
}

//don't do this EVER! for demo purposes only!!!
//prototype 1
john.__proto__=person;
console.log(john.getfullname()); //output: Dharmik Kachhadiya
console.log(john.firstname); //output:  Dharmik 

// output:
// firstname:Dharmik
// lastname:Kachhadiya

// object 3
var jane={
    firstname:"Jane",
}

//don't do this EVER! for demo purposes only!!!
//prototype 2
jane.__proto__=person; //same memory
console.log(jane.getfullname()); //output: Jane Default
console.log(jane.firstname); //output:  Jane 


//-----------------------------------------------------
//3} Everything is an object
//-----------------------------------------------------

var c=[]; 

console.log(c.__proto__); //output: []
console.log(c.__proto__.length); //output: 0
console.log(c.__proto__.__proto__); //output: object

//-----------------------------------------------------
//4} Reflection:- 
//-----------------------------------------------------

// Reflection in JavaScript refers to the ability to inspect and manipulate objects and their properties at runtime. 
// JavaScript provides several built-in functions and operators that allow you to perform reflection. 
// Here are some common ways to use reflection in JavaScript:

for(var prop in john){
    if(john.hasOwnProperty(prop)){
        console.log(prop+ ":"+john[prop]);
    }
}

var jane={
    address:'1102',
    getFormalFullname:function(){
        return this.lastname+" "+ this.firstname;
    }
}

var jim={
    getFirstname:function(){
        return firstname;
    }
}

.extend(john,jane,jim);

