//Blocking operations block the execution thread until the task is completed, whereas non-blocking operations allow the program to continue executing while the task runs in the background.
//blocking behaviour , step by step by excute -- sync Programming 
//set time out is async waits for two seconds --- async Programming 
//activity -- guess the o/p game
// Blocking Vs non Blocking - 2 e.g 
//Blocking examples:
console.log("Start");

function blockingTask() {
  for (let i = 0; i < 1e9; i++) {} // heavy loop
}

blockingTask();
console.log("End");
// -------------------------------------------------
const fs = require("fs");

console.log("Start");

const data = fs.readFileSync("test.txt", "utf8");
console.log(data);

console.log("End");
// --------------------------------------------------
// non Blocking examples:
console.log("Start");

setTimeout(() => {
  console.log("Async Task");
}, 2000);

console.log("End");
// ---------------------------------------------
const fs = require("fs");

console.log("Start");

fs.readFile("test.txt", "utf8", (err, data) => {
  console.log(data);
});

console.log("End");

//  where sync and async used in reallife(company level)?
// sync :
// 1) Startup / App Initialization 
// 2)Database Migrations

//  async:
// 1)Web APIs
// 2)Database Calls
// 3)File Upload / Download


// API fetch methods
// What is the fetch() method?
// The fetch() method is a built-in JavaScript function used to send HTTP requests and receive responses from a server or an API.
// It is mainly used to:
// Get data from a server
// Send data to a server
// Communicate between frontend and backend
// Key Features of fetch()
// It is asynchronous (non-blocking)
// It returns a Promise
// Works in browsers and modern Node.js
// Used widely in real-world web applications