/*
2020-1 Computer Grapics :: PROJECT 6 - STAGE LIGHTING
20141150 Minwoo Choo

Inspired by easter egg of Tesla Model X (Lighting Show)

< MANUAL >
ARROW_UP Key: go forward
ARROW_DOWN Key: go backward
ARROW_LEFT Key: move the camera to the left
ARROW_RIGHT Key: move the camera to the right

P Key: screen shot
*/

let scene = 0;
let sounds = {
  'bgm': undefined,
  'walk': undefined
}
let models = {
  'car_body': undefined,
  'car_door_l': undefined,
  'car_door_r': undefined,
  'car_trunk': undefined
}
let textures = {
  'backpanel': undefined,
  'leftpanel': undefined,
  'rightpanel': undefined,
  'nightsky': undefined
}
let car;
//let keymap;

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

let spotPos, spotDir, modelPos;
let mrot, srot;
let isPlayed = false;

function preload() {
  font_georgia = loadFont('assets/georgia.ttf');
  models.car_body = loadModel('assets/car_body.obj');
  models.car_door_l = loadModel('assets/car_door_l.obj');
  models.car_door_r = loadModel('assets/car_door_r.obj');
  textures.backpanel = loadImage('assets/city.jpg');
  textures.leftpanel = loadImage('assets/city_l.jpg');
  textures.rightpanel = loadImage('assets/city_r.jpg');
  textures.nightsky = loadImage('assets/nightsky.jpg');
  sounds.bgm = loadSound('assets/bgm.mp3');
  sounds.walk = loadSound('assets/walk.mp3');
  // keymap = loadImage('assets/keymap.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  colorMode(RGB, 255, 255, 255, 1);
  /*
  gl = this._renderer.GL;
  gl.disable(gl.DEPTH_TEST);*/

  cgSplashName = new Text("Car Show!", 100, -300, 0, 0, color(255, 255, 255, 1), font_georgia);
  car = new Car(4, color(18, 15, 11));
  //scene_timer = new Timer(3000, handleScene);

  spotPos = new p5.Vector(-1000, 2000, 200);
  modelPos = new p5.Vector(-200, 1000, 0);
  mrot = 0;
  srot = 0;

  //sounds.bgm.play();
}

function draw() {
  background(0);

  // scene control
  if (scene === 0) {
    drawSplash();
    return;
  }

  // light setting
  lights();
  if (!sounds.bgm.isPlaying()) {  // TURN OFF WHEN THE SHOW IS BEGINNING
    pointLight(100, 100, 100, sin(srot) * 4000, -1300, cos(srot) * 100 - 100);
  }

  srot += 0.01;
  spotPos.x = 200 * cos(srot);
  spotPos.y = 200 * sin(srot);
  spotDir = p5.Vector.sub(modelPos, spotPos);
  spotLight(0, 100, 100, spotPos, spotDir, radians(90), 1);

  // camera setting
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);

  drawSpace();
  drawStage();
  push();
  if (!sounds.bgm.isPlaying() && !isPlayed) {
    if (rot === 0) {
      car.turnOffAllLight();
    }
    if (rot > 2 * PI) {
      getAudioContext().resume();
      sounds.bgm.play();
      isPlayed = true;
    }
    rotateY(rot);
    rot += 0.02;
  }
  drawStand();
  //drawElecDisplay();
  car.display();
  pop();

  if (sounds.bgm.isPlaying()) {
    handleDancingCar();
  }
  handleKeyDown();
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