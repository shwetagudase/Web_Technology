// let myArr=[10,20,30,40]
// console.log(myArr)

// let arr=['shweta','amruta','sakshi']
// console.log(typeof(arr))
// console.log(arr)

const Myarr=new Array(0,1,2)
console.log(Myarr[1])


// array methods
// console.log(Myarr.push(10))
// console.log(Myarr) // adding a new element
// console.log(Myarr.pop())
// console.log(Myarr) // remove last value
// Myarr.unshift(9) //  it shifts all elemts and adds a new element a first position
// console.log(Myarr) 
// Myarr.shift()
// console.log(Myarr)

console.log(Myarr.includes(1))

console.log(Myarr.indexOf(2))

//slice and split use
console.log(Myarr.slice(0,2))

const name0=["Bheem","Chutki","Doreamon"]
const name1=["Sinchan","Oggy"]
// name0.push(name1);
console.log(name0.push(name1))
console.log(name0)
console.log(name0[2])
console.log(name0[2][0])

// array concat
const sasa=name0.concat(name1)
console.log(sasa)
// nested array 
const ar=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
console.log(ar)
const ar1=ar.flat(Infinity);
console.log(ar1)
const ar2=ar.flat(1)
console.log(ar2)

// how should nested array should be flatenend dfault value is 1 
// flatens all levels no matters 
// flat doesnot change original array it returns new array useful when working with nested data 
//datascripting using this methods
console.log(Array.isArray("Shweta"))
// check given value is array or not here we used string so that gives the output as false 
console.log(Array.isArray(name0)) // here we used array so output is true
console.log(Array.from("Shweta"))
// converts an iterabale objs and  like string ,set and map into an array 
console.log(Array.from({name:"Shweta"}))
console.log(Object.keys({name:"Shweta"}))
let sc1=100;
let sc2=200;
let sc3=300;
console.log(Array.of(sc1,sc2,sc3))// create new array from given value no matters how many 
 //converts value //array of
 //converts iterator // arry from

