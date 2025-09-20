// console.log("We are learning object")

// person => name, age, salary, phone, aadhar

const person = {
    Name : "Suman",
    age : 100,
    salary : 9999999,
    phone : 754093,
    gmail : "suman@gmail.com"
}

// console.log(person.Name," ",person.gmail)
console.log(person)

const laptop = {
    Model_name : "Hp probook",
    ram :  "16gb",
    ssd : "1 TB",
    price : 1000000
}

// const laptop2 = {...laptop, ram:'20gb'} 

// console.log(laptop)
// console.log(laptop2)

const car = {
    brand:'toyota',
    model:'fortuner hybrid',
    price: 5000000,
    color:'black'
}

// console.log(car.brand, car.price, car.color)

const {brand,price,color,model} = car

// console.log(brand, price,color, model)