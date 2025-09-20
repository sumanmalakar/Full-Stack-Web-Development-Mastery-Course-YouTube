// console.log("Sync & Async JS")

// Synchronous

console.log("Start 1")
console.log("Start 2")
console.log("Start 3")

// ram => 11 ghar ,11:30
// shyaam => 11:10 ghar => 11:20 ,11:30
// mohan => 11:25 ghar => 11:27 ,11:30

// Async
console.log("Ram")

 setTimeout(() => {
    console.log("Shyaam")
 }, 2000);

 console.log("mohan")
