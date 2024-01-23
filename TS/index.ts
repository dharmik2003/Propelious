console.log("First code in TS")  //First code in TS

// Add two number
function sum(a:number,b:number):number{
    return a+b;
}
console.log(sum(10,10))  //20


// Mastering Type Annotations in TS
let num:number=220;
let str:string="Hello World";
let str1:string=num+str;  
console.log(str1)        //220Hello World



//---------------- String ----------------

//1) String concatination
let fullname="Dharmik Kachhadiya";
let firstname="Dharmik";
let lastname="Kachhadiya";
fullname=lastname + " " + firstname
console.log(fullname)  //kachhadiya Dharmik

//2) string length
let len:number=fullname.length;
console.log(len);       //18

//3) string convert in uppercase
let up_case:string=fullname.toUpperCase();
let low_case:string=fullname.toLowerCase();
console.log(up_case);       // KACHHADIYA DHARMIK
console.log(low_case);     // kachhadiya dharmik

//4) Substring
let sub:string=fullname.substring(4);
console.log(sub);          //hadiya Dharmik
let sub1:string=fullname.substring(7,9);
console.log(sub1);         //iy

//5) string comparison
//Dhamrik Kachhadiya == DHARMIK KACHHADIYA
if(fullname==up_case){
    console.log("Both are same");
}
else{
    console.log("Not Same")
}       // Not Same



//---------------- Boolean ----------------
let bool:boolean = false;

// 1) even number

function even(a:number){
    return a%2===0;
}
console.log(even(20));     // true

// 2) positive number
let pos:number=10;
if(pos>0){
    bool=true;
}
console.log(bool);      // true



//---------------- BinInt ----------------

//2**53

// const maxnumber=Number.MAX_SAFE_INTEGER
//9007199254740991

// bigint -> 9007199254740991n
//"tsc enter for compile for BigInt"

let bignumber: bigint = 9007199254740992n;
console.log(bignumber);

let bignumber1 = BigInt(2**53+2);
console.log(bignumber1);



//---------------- Any ----------------
// if you are use "any" then you can store any data type. similar to JS

let num1:any;
num1="Dharmik";
num1=220;
console.log(num1);   //220



//---------------- Unkown ----------------
// means your are not meantion of data. in future you can define

let num2:unknown;
num2="MEET";
num2=22;
console.log(num2); //22



//---------------- Function ----------------

//Normal Function
function printdata(a:string,b:string){
    console.log(`Hello, ${a} ${b}`)
}
printdata("Dharmik" ,"Kachhadiya") // Hello, Dharmik Kachhadiya

//Arrow Function
let arrowfun= (a:string,b:string)=>{
    console.log(`Hello, ${a} ${b}`) 
}
arrowfun("MEET" ,"THUMMAR") //Hello, MEET THUMMAR

//Return type defind
const arrowfun1= (a:string,b:number):string=>{
    return `Hello, ${a} Your age ${b} ?`
}
console.log(arrowfun1("MEET",29))  //Hello, MEET Your age 29 ?

//palindrome number,
const palindrome=(a:string):boolean=>{
    let peli= a.split("").reverse().join("")
    return peli===a;    
}
console.log(palindrome("12321")); //true



//---------------- Type Annotation  ----------------
//Data Type Mention developer
let myname1:String="dharmik";


//---------------- Type Inference ----------------

//TS automatic data type defind 
let myname="dharmik";


// calculate area 
function areacal(a:number,b:number){
    return a*b;
}
const leng:number=2;
const width:number=5;
console.log(areacal(leng,width)); //10;



//----------------  Optional and Default Parameters  ----------------

// Default
const deful = (a:string,b:string="Kachhadiya"):string=>{
    return `WelCome to prepelious ${a} ${b}`;
}
console.log(deful("Dharmik"));
//output: WelCome to prepelious Dharmik Kachhadiya

