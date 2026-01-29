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
const arrv=[10,20,30]
console.log(arrv);
document.writeln(arrv);

function add (a,b){
    return a+b;
 }
console.log(add(10,20))
document.writeln(add(10,20))

let obj={
    name:"Shweta",
    age:21
}
console.log(obj)
document.writeln(obj)

// // activity 2 -- reverse a number

let num = 1234;
let rev = 0;

while (num > 0) {
  rev = rev * 10 + (num % 10);
  num = Math.floor(num / 10);
}

console.log(rev); 
document.writeln(rev);

// // activity 3 -->check the number is palindrome
let num1 = 222;
let original = num1;
let rev1 = 0;

while (num1 > 0) {
  rev1 = rev1 * 10 + (num1 % 10);
  num1 = Math.floor(num1 / 10);
}

console.log(rev1);
document.writeln(rev1);

if(rev1 ==original){
    console.log("It is palindrome")
    document.writeln("It is palindrome");
}
else{
    console.log("It is not palindrome")
    document.writeln("It is not Palindrome");
}


// activity 4 ---> fibonacci series
let number=10;
let a=0
let b=2
console.log(a)
console.log(b)

for (let i =3;i<=number;i++){
    let c= a+b;
    console.log(c);
    document.writeln(c);
    a=b;
    b=c;
}

//activity 5 ---> largest element in array
let arr=[10,20,30,40,50];
let max=arr[0];
for(let i=1; i<arr.length; i++){
    if(arr[i]>max)
        max=arr[i];
}
console.log( "largest element in array is : ",max);
document.writeln("largest element in array is : ",max);

//Activity 6  ---> Duplicate elements in an array
let arr1 = [1, 2, 3, 2, 4, 1, 5];
let unique = [];

for (let i = 0; i < arr1.length; i++) {
  let isDuplicate = false;

  for (let j = 0; j < unique.length; j++) {
    if (arr1[i] === unique[j]) {
      isDuplicate = true;
      break;
    }
  }

  if (!isDuplicate) {
    unique.push(arr1[i]);
  }
}

console.log(unique);
document.writeln(unique);
 // [1, 2, 3, 4, 5]

//activity 7 --> final missing number in array
let arr2 = [1, 2, 4, 5];  // missing number is 3
let n = arr2.length + 1;

let expectedSum = (n * (n + 1)) / 2;
let actualSum = 0;

for (let i = 0; i < arr2.length; i++) {
  actualSum += arr2[i];
}

let missingNumber = expectedSum - actualSum;
console.log("Missing number:", missingNumber);
document.writeln("Missing number:", missingNumber)

//activity 8 ---->Reverse a string 
function reverseString(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }
  console.log(rev);
  document.writeln(rev);
}

reverseString("hello"); // olleh


//activity 9 --> count vowels in string 
function countVowels(str) {
  let count = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    if ("aeiou".includes(str[i])) {
      count++;
    }
  }
  console.log(count);
  document.writeln(count);
}

countVowels("Education"); // 5

//activity 10 ---> check Palindrome String 
function checkPalindrome(str) {
  let rev = "";
  for (let i = str.length - 1; i >= 0; i--) {
    rev += str[i];
  }

  if (str === rev) {
    console.log("Palindrome");
    document.writeln("Palindrome");
  } else {
    console.log("Not Palindrome");
    document.writeln("Not Palindrome")
  }
}

checkPalindrome("madam");


//activity 11 -->check prime number
function isPrime(num) {
  if (num <= 1) {
    console.log("Not Prime");
    document.writeln("Not Prime");
    return;
  }

  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      console.log("Not Prime");
      document.writeln("Not Prime");
      return;
    }
  }
  console.log("Prime");
    document.writeln("Prime");
}

isPrime(7);

//activity 12 -->factorial number 
function factorial(num) {
  let fact = 1;
  for (let i = 1; i <= num; i++) {
    fact *= i;
  }
  console.log(fact);
  document.writeln(fact);
}

factorial(5); // 120


//activity 13 --> fun to find even or odd
function evenOrOdd(num) {
  if (num % 2 === 0) {
    console.log("Even");
    document.writeln("Even");
  } else {
    console.log("Odd");
    document.writeln("Odd");
  }
}

evenOrOdd(10);

//activity 14 --->fun to find sum of array 
function sumOfArray(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  console.log(sum);
  document.writeln(sum);
}

sumOfArray([1, 2, 3, 4, 5]); // 15

