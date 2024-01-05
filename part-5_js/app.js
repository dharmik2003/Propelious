//-----------------------------------------------------
//2} Understanding prototype:
//-----------------------------------------------------

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
console.log(john.firstname); //tput:  Dharmik 

// output:
// firstname:Dharmik
// app.js:28 lastname:Kachhadiya

// // object 3
var jane={
    firstname:"Jane",
}

//don't do this EVER! for demo purposes only!!!
//prototype 2
jane.__proto__=person; //same memory
console.log(jane.getfullname()); //output: Jane Default
console.log(jane.firstname); //tput:  Jane 


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