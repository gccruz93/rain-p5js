let drops = [];
let wind = 0;
const max_drops = 500;
const max_wind_force = 6;
const min_wind_force = -max_wind_force;

function setup() {
  createCanvas(800, 600);
  for (let i = 0; i < max_drops; i++) drops.push(new drop());
}

function updateWind() {
  wind = map(mouseX, 0, width, min_wind_force, max_wind_force, true);
}

function draw() {
  background(30);
  updateWind();

  drops.forEach(drop => {
    drop.update();
    drop.draw();
  })
}