// case:1
// const deful = (a: number = 12, b: string): string => {
//     return `Welcome to Propelious ${a} ${b}`;
// }
// console.log(deful(undefined, "Kachhadiya"));
//output: Welcome to Propelious 12 Kachhadiya


//Optional (b?)
function Optional(a:string,b?:number){
    if(b){
        return `Welcome to Propelious ${a} I think Your age ${b}?`;
    }
    else{
         return `Welcome to Propelious ${a}`;
    }
}
console.log(Optional("Dharmik")); //Welcome to Propelious Dharmik
console.log(Optional("Dharmik",21)); //Welcome to Propelious Dharmik I think Your age 21?



//---------------- Array ----------------

//using array consuctor
const ar:number[]=new Array(1,2,3,4,5,6)
console.log(ar); //[ 1, 2, 3, 4, 5, 6 ]
console.log(typeof ar) //object

//array of method
const ar1:string[]=Array.of("Dharmik", "Kachhadiya")
console.log(ar1[1]); //Kachhadiya

// Arrays 
let arr:number[]=[1,2,3]; 
console.log(typeof arr) //object
arr[4]=567;
console.log(arr);  //[ 1, 2, 3, <1 empty item>, 567 ]

// Find max Number in array
function maxnum(arr: number[]): number | undefined {
  const sortedArray = arr.sort((a, b) => a - b);
  return sortedArray[sortedArray.length - 1];
//   return Math.max(...arr)
}
let arr1: number[] = [1, 2, 3, 4, 5]; //5
console.log(maxnum(arr1));

// Find Avg value in array
function avgvalue(arr: number[]){
    let sum:number=0;
    for(let i=0;i<arr.length;i++){
        sum=sum+arr[i];
    }
    return Math.ceil(sum/arr.length);
}
let arr2: number[] = [1, 2, 3, 4, 5];
console.log(avgvalue(arr2)); //3


//---------------- Methods and Iterations ----------------

//Methods
var fruit:string[]=["apple","banana"]
//Push
fruit.push("kiwi")
console.log(fruit); //[ 'apple', 'banana', 'kiwi' ]
//Pop
fruit.pop()
console.log(fruit); //[ 'apple', 'banana']

//Display
//For-Loop -------------
for(let i=0;i<fruit.length;i++){
    console.log(`${i+1}. ${fruit[i]}`);
}
// output:
// 1. apple
// 2. banana

//For of -------------
for(const i of fruit){
    console.log(i)
}
// output:
// apple
// banana

//For-Each -------------
fruit.forEach((a:string)=>{console.log(a)})
// output:
// apple
// banana


//----------------  Array Map and Filter Methods ----------------

//Map
var numbers=[1,2,3,4,5];
var resultNumbers = numbers.map((num:number)=> num*2 );
console.log(resultNumbers); // [ 2, 4, 6, 8, 10 ]
//Filter
var filt=numbers.filter((num:number)=>{return num%2==0});
console.log(filt); // [ 2, 4 ]
//Find
var findValue = numbers.find((num:number) => num === 2);
console.log(findValue); // 2
//Some
var somevalue = numbers.some((num:number) => num > 2);
console.log(somevalue); // true
//Every
var somevalue = numbers.every((num:number) => num > 2);
console.log(somevalue); // false

//Number to String
var stringconvert=numbers.toString()
console.log(typeof stringconvert) //string
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

const emp:{
    name:string;
    age:number;
    isStudent:Boolean;    
    address:{city:string,state:string};
}={
    name:"Dharmik",
    age:27,
    isStudent:false,
    address:{
        city:"surat",
        state:"Gujarat"
    }
}
console.log(emp.address.city) //surat
emp.address.city="mumbai";
console.log(emp.address.city) // mumbai



//---------------- Type Aliases ----------------

type Person={
    name:string;
    age:number;
    isStudent:Boolean;    
    address:{city:string,state:string};
}

