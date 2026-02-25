//syntax:
// let mp = new Promise((resolve,reject)=>{
//  if(success=false){
//     resolve("data fetch successfull");
//  }
//  else
//     reject("data not found!!");
//  });

// mp.then((result)=>{
//     console.log(result)}).catch((Error)=>{console.log(Error)});

// activity :
// why promises is better than callback

// let promise = new pp((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log("Async Task Completed")
//         resolve();
//     },3000);
// });

// promise.then(()=>{
//     console.log("promise consumed");
// });
//example 2:
const promise = new pp((resolve,reject)=>{
    setTimeout(()=>{
        console.log("Async Task Completed")
        resolve({username:'js',id:23});
    })
});
promise.then((user)=>{
    console.log(user);
});

// activity:
// create 4 Promises Possible examples
//1) var declare true-- object show  false -- error
//2) async keyword use karun Promises or function use karun

