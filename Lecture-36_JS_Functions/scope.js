console.log("Function scope ")

let globalVar = 100

let display = () =>{
// let globalVar = 20
    console.log("inside the display function ",globalVar)
}

display();

console.log("Outside the display function ",globalVar)


if(true){
    let blockVar  = 15;
    console.log(blockVar)
}
console.log(blockVar)