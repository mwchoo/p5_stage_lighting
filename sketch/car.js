function drawCar() {
  /* CAR AREA */
  push();

  // left head light
  pointLight(255, 255, 255, -320, 250, 390);  // set default
  //pointLight(255, 255, 255, -300, 260, 410);
  //pointLight(255, 255, 255, -300, 260, 410);
  /*
  -320, 250, 390
  -300, 260, 410
  -290, 270, 420 (-300, 260, 410)
   */
  //pointLight(255, 255, 255, -398, 199, 357);  // -516 -398 -360

  // right head light
  //pointLight(255, 255, 255, 0, 245, 520);
  pointLight(255, 255, 255, 20, 245, 510);  // set default
  //pointLight(255, 255, 255, 40, 250, 510);
  /*
  0, 245, 520
  20, 245, 520
  40, 257, 501 (30, 250, 510)
   */
  //pointLight(255, 255, 255, 30, 199, 539);  // -3 30 56

  // left fog light
  push();
  translate(40, 257, 501);
  //sphere(10);
  pop();
  pointLight(255, 255, 255, -308, 336, 430);

  // right fog light
  pointLight(255, 255, 255, 20, 345, 539);

  // left orange light
  pointLight(255, 127, 0, -334, 336, 400);
  //pointLight(255, 127, 0, -327, 336, 410);

  // right orange light
  pointLight(255, 127, 0, 54, 340, 520);

  noStroke();
  translate(0, 400, 0);
  rotateZ(PI);
  rotateY(0.3);
  scale(4);
  textureMode(NORMAL);
  //fill(20, 20, 20);
  specularMaterial(18, 15, 11);
  shininess(20);
  model(models.car_body);

  model(models.car_door_l);

  model(models.car_door_r);
  pop();
}