const person:Person={
    name:"Dharmik",
    age:27,
    isStudent:false,
    address:{
        city:"surat",
        state:"Gujarat"
    }
}
console.log(person.address.city) //surat
person.address.city="mumbai";
console.log(person.address.city) // mumbai


const person2:Person={
    name:"Dharmik",
    age:27,
    isStudent:false,
    address:{
        city:"surat",
        state:"Gujarat"
    }
}
console.log(person.address.city) //surat
person.address.city="mumbai";
console.log(person.address.city) // mumbai


//ex-2

type check={
    laptop:String;
    price:number;
    qun:number;
}

let shop:check={
    laptop:"Dell",
    price:210000,
    qun:5,
}

const calculate_qun=(shop:check)=>{
    return `${shop.laptop} is available, total Quentity is ${shop.qun} and each laptop price is ${shop.price} `
}
console.log(calculate_qun(shop));
//output: Dell is available, total Quentity is 5 and each laptop price is 210000



//---------------- Function Call Signatures ----------------


type Student={
    name:string;
    age:number;
    gender?:string;
}

const studnet1={
    name:"Dharmik",
    age:21,
}

const inroduction=(studnet1:Student):string=>{
    const{name,age}=studnet1;
    return `${name} ${age}`;
}

console.log(inroduction(studnet1)) //Dharmik 21



//---------------- Enums  ----------------

//identify client | admin 

//use1=>login=>normal user
//use2=>login=>admin user

enum Role{
    user="user",
    admin="admin"
}

type Logincheck={
    name:string;
    email:string;
    password:string;
    role:Role;
}

const emp1:Logincheck={
    name:"Dharmilk",
    email:"dharmik@gmail.com",
    password:"dk",
    role:Role.admin
}
const emp2:Logincheck={
    name:"Meet",
    email:"Meet@gmail.com",
    password:"dk",
    role:Role.user
}

const checkuser=(emp1:Logincheck):string=>{
    const{name,role}=emp1;
    return role==="admin"? ` ${name} is admin` :` ${name} is not admin `
}
console.log(checkuser(emp1));
//outout: Dharmilk is admin


//---------------- Tuples ----------------
//If fix value then use truple.
type PersonInfo=[string, number, boolean]

const per:PersonInfo=["dharmik",220,true]
// const per1:PersonInfo=["dharmik","kachhadiya",true]  //error show second index not match

const check_lincence=(emp:PersonInfo)=>{
    const[name,age,isdriveinglincence]=emp;
    return `${name} drive licence available: ${isdriveinglincence? "Yes" :"No"} and age is ${age}`
}
console.log(check_lincence(per));
//output: dharmik drive licence available: Yes and age is 220


//push new value
per.push("kachhadiya")
console.log(per);
//output: [ 'dharmik', 220, true, 'kachhadiya' ]

//if not need to push in this array then use readonly
// type PersonInfo= readonly [string, number, boolean]



//ex-2
type Online=readonly[string,number,number]
const online_shop:Online = ["T-shirt",25000,50]


const check_stock=(product:Online)=>{
    const[product_name,price,stock]=online_shop;
    return `Only ${stock} ${product_name} available just only ${stock}`
}
console.log(check_stock(online_shop));
//output: Only 50 T-shirt available just only 50


//---------------- Unions and Intersections ----------------

//Unions
const userinput=(value:string |number ):string | number=>{
    if(typeof value==="number"){
        return value*2;
    }
    else if(typeof value==="string"){
        return value.toUpperCase();
    }
    else{
        throw new Error()
    }
}
console.log(userinput(20)); //40
console.log(userinput("Dharmik")) //DHARMIK

//Intersections

type Per_life={
    name:string;
    age:number;
}
type Emp_life={
    emp_id:number;
    dep:string;
}

type Emp_details = Per_life & Emp_life;

const employee: Emp_details = {
    name: "Dharmik",
    age: 21,
    emp_id: 1111,
    dep: "SomeDepartment",
};
