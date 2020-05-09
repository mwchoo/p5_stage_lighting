/*
2020-1 Computer Grapics :: PROJECT 6 - STAGE LIGHTING
20141150 Minwoo Choo

Inspired by dancing Tesla Model X

< MANUAL >
mouseX, Y: control the position of the light
ARROW_UP Key: go forward
ARROW_DOWN Key: go backward
ARROW_LEFT Key: move the camera to the left
ARROW_RIGHT Key: move the camera to the right

P Key: screen shot
*/

let scene = 0;
let sounds = {
  'bgm': undefined,
  'walk': undefined,
  'car_starting': undefined,
  'car_drive': undefined
}
let models = {
  'car_body': undefined,
  'car_door': undefined,
  'car_trunk': undefined
}
let textures = {
  'backpanel': undefined,
  'leftpanel': undefined,
  'rightpanel': undefined,
  'nightsky': undefined
}
let keymap;

let font_georgia;
let cgSplashName;

//let scene_timer;
let rot = 0;

let X = 0;
let Y = 0;
let Z = 1700;
let centerX = 0;
let centerY = 0;
let centerZ = 0;
let h = 20;

function preload() {
  font_georgia = loadFont('assets/georgia.ttf');
  models.car_body = loadModel('assets/car_body2.obj');
  textures.backpanel = loadImage('assets/city.jpg');
  textures.leftpanel = loadImage('assets/city_l.jpg');
  textures.rightpanel = loadImage('assets/city_r.jpg');
  textures.nightsky = loadImage('assets/nightsky.jpg');
  //sounds.bgm = loadSound('assets/bgm.mp3');
  sounds.walk = loadSound('assets/walk.mp3');
  // keymap = loadImage('assets/keymap.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 255, 255, 255, 1);
  /*
  gl = this._renderer.GL;
  gl.disable(gl.DEPTH_TEST);*/

  cgSplashName = new Text("Car Show!", 100, -300, 0, 0, color(195, 56, 51, 1), font_georgia);
  //scene_timer = new Timer(3000, handleScene);
}

function draw() {
  background(0);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;

  // scene control
  if (scene === 0) {
    //drawSplash();
    //return;
  }

  // show keymap
  //image(keymap, -1000, -500);

  // light setting
  pointLight(255, 255, 255, locX, locY, windowHeight / 2);
  ambientLight(200);

  // bgm control
  /*
  if (!sounds.bgm.isPlaying()) {
    sounds.bgm.play();
  }
   */

  // camera setting
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

  drawSpace();
  drawStand();
  handleKeyDown();

  /* CAR AREA */
  push();
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
  pop();

  //rot += 0.25;
}

function handleKeyDown() {
  if (keyIsDown(UP_ARROW)) {
    // go forward
    Z -= 10;
    Y = cos(Z / 50) * 60 - 100;  // walk effect
  } else if (keyIsDown(DOWN_ARROW)) {
    // go backward
    Z += 10;
    Y = cos(Z / 50) * 60 - 100;  // walk effect
  }
  if (keyIsDown(LEFT_ARROW)) {
    // turn your head to the left
    X -= 20;
  } else if (keyIsDown(RIGHT_ARROW)) {
    // turn your head to the right
    X += 20;
  }
}

function mouseDragged() {
  //rot += 0.1;
}

function keyPressed() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (!sounds.walk.isPlaying()) {
      sounds.walk.play();
    }
  }
  if (keyCode === 80) {
    saveImage();
  }
}

function keyReleased() {
  if (keyCode === UP_ARROW || keyCode === DOWN_ARROW || keyCode === LEFT_ARROW || keyCode === RIGHT_ARROW) {
    if (sounds.walk.isPlaying()) {
      sounds.walk.stop();
    }
  }
}

function saveImage() {
  saveCanvas("image", "jpg");
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}