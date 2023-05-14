const world = new World();
const MAX_DROPS = 500;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < MAX_DROPS; i++) {
    const drop = new Drop();
    drop.x = random(world.spawnRangeArea.left, world.spawnRangeArea.right);
    drop.y = random(0, world.spawnRangeArea.top);
    world.drops.push(drop)
  };
}

function updateWind() {
  world.wind = map(mouseX, 0, width, -world.maxWindForce(), world.maxWindForce(), true);
}

function updateSpawnRangeArea() {
  world.spawnRangeArea.left = -width / 2;
  world.spawnRangeArea.right = width * 1.5;
  world.spawnRangeArea.top = -height * 2;
}

function draw() {
  if (keyIsDown(32)) return;

  /**
   * Updates
   */
  updateWind();
  updateSpawnRangeArea();

  /**
   * Draws
   */
  background(30);
  world.drops.forEach(drop => {
    if (mouseIsPressed && mouseButton === LEFT && drop.size > 3) {
      drop.y += drop.velocity * 1.5;
    } else {
      drop.y += drop.velocity;
    }
    drop.x += world.wind;

    drop.draw(world.wind);

    if (drop.y > height) {
      drop.x = random(world.spawnRangeArea.left, world.spawnRangeArea.right);
      drop.y = random(0, world.spawnRangeArea.top);
      drop.regen();
    }
  })
}
