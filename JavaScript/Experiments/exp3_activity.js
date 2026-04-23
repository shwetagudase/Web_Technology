//activity 1--difference between arrow function and simple function
//-----simple function--------
// function add(a,b){
//     return a+b;
// }
// console.log(add(10,20));
// //-----arrow function---------
// // it is shorter and cleaner
// const add=(a,b)=>a+b;
// console.log(add(10,20));

//activity 2---what is use of this keyword
// In simple function
function  stud(name){
    this.name=name;
    return name;
}
console.log(stud("shweta"));// this keyword is used to refer to the current object that is calling the function
//In arrow function
const studs=(name)=>console.log(this.name=name);
studs("Sasaa");
//activity 3--why we not use this keyword in simple function
//-- this does not point to a specific object.
// It refers to the global object or becomes undefined in strict mode .. so this is not reliable in simple function
function show(){
    console.log(this);//undefined
}
show();

function add(){
    this.total=100;
}
add()
console.log(total);//global variable

//activity 4--w.a code for arrow funtion with 3 examples
const greet=()=>console.log("Hello World");
greet();

//activity 5--switch case in js
let day = 3;

switch(day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  default:
    console.log("Invalid Day");
}

//activity 6---how to use truthy falsy, key  values with eg 
//falsy:
let name = "";

if(name) {
  console.log("Name is present");
} else {
  console.log("Name is empty");
}
//truthy:
let marks = 50;

if(marks) {
  console.log("Marks available");
}
// thruthy falsy with key Values:
let user = {
  name: "sasa",
  email: ""
};

if(user.email) {
  console.log("Email exists");
} else {
  console.log("Email missing");
}

//activity 7---how to use ternary operator in js
let age = 20;

let result = (age >= 18) ? "Eligible to vote" : "Not eligible";
console.log(result);

//activity 8--- how to use loops in array with eg 
//For Loop:
let fruits = ["Apple", "Banana", "Mango"];

for(let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

// Do-While Loop:
let animals = ["Dog", "Cat"];

let j = 0;
do {
  console.log(animals[j]);
  j++;
} while(j < animals.length);


// While Loop:
let cities = ["Pune", "Mumbai", "Delhi"];
let k = 0;

while(k < cities.length) {
  console.log(cities[k]);
  k++;
}

//For of Loop:
let colors = ["Red", "Blue", "Green"];

for(let color of colors) {
  console.log(color);
}

//For Each Loop:
let numbers = [10, 20, 30];

numbers.forEach(function(num) {
  console.log(num);
});

//activity 9---diff betn for off and for in
//For Of: // Used to iterate over values
// Mostly used with arrays and strings
// Gives direct access to elements
let fruit = ["Apple", "Banana", "Mango"];

for (let frui of fruit) {
  console.log(frui);
}

//For In: Used to iterate over keys or indexes
// Mostly used with objects
// Gives property names, not values directly
let student = {
  name: "Shweta",
  age: 21,
  branch: "AIML"
};

for (let key in student) {
  console.log(key);
}

//activity 10---how to use filter and map fun in js with eg - 3
//map() and filter() are array methods used to process array elements in a clean and modern way.
