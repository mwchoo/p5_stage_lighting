function drawSpace() {
  push();
  translate(0, -500, 800);
  fill(150, 200, 100);

  // bottom
  //texture(textureMat.concrete);
  noStroke();

  // front-back
  push();
  translate(0, 0, -1500);
  plane(4000, 2000);
  pop();
  rotateX(HALF_PI);
  translate(0, 1000, -1000);
  plane(4000, 5000);

  // left
  rotateY(HALF_PI);
  translate(-1000, 0, -2000);
  plane(2000, 5000);

  // top
  rotateY(HALF_PI);
  translate(-2000, 0, -1000);
  plane(4000, 5000);

  // right
  rotateY(HALF_PI);
  translate(-1000, 0, -2000);
  plane(2000, 5000);
  pop();
}
