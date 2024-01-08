// 01 to 07

var number = 10;
console.log(number/10);
console.log(number/20);

var greeting={hello:number};
console.log(greeting)


//ES6
//{arrow fun, let const, Template literals(`hello ${name}`), 
// Defulat value in function parameter,block scope, import modul} 

// Array Helper Method
// [forEach,map,filter,find,every,some,reduce]

// [1] ForEach ------------------------------------------------

var colors=["red","pink","green"];

for(var i=0;i<colors.length;i++){
    console.log(colors[i]);
}
console.log("-----------------------");

//for_in
for(i in colors){
    console.log(colors[i]);
}
console.log("-----------------------");

//forEach
colors.forEach(function(color){
    console.log(color);
    
})
console.log("-----------------------");


// exm-2 [ForEach]

//create an array of number
var numbers=[1,2,3,4,5,6];

//create a variable to hold the sum
var sum=0;

function adder(number){
    sum+=number;
}

//Loop over the array increamenting the sum variable
numbers.forEach(adder);

//print the sum variable
console.log(sum); //output:12

// [2] "Map" ------------------------------------------------

var num=[1,2,3];
var donum=[];

for(var i=0;i<num.length;i++){
    donum.push(num[i]*2);
}

var double=num.map(function(numb){
    return numb*2;
})
console.log(double); //output: [2,4,6]

//exp-2

var car =[
    {model:"honda",cost:"High"},
    {model:"Hyndai",cost:"low"},
]

var result = car.map(function(car){
    return car.cost;
})

console.log(result); //Output: (2) ['High', 'low']


// [3] "Filter" ------------------------------------------------


var product =[
    {name:"cucumber",type:"vegetable"},
    {name:"banana",type:"fruit"},
    {name:"orange",type:"fruit"},
    {name:"celery",type:"vegetable"},
]

var filterProduct=[];

// ForLoop method
for(var i=0;i<product.length;i++)
{
    if(product[i].type==="fruit"){
    filterProduct.push(product[i])
    }
}
console.log(filterProduct);
console.log("-------------");
//output: 
// (2) [{…}, {…}]
// 0: {name: 'banana', type: 'fruit'}
// 1: {name: 'orange', type: 'fruit'}
// length: 2[[Prototype]]: Array(0)

//filter method
var res=product.filter(function(name){  
    return name.type=="fruit"
})
console.log(res);
console.log("-------------");
//output: 
// (2) [{…}, {…}]
// 0: {name: 'banana', type: 'fruit'}
// 1: {name: 'orange', type: 'fruit'}
// length: 2[[Prototype]]: Array(0)


//exm-2
var product1 =[
    {name:"cucumber",type:"vegetable",quentity:5,price:110},
    {name:"banana",type:"fruit",quentity:0,price:100},
    {name:"orange",type:"fruit",quentity:5,price:110},
    {name:"celery",type:"vegetable",quentity:10,price:150},
];

var fil= product1.filter(function(pro){
    return pro.type==="vegetable" 
    && pro.price>100 
    && pro.quentity>5;
});
console.log(fil);
//output: {name: 'celery', type: 'vegetable', quentity: 10, price: 150}


//exm-2

var post={id:4,title:"New Post"};
var comment=[
    {postid:4,content:"awesome post"},
    {postid:2,content:"nice post"},
    {postid:4,content:"Good"},
]


function filterdata(){
    return comment.filter(function(com){
       return com.postid===post.id

    })}
var re=filterdata(post,comment);
console.log(re);
//output:
// 0: {postid: 4, content: 'awesome post'}
// 1: {postid: 4, content: 'Good'}


// [4] "Find" ------------------------------------------------
var boys=[
    {name:"Dharmik"},
    {name:"Nikunj"},
    {name:"Rushik"},
]

var a =boys.find(function(nam){
    return nam.name==="Dharmik";
})
console.log(a); //output: {name: 'Dharmik'}

//exmp-3

function abc(model){
    this.model=model;
}

var carss=[
    new abc("force"),
    new abc("hyndai"),
    new abc("honda"),
]

