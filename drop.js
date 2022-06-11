class drop {
  constructor() {
    this.leftRange = -width / 2;
    this.rightRange = width * 1.5;
    this.topRange = -height * 2;
    this.dropMinSize = 1;
    this.dropMaxSize = 6;

    this.reset();
  }

  setNormalDrop() {
    this.size = random(this.dropMinSize, this.dropMaxSize);
    this.thickness = 1;
    this.stroke = map(this.size, this.dropMinSize, this.dropMaxSize, 50, 200, true);
  }

  setBigDrop() {
    this.size = random(this.dropMinSize * 3, this.dropMaxSize * 3);
    this.thickness = 2;
    this.stroke = 200;
  }

  reset() {
    this.x = random(this.leftRange, this.rightRange);
    this.y = random(0, this.topRange);

    if (random() > 0.01) {
      this.setNormalDrop();
    }
    else this.setBigDrop();

    this.mass = this.size * this.thickness;
    this.speed = map(this.mass, this.dropMinSize, this.dropMaxSize * 2, 7, 19, true);
  }

  updatePos() {
    this.y += mouseIsPressed ? this.speed * 1.5 : this.speed;
    this.x += wind;
  }

  fixPos() {
    if (this.y > height) this.reset();
  }

  update() {
    this.updatePos();
    this.fixPos();
  }

  draw() {
    stroke(this.stroke);
    strokeWeight(this.thickness);
    line(this.x, this.y, this.x + wind, this.y + this.size);
  }
}