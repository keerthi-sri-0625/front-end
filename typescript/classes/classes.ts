class Car {
    make: string;
    model: string;
  
    constructor(make: string, model: string) {
      this.make = make;
      this.model = model;
    }
  
    drive() {
      console.log(`${this.make} ${this.model} is driving!`);
    }
  }
  
  const car = new Car("Tesla", "Model 3");
  car.drive();
  