console.log(carss.find(function(nu){
    return nu.model==="force";
})) //abc {model: 'force'}


// [5] "every" ------------------------------------------------
// check all posibility
// [1,2,20,19] => 18 (false)
// [1,2,3,4] => 18 (false)
// [45,30,20,19] => 18 (true)

//if one condition match then return true,
//if more then one condition match then also return true,
//if not match any contion then return false

var computers=[
    {name:"Apple",ram:24},
    {name:"Dell",ram:4},
    {name:"HP",ram:32 },
];

var allcomputercanrunProgram=true;
var onlysumcomputercanrunProgram=false;
console.log(allcomputercanrunProgram);
console.log(onlysumcomputercanrunProgram);

// for(var i=0;i<computers.length;i++){
//     var compter=computers[i];
//     if(compter.ram<16){
//         allcomputercanrunProgram=false
//     }
//     else{
//         onlysumcomputercanrunProgram=true;
//     }
// }
// console.log("------")
// console.log(allcomputercanrunProgram);
// console.log(onlysumcomputercanrunProgram);
// console.log("+++++")

//every
console.log(computers.every(function(computer){
    return computer.ram>16;
}))
console.log("+++++")


// [7] "some" ------------------------------------------------

// check one match posibility then true 
// [1,2,20,19] => 18 (true)
// [1,2,3,4] => 18 (false)
// [45,30,20,19] => 18 (true)

//if one condition match then return true,
//if more then one condition match then also return true,
//if not match any contion then return false

//some
console.log(computers.some(function(computer){
    return computer.ram>16;
}))


// part-2

var names=[
    "dharmik",
    "nikunj",
    "rushik"
];

names.every(function(name){
    return name.length>4;
});   //false


names.some(function(name){
    return name.length>4;
});   //true

//part-4 
//login page and sign up page use "every" and "some" method
//for velidation
console.log("////////////")
function Field(value){
    this.value=value;
}
Field.prototype.validate=function(){
    return this.value.length>0;
}
var username=new Field("2cool ");
var password=new Field("my_password");
console.log(username.validate());  //false
console.log(password.validate());  //true

// mothod-2 (check all details)
var fields=[username,password];

var formisvalied=fields.every(function(Field1){
    return Field1.validate();
}) //True

if(formisvalied){
    //allow user to submit
}else{
    //Show an error submit
}

// [8] "Reduce" ------------------------------------------------
// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.
// The reduce() method does not execute the function for empty array elements.
// The reduce() method does not change the original array.

// array convert in single array
var num=[10,20,30];
var sum=0;

for(var i=0;i<num.length;i++){
    sum+=num[i];
}
console.log(sum); //output: 60

//reduce 
console.log(num.reduce(function(sum,num){
    return sum+num;
},0)) //output: 60
//0 is initial value 

console.log(num.reduce(function(sum,num){
    return sum+num;
},100)) //output: 160


// example-2

var primaryColors=[
    {color:'red'},
    {color:'yellow'},
    {color:'blue'},
];

var a=primaryColors.reduce(function(previous,primaryColors){
    previous.push(primaryColors.color);
    return previous; 
},[])
console.log(a); //output:(3) ['red', 'yellow', 'blue']


// example-3

// case:1 (true, false, !)
function checksyntax(string) {
    return !string.split("").reduce(function (previous1, char) {
        if(char ==="("){ return ++previous1};
        if(char===")"){ return --previous1};
        return previous1;
    }, 0);
  }
  
console.log(checksyntax("(())")); //output: true

// case:2 (not completed bracket)
function checksyntax(string) {
    return string.split("").reduce(function (previous1, char) {
        if(char ==="("){ return ++previous1};
        if(char===")"){ return --previous1};
        return previous1;
    }, 0);
  }
  
console.log(checksyntax("())")); //output: -1
  

// case:3 () =true )(= false
function checksyntax(string) {
    return !string.split("").reduce(function (previous1, char) {
        if(previous1<0){return previous1};
        if(char ==="("){ return ++previous1};
        if(char===")"){ return --previous1};
        return previous1;
    }, 0);
  }
  
console.log(checksyntax("())")); //output: false