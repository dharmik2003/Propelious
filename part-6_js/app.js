//--------------------------------------------------
//1} Object building
//--------------------------------------------------

// case:1 (set name already)
// function person(){

//     console.log(this);
//     this.firstname="Dharmik";
//     this.lastname="Kachhadiya";
//     console.log("This function is invoked")
// }

// //new keyword create immediately an empty object
// var john = new person();
// console.log(john);
// //output: 
// // person {}
// // This function is invoked
// // person {firstname: 'Dharmik', lastname: 'Kachhadiya'}

// var hola = new person();
// console.log(hola);

// //output: 
// // person {}
// // This function is invoked
// // person {firstname: 'Dharmik', lastname: 'Kachhadiya'}



// case:2 (set name already calling time)

function Person(firstname,lastname){

    console.log(this);
    this.firstname=firstname;
    this.lastname=lastname;
    console.log("This function is invoked")
}


//--------------------------------------------------
//2} "new"
//--------------------------------------------------

//'new' keyword create immediately an empty object
var john = new Person("Dhamrik","kachhadiya");
console.log(john);
//output: 
// person {firstname: 'Dhamrik', lastname: 'Meet'}

var hola = new Person("Meet","Thummar");
console.log(hola);
//output: 
// person {firstname: 'Kachhadiya', lastname: 'Thummar'} 


// add getfullname function
Person.prototype.getfullname=function(){
    return this.firstname + " " + this.lastname;
}
console.log(john.getfullname());
//output: Dhamrik kachhadiya


Person.prototype.getFormname=function(){
    return this.lastname + " " + this.firstname;
}
console.log(john.getFormname());
//output: kachhadiya Dhamrik


//--------------------------------------------------
//3} Dangerous aside 'new' & function (if new keyword remove then run as function)
//--------------------------------------------------

function Person(firstname,lastname){

    console.log(this);
    this.firstname=firstname;
    this.lastname=lastname;
    console.log("This function is invoked")
}

//'new' keyword create immediately an empty object
var john = Person("Dhamrik","kachhadiya");
console.log(john);
//output: 
// person {firstname: 'Dhamrik', lastname: 'Meet'}

var hola = Person("Meet","Thummar");
console.log(hola);
//output: 
// person {firstname: 'Kachhadiya', lastname: 'Thummar'} 

//output
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// This function is invoked
// undefined 
// Window {window: Window, self: Window, document: document, name: '', location: Location, …}
// This function is invoked


//--------------------------------------------------
//4} conceptual aside built in function constructor:- 
//--------------------------------------------------

String.prototype.islengthgreaterthan=function(limit){
    return this.length>limit;
}

console.log("John".islengthgreaterthan(3)); 
// output:true

Number.prototype.positive=function(){
    return this>0;
}
// Object
var a=new Number(5);
console.log(a.positive()); 
// output:true


//--------------------------------------------------
//6} Dangerous aside array & for..in:- 
//--------------------------------------------------
Array.prototype.myCustomFeature="cool!" //print this extra part in output
var a=["Dharmik","Nikunj","Rushik"]

for(var prop in a){
    console.log(prop + ":"+a[prop])
  
}

// myCustomFeature:cool!  (print this extra part)
// output:
// 0:Dharmik
// 1:Nikunj
// 2:Rushik
//solution is always use this for loop method
  console.log("-------------------")
for(var i=0;i<a.length;i++){
    console.log(i + ":"+a[i])
}
// output:
// 0:Dharmik
// 1:Nikunj
// 2:Rushik


//--------------------------------------------------
//7} \object.creat & pure prototypal Inheritance:- 
//--------------------------------------------------

var person={  
    firstname1:"default",
    lastname1:"default",
    greet:function(){
        return "Hi" + this.firstname1;
    }
}


var a=Object.create(person);
console.log(a);
a.firstname1="Dharmik";
a.lastname1="Kachhadiya";

// not set name in main object
console.log(a);
//output: {firstname1: 'Dharmik', lastname1: 'Kachhadiya'}

console.log(person); 
//output: {firstname1: 'default', lastname1: 'default', greet: ƒ}