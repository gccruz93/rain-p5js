class Drop {
  constructor() {
    this.x = 0;
    this.y = 0;
    this.size = 0;
    this.thickness = 0;
    this.stroke = 0;
    this.mass = 0;
    this.velocity = 0;

    this.regen();
  }

  minimumSize() {
    return 1;
  }
  maximumSize() {
    return 6;
  }
  calcMass() {
    this.mass = this.size * this.thickness;
  }
  calcVelocity() {
    this.velocity = map(this.mass, this.minimumSize(), this.maximumSize() * 2, 7, 19, true);
  }

  regen() {
    this.size = random(this.minimumSize(), this.maximumSize() * 3);
    this.stroke = map(this.size, this.minimumSize(), this.maximumSize() * 3, 50, 200, true);
    this.thickness = this.stroke > 198 ? 2 : 1;

    this.calcMass();
    this.calcVelocity();
  }

  draw(wind) {
    stroke(this.stroke);
    strokeWeight(this.thickness);
    line(this.x, this.y, this.x + wind / 2, this.y + this.size);
  }
}