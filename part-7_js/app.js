//--------------------------------------------------
//1} initialization:-:- 
//--------------------------------------------------

var person=[
    {
        // dharmik object
        firstname:"Dharmik",
        lasrname:"kachhadiya",
        address:[
            "1102",
            "Apple"
        ]
    },
    {   
        //meet object
        firstname:"meet",
        lasrname:"thummar",
        address:[
            "103",
            "meera"
        ]
    }
]

console.log(person);

//--------------------------------------------------
//2} type of instanceof & figuring out what something is:- 
//--------------------------------------------------

var a=3;
console.log(typeof a); //number

var b="Dharmik";
console.log(typeof b); //string

var c={};
console.log(typeof c); //object

var d=[];
console.log(typeof d); //object
console.log(Object.prototype.toString.call(d)); //[object array]

function Person(name){
    this.name=name;
}
var e=new Person("Dharm");
console.log(typeof e); //object
console.log(e instanceof Person); //true

console.log(typeof undefined);
console.log(typeof null); //object

var z=function(){}
console.log(typeof 2) //function


//--------------------------------------------------
//3} Strict Mode:- ("use strict"; Defines that JavaScript code should be executed in "strict mode".)
//--------------------------------------------------

// "use strict";
// x = 3.14;       // This will cause an error because x is not declared

function strictfunction(){
    "use strict";  // extra js feature (not allow wrong)
    var person2;
    persom2={};
    console.log(person2);
}


var person;
// wrong but allow
persom = {};
console.log(persom); //{}
strictfunction();