var Car = /** @class */ (function () {
    function Car(make, model) {
        this.make = make;
        this.model = model;
    }
    Car.prototype.drive = function () {
        console.log("".concat(this.make, " ").concat(this.model, " is driving!"));
    };
    return Car;
}());
var car = new Car("Tesla", "Model 3");
car.drive();
