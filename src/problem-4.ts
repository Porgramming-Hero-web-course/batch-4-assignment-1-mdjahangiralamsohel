// Probelm-4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

{
  type Circle = {
    shape: "circle";
    radius: number;
  };

  type Rectangle = {
    shape: "rectangle";
    width: number;
    height: number;
  };

  const calculateShapeArea = (shape: Circle | Rectangle): number => {
    if (shape.shape === "circle") {
      // Area of circle = πr2
      return Math.PI * shape.radius ** 2;
    } else {
      // Area of rectangle =  width * height
      return shape.width * shape.height;
    }
  };

  const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
  const rectangleArea = calculateShapeArea({
    shape: "rectangle",
    width: 4,
    height: 6,
  });

  console.log(circleArea);
  console.log(rectangleArea);
}
