class World {
  constructor() {
    this.drops = [];
    this.wind = 0;
    this.spawnRangeArea = {
      left: 0,
      right: 0,
      top: 0
    };
  }

  maxWindForce() {
    return 6;
  }
}