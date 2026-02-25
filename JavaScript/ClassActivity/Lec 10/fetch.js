// fetch('url')//syntax
//e.g:
fetch("https://jsonplaceholder.typiCode.com/users")
.then((response)=>{return response.json();})
.then((data)=>{console.log(data);})
.catch((error)=>{console.log(error);});

// async await example with fetch method
//fetch user display names in html list
// fetch post show only first 5 
// cretae a fake promise mannully resolve : 3 sec
//reject after 3 sec
// what is promise in js, promise states
//differnece between fetch and callback
// what is fetch 
// what fetch return 
// why do we use response.json
//different between then and catch 
// async and await
// what is Promise chaining 