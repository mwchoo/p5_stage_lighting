function drawSpace() {
  push();
  translate(0, -500, 800);
  fill(100);

  // bottom
  //texture(textureMat.concrete);
  noStroke();

  // front-back
  push();
  translate(0, 0, -1500);
  texture(textures.backpanel);
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

function drawStand() {
  push();
  translate(0, 430, 0);
  noStroke();
  specularMaterial(60, 60, 60);
  shininess(40);
  cylinder(600, 60);

  translate(0, 40, 0);
  specularMaterial(40, 40, 40);
  shininess(100);
  box(3998, 60, 1800);
  pop();
}