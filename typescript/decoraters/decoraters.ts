// decorators.ts

// Decorator function for classes
function logClassCreation(target: Function) {
    // target is now treated as a class constructor
    console.log(`Class ${target.name} is created!`);
  }
  
  // Example class using the decorator
  @logClassCreation
  class Person {
    constructor(public name: string, public age: number) {}
  }
  
  // Creating an instance to trigger the decorator
  const person = new Person("John", 30);
  
  