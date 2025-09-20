// console.log("Callback Function")

// let greet = (name, callback) =>{
//     console.log("Hello "+name);
//     callback();
// }

// let sayBye = () => console.log("Bye!")

// greet("Suman",sayBye)

// setTimeout(() => {
//   console.log("suman 1");
// }, 2000);

setTimeout(() => {
  console.log("Hello 1");
  setTimeout(() => {
    console.log("hello 2");
    setTimeout(() => {
      console.log("hello 3");
    }, 1000);
  }, 1000);
}, 1000);

// console.log("suman 2");
