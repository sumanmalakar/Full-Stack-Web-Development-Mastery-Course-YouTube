console.log("We are learning Arrow Function")

// function print(){
//     console.log("Suman")

// }

// print()

let print = () => console.log("Suman")

print()

let sum = (a,b) => console.log('sum = ',a+b);

sum(10,20)

let mul = (a,b) => a*b;

console.log("Multiply = ",mul(20,30))

let div = (a,b) =>{
    console.log("ram")
    return a/b;
}

console.log("div =  ",div(100,20))