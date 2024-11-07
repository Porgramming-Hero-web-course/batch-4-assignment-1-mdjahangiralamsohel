//Problem-7: Create a TypeScript class Car with properties make, model, and year. Include a method getCarAge that returns the car's age based on the current year.

{
  class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
      this.make = make;
      this.model = model;
      this.year = year;
    }

    getCarAge(): number {
      const date = new Date();
      const currentYear = date.getFullYear();
      const CarAge = currentYear - this.year;
      return CarAge;
    }
  }

  const car = new Car("Honda", "Civic", 2018);
  console.log(car.getCarAge());
}
