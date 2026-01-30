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
//activity 6---how to use truthy falsy, key  values with eg 
//activity 7---how to use ternary operator in js
//activity 8--- how to use loops in array with eg 
//activity 9---diff betn for off and for in
//activity 10---how to use filter and map fun in js with eg - 3

