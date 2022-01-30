function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(0);
  circle(width / 2, height / 2, map(sin(millis() * 0.003), -1, 1, 100, 200));
}
