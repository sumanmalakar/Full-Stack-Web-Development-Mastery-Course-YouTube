class Vehicle{
    move(){
        console.log("The vehicle is moving...!")
    }
}
class Car extends Vehicle{
    honk(){
        console.log("Beep Beep...")
    }
}

const mycar = new Car();
mycar.move();
mycar.honk();