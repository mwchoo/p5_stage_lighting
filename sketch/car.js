class Car {
  constructor(car_size, car_color) {
    this.car_size = car_size;
    this.car_color = car_color;
    this.head_light = {
      'left1': true, // default head light
      'left2': false,
      'left3': false,
      'right1': false,
      'right2': true, // default head light
      'right3': false
    }
    this.fog_light = {
      'left_yellow': true,
      'left_white': true,
      'right_yellow': true,
      'right_white': true
    }
    this.door_wing = {
      'mode': 0, // [0]: close, [1]: open, [2] dance
      'rot_angle': 0,
      'rot_speed': 0.5,
      'dancing_factor': 1
    }
  }

  handleHeadLight() {
    if (this.head_light.left1) {
      pointLight(255, 255, 255, -320, 250, 390);
    }
    if (this.head_light.left2) {
      pointLight(255, 255, 255, -300, 260, 410);
    }
    if (this.head_light.left3) {
      pointLight(255, 255, 255, -300, 260, 410);
    }
    if (this.head_light.right1) {
      pointLight(255, 255, 255, 0, 245, 520);
    }
    if (this.head_light.right2) {
      pointLight(255, 255, 255, 20, 245, 510);
    }
    if (this.head_light.right3) {
      pointLight(255, 255, 255, 40, 250, 510);
    }
  }

  handleFogLight() {
    if (this.fog_light.left_yellow) {
      pointLight(255, 127, 0, -334, 336, 400);
    }
    if (this.fog_light.left_white) {
      pointLight(255, 255, 255, -308, 336, 430);
    }
    if (this.fog_light.right_yellow) {
      pointLight(255, 127, 0, 54, 340, 520);
    }
    if (this.fog_light.right_white) {
      pointLight(255, 255, 255, 20, 345, 539);
    }
  }

  handleDoorWing() {
    const {mode, rot_angle} = this.door_wing;
    if (mode === 0) {  // door close
      if (rot_angle > 0) {
        this.door_wing.rot_angle -= 0.2;
      }
    } else if (mode === 1) {  // door open
      if (rot_angle < 90) {
        this.door_wing.rot_angle += 0.2;
      }
    } else if (mode === 2) {  // dancing
      // add dancing mode
    }

    model(models.car_door_l);

    model(models.car_door_r);
  }

  display() {
    this.handleHeadLight();
    this.handleFogLight();

    push();
    noStroke();
    translate(0, 400, 0);
    rotateZ(PI);
    rotateY(0.3);
    scale(4);
    textureMode(NORMAL);
    specularMaterial(18, 15, 11);
    shininess(20);
    model(models.car_body);

    this.handleDoorWing();
    pop();
  }
}

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
  /*
  push();
  translate(40, 257, 501);
  //sphere(10);
  pop();
   */
  pointLight(255, 255, 255, -308, 336, 430);

  // right fog light
  pointLight(255, 255, 255, 20, 345, 539);

  // left orange light
  pointLight(255, 127, 0, -334, 336, 400);

  // right orange light
  pointLight(255, 127, 0, 54, 340, 520);

  noStroke();
  translate(0, 400, 0);
  rotateZ(PI);
  rotateY(0.3);
  scale(4);
  textureMode(NORMAL);
  specularMaterial(18, 15, 11);
  shininess(20);
  model(models.car_body);

  model(models.car_door_l);

  model(models.car_door_r);
  pop();
}