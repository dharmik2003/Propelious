"use strict";
console.log("First code in TS"); //First code in TS
// Add two number
function sum(a, b) {
    return a + b;
}
console.log(sum(10, 10)); //20
// Mastering Type Annotations in TS
let num = 220;
let str = "Hello World";
let str1 = num + str;
console.log(str1); //220Hello World
//---------------- String ----------------
//1) String concatination
let fullname = "Dharmik Kachhadiya";
let firstname = "Dharmik";
let lastname = "Kachhadiya";
fullname = lastname + " " + firstname;
console.log(fullname); //kachhadiya Dharmik
//2) string length
let len = fullname.length;
console.log(len); //18
//3) string convert in uppercase
let up_case = fullname.toUpperCase();
let low_case = fullname.toLowerCase();
console.log(up_case); // KACHHADIYA DHARMIK
console.log(low_case); // kachhadiya dharmik
//4) Substring
let sub = fullname.substring(4);
console.log(sub); //hadiya Dharmik
let sub1 = fullname.substring(7, 9);
console.log(sub1); //iy
//5) string comparison
//Dhamrik Kachhadiya == DHARMIK KACHHADIYA
if (fullname == up_case) {
    console.log("Both are same");
}
else {
    console.log("Not Same");
} // Not Same
//---------------- Boolean ----------------
let bool = false;
// 1) even number
function even(a) {
    return a % 2 === 0;
}
console.log(even(20)); // true
// 2) positive number
let pos = 10;
if (pos > 0) {
    bool = true;
}
console.log(bool); // true
//---------------- BinInt ----------------
//2**53
// const maxnumber=Number.MAX_SAFE_INTEGER
//9007199254740991
// bigint -> 9007199254740991n
//"tsc enter for compile for BigInt"
let bignumber = 9007199254740992n;
console.log(bignumber);
let bignumber1 = BigInt(2 ** 53 + 2);
console.log(bignumber1);
//---------------- Any ----------------
// if you are use "any" then you can store any data type. similar to JS
let num1;
num1 = "Dharmik";
num1 = 220;
console.log(num1); //220
//---------------- Unkown ----------------
// means your are not meantion of data. in future you can define
let num2;
num2 = "MEET";
num2 = 22;
console.log(num2); //22
//---------------- Function ----------------
//Normal Function
function printdata(a, b) {
    console.log(`Hello, ${a} ${b}`);
}
printdata("Dharmik", "Kachhadiya"); // Hello, Dharmik Kachhadiya
//Arrow Function
let arrowfun = (a, b) => {
    console.log(`Hello, ${a} ${b}`);
};
arrowfun("MEET", "THUMMAR"); //Hello, MEET THUMMAR
//Return type defind
const arrowfun1 = (a, b) => {
    return `Hello, ${a} Your age ${b} ?`;
};
console.log(arrowfun1("MEET", 29)); //Hello, MEET Your age 29 ?
//palindrome number,
const palindrome = (a) => {
    let peli = a.split("").reverse().join("");
    return peli === a;
};
console.log(palindrome("12321")); //true
//---------------- Type Annotation  ----------------
//Data Type Mention developer
let myname1 = "dharmik";
//---------------- Type Inference ----------------
//TS automatic data type defind 
let myname = "dharmik";
// calculate area 
function areacal(a, b) {
    return a * b;
}
const leng = 2;
const width = 5;
console.log(areacal(leng, width)); //10;
//----------------  Optional and Default Parameters  ----------------
// Default
const deful = (a, b = "Kachhadiya") => {
    return `WelCome to prepelious ${a} ${b}`;
};
console.log(deful("Dharmik"));
//output: WelCome to prepelious Dharmik Kachhadiya
// case:1
// const deful = (a: number = 12, b: string): string => {
//     return `Welcome to Propelious ${a} ${b}`;
// }
// console.log(deful(undefined, "Kachhadiya"));
//output: Welcome to Propelious 12 Kachhadiya
//Optional (b?)
function Optional(a, b) {
    if (b) {
        return `Welcome to Propelious ${a} I think Your age ${b}?`;
    }
    else {
        return `Welcome to Propelious ${a}`;
    }
}
console.log(Optional("Dharmik")); //Welcome to Propelious Dharmik
console.log(Optional("Dharmik", 21)); //Welcome to Propelious Dharmik I think Your age 21?
//---------------- Array ----------------
//using array consuctor
const ar = new Array(1, 2, 3, 4, 5, 6);
console.log(ar); //[ 1, 2, 3, 4, 5, 6 ]
console.log(typeof ar); //object
//array of method
const ar1 = Array.of("Dharmik", "Kachhadiya");
console.log(ar1[1]); //Kachhadiya
// Arrays 
let arr = [1, 2, 3];
console.log(typeof arr); //object
arr[4] = 567;
console.log(arr); //[ 1, 2, 3, <1 empty item>, 567 ]
// Find max Number in array
function maxnum(arr) {
    const sortedArray = arr.sort((a, b) => a - b);
    return sortedArray[sortedArray.length - 1];
    //   return Math.max(...arr)
}
let arr1 = [1, 2, 3, 4, 5]; //5
console.log(maxnum(arr1));
// Find Avg value in array
function avgvalue(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return Math.ceil(sum / arr.length);
}
let arr2 = [1, 2, 3, 4, 5];
console.log(avgvalue(arr2)); //3
//---------------- Methods and Iterations ----------------
//Methods
var fruit = ["apple", "banana"];
//Push
fruit.push("kiwi");
console.log(fruit); //[ 'apple', 'banana', 'kiwi' ]
//Pop
fruit.pop();
console.log(fruit); //[ 'apple', 'banana']
//Display
//For-Loop -------------
for (let i = 0; i < fruit.length; i++) {
    console.log(`${i + 1}. ${fruit[i]}`);
}
// output:
// 1. apple
// 2. banana
//For of -------------
for (const i of fruit) {
    console.log(i);
}
// output:
// apple
// banana
//For-Each -------------
fruit.forEach((a) => { console.log(a); });
// output:
// apple
// banana
//----------------  Array Map and Filter Methods ----------------
//Map
var numbers = [1, 2, 3, 4, 5];
var resultNumbers = numbers.map((num) => num * 2);
console.log(resultNumbers); // [ 2, 4, 6, 8, 10 ]
//Filter
var filt = numbers.filter((num) => { return num % 2 == 0; });
console.log(filt); // [ 2, 4 ]
//Find
var findValue = numbers.find((num) => num === 2);
console.log(findValue); // 2
//Some
var somevalue = numbers.some((num) => num > 2);
console.log(somevalue); // true
//Every
var somevalue = numbers.every((num) => num > 2);
console.log(somevalue); // false
//Number to String
var stringconvert = numbers.toString();
console.log(typeof stringconvert); //string
console.log(stringconvert);
//----------------  Object ----------------
// data update time problem generate (string to number)
// const person={
//     name:"Dharmik",
//     age:27,
//     isStudent:false,
//     address:{
//         city:"surat",
//         state:"Gujarat"
//     }
// }
// console.log(person.address.city) //surat
// person.address.city="mumbai";
// console.log(person.address.city) // mumbai
const emp = {
    name: "Dharmik",
    age: 27,
    isStudent: false,
    address: {
        city: "surat",
        state: "Gujarat"
    }
};
console.log(emp.address.city); //surat
emp.address.city = "mumbai";
console.log(emp.address.city); // mumbai
const person = {
    name: "Dharmik",
    age: 27,
    isStudent: false,
    address: {
        city: "surat",
        state: "Gujarat"
    }
};
console.log(person.address.city); //surat
person.address.city = "mumbai";
console.log(person.address.city); // mumbai
const person2 = {
    name: "Dharmik",
    age: 27,
    isStudent: false,
    address: {
        city: "surat",
        state: "Gujarat"
    }
};
console.log(person.address.city); //surat
person.address.city = "mumbai";
console.log(person.address.city); // mumbai
let shop = {
    laptop: "Dell",
    price: 210000,
    qun: 5,
};
const calculate_qun = (shop) => {
    return `${shop.laptop} is available, total Quentity is ${shop.qun} and each laptop price is ${shop.price} `;
};
console.log(calculate_qun(shop));
const studnet1 = {
    name: "Dharmik",
    age: 21,
};
const inroduction = (studnet1) => {
    const { name, age } = studnet1;
    return `${name} ${age}`;
};
console.log(inroduction(studnet1)); //Dharmik 21
//---------------- Enums  ----------------
//identify client | admin 
//use1=>login=>normal user
//use2=>login=>admin user
var Role;
(function (Role) {
    Role["user"] = "user";
    Role["admin"] = "admin";
})(Role || (Role = {}));
const emp1 = {
    name: "Dharmilk",
    email: "dharmik@gmail.com",
    password: "dk",
    role: Role.admin
};
const emp2 = {
    name: "Meet",
    email: "Meet@gmail.com",
    password: "dk",
    role: Role.user
};
const checkuser = (emp1) => {
    const { name, role } = emp1;
    return role === "admin" ? ` ${name} is admin` : ` ${name} is not admin `;
};
console.log(checkuser(emp1));
const per = ["dharmik", 220, true];
// const per1:PersonInfo=["dharmik","kachhadiya",true]  //error show second index not match
const check_lincence = (emp) => {
    const [name, age, isdriveinglincence] = emp;
    return `${name} drive licence available: ${isdriveinglincence ? "Yes" : "No"} and age is ${age}`;
};
console.log(check_lincence(per));
//output: dharmik drive licence available: Yes and age is 220
//push new value
per.push("kachhadiya");
console.log(per);
const online_shop = ["T-shirt", 25000, 50];
const check_stock = (product) => {
    const [product_name, price, stock] = online_shop;
    return `Only ${stock} ${product_name} available just only ${stock}`;
};
console.log(check_stock(online_shop));
//output: Only 50 T-shirt available just only 50
//---------------- Unions and Intersections ----------------
const userinput = (value) => {
    if (typeof value === "number") {
        return value * 2;
    }
    else if (typeof value === "string") {
        return value.toUpperCase();
    }
    else {
        throw new Error();
    }
};
console.log(userinput(20));
console.log(userinput("Dharmik"));
