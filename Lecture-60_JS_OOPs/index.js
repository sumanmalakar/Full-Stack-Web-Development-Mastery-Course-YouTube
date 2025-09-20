class Car {
  #brand;
  model;

//   constructor(brand, model) {
//     this.brand = brand;
//     this.model = model;
//   }

  displayInfo() {
    console.log(`Car Brand = ${this.brand} and Model = ${this.model}`);
  }
}

// creating object
// const c1 = new Car("Toyota", "Fortuner");
const c1 = new Car();
c1.#brand = "toyota"
c1.displayInfo();

// const c2 = new Car("BMW", "M - Series");
// c2.displayInfo();

// const c3 = new Car("Ford", "Defender");
// c3.displayInfo();
