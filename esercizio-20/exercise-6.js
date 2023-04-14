class Square {
  constructor(side) {
    this.side = side;
  }

}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(value) {
  if (value instanceof Square)  {
    return value.side * value.side;
  } else if (value instanceof Rectangle) {
    return value.width * value.height
  } 
  else if (value instanceof Circle) {
    return Math.PI * value.radius * value.radius
  } else console.log('non è calcolabile')
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));