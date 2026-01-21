// const a=10;
//  a=12;
//  console.log(a);

//  let b=2;
//  var c=3;
// {
//     let b=20;
//     var c=30;
// }
//  console.log(b);
//  console.log(c);

// activity - 1 display student information 
let name="Shweta";
let roll_no=32;
let email="shweta@gmail.com";
console.log(  name, roll_no, email);
document.writeln(name,roll_no,email)

// activity 2 - number is even or odd

let num = 2;
if (num % 2 == 0){
    console.log("It is even number");
    document.writeln("It is even number")
}
else{
    console.log("It is odd number");
    document.writeln("It is odd number ")

}

//activity 3 - student is pass or fail

let marks=65;

if(marks>=40){
    console.log("Student is pass..")
    document.writeln("Student is pass..")
}
else{
    console.log("Student is Fail..")
    document.writeln("Student is Fail..")
}


// activity 4 - print 1 to 20 numbers

for (let i=1;i<=20;i++){
    console.log(i)
    document.writeln(i)
}


// activity 5 

let x=10;
y=x;
x=2001;
console.log(x,y)
document.writeln(x,y)