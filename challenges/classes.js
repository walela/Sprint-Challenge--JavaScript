// 1. Copy and paste your prototype in here and refactor into class syntax.
(function() {
  class CuboidMaker {
    constructor(length, width, height) {
      this.length = length;
      this.width = width;
      this.height = height;
    }
    volume() {
      return this.length * this.width * this.height;
    }
    surfaceArea() {
      let [length, width, height] = [this.length, this.width, this.height];
      return 2 * (length * width + length * height + width * height);
    }
  }

  // Test your volume and surfaceArea methods by uncommenting the logs below:
  console.log(cuboid.volume()); // 100
  console.log(cuboid.surfaceArea()); // 130

  // Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.
  class CubeMaker extends CuboidMaker {
    constructor(side) {
      super(side, side, side);
    }
    volume() {
      return Math.pow(this.length, 3);
    }
    surfaceArea() {
      return 6 * this.length * this.length;
    }
  }

  let cube = new CubeMaker(10);
  console.log(`cube: `, JSON.stringify(cube));
  console.log(`cube volume: `, cube.volume()); // 1000
  console.log(`cube surface area: `, cube.surfaceArea());
})();
