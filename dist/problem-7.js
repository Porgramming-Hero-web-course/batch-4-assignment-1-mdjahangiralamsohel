"use strict";
{
    class Car {
        constructor(make, model, year) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge() {
            const date = new Date();
            const currentYear = date.getFullYear();
            const CarAge = currentYear - this.year;
            return CarAge;
        }
    }
    const car = new Car("Honda", "Civic", 2018);
    console.log(car.getCarAge());
}
