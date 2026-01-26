// create an array,function,object and Print
//reverse number
//check number is palindrome
//fibonaci series
//largest element in array
// remove duplicate number in array
//final missing number in array

//String - reverse a string 
// count vowels in string 
// check palindrome in string 
//check prime number
//factorial number 
// fun to find even or odd
// fun to find sum of array


// activity 1
// const arr=[10,20,30]
// console.log(arr)

// function add (a,b){
//     return a+b;
//  }
// console.log(add(10,20))

// let obj={
//     name:"Shweta",
//     age:21
// }
// console.log(obj)

// // activity 2 -- reverse a number

// let num = 1234;
// let rev = 0;

// while (num > 0) {
//   rev = rev * 10 + (num % 10);
//   num = Math.floor(num / 10);
// }

// console.log(rev); 

// // activity 3 -->check the number is palindrome
// let num1 = 222;
// let original = num1;
// let rev1 = 0;

// while (num1 > 0) {
//   rev1 = rev1 * 10 + (num1 % 10);
//   num1 = Math.floor(num1 / 10);
// }

// console.log(rev1);

// if(rev1 ==original){
//     console.log("It is palindrome")
// }
// else{
//     console.log("It is not palindrome")
// }


//activity 4 ---> fibonacci series
let number=10;
let a=0
let b=2
console.log(a)
console.log(b)

for (let i =3;i<=number;i++){
    let c= a+b;
    console.log(c);
    a=b;
    b=c;
}

//activity 5 ---> largest element in array

