class Car {  // Implemented by Minwoo Choo
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
      'mode': 0, // [0]: close, [1]: open, [2] dance, [3] stop
      'rot_angle': 6.28,  // open(6.28~4.71), close(4.71~6.28), dancing(4.66~5.20~5.33)
      'rot_speed': 0.01,
      'dancing_factor': 1,
      'direction': true
    }
  }

  turnOffAllLight() {
    this.head_light = {
      'left1': false,
      'left2': false,
      'left3': false,
      'right1': false,
      'right2': false,
      'right3': false
    }
    this.fog_light = {
      'left_yellow': false,
      'left_white': false,
      'right_yellow': false,
      'right_white': false
    }
  }

  turnOnAllLight() {
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
    const {mode, rot_angle, rot_speed, dancing_factor, direction} = this.door_wing;
    if (mode === 0) {  // door close
      if (rot_angle < 6.28) {
        this.door_wing.rot_angle += 0.01;
      }
    } else if (mode === 1) {  // door open
      if (rot_angle > 4.71) {
        this.door_wing.rot_angle -= 0.001;
      }
    } else if (mode === 2) {  // dancing
      // add dancing mode
      if (direction) {
        if (rot_angle > 4.66 * dancing_factor) {
          this.door_wing.rot_angle -= rot_speed;
        } else {
          this.door_wing.direction = !direction;
        }
      } else {
        if (rot_angle < 5.20 * dancing_factor) {
          this.door_wing.rot_angle += rot_speed;
        } else {
          this.door_wing.direction = !direction;
        }
      }
    }

    push();
    translate(-10, 70, 0);
    rotateZ(this.door_wing.rot_angle);
    translate(10, -70, 0);
    model(models.car_door_l);
    pop();

    push();
    translate(10, 70, 0);
    rotateZ(-this.door_wing.rot_angle);
    translate(-10, -70, 0);
    model(models.car_door_r);
    pop();
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