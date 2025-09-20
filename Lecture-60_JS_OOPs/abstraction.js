class CoffeeMachine{
    startMachine(){
        console.log("Starting the Machine...")
    }
    brewCoffee(){
        console.log("Brewing Coffee...")
    }
    makeCoffee(){ // abstraction method
        this.startMachine();
        this.brewCoffee();
        console.log('Coffee is Ready!')
    }}
const myMachine = new CoffeeMachine();
myMachine.makeCoffee();