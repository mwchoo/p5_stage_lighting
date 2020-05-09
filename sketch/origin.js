let uy, uz, fy, fz;
function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  slider_uy = createSlider(-90, 90, 0);
  slider_uy.position(10, 10);
  slider_uz = createSlider(-90, 90, 0);
  slider_uz.position(10, 30);
  slider_fy = createSlider(-90, 90, 0);
  slider_fy.position(10, 50);
  slider_fz = createSlider(-90, 90, 0);
  slider_fz.position(10, 70);
}
let upper_yrot = 0;
let upper_zrot = 0;
let forearm_yrot = 0;
let forearm_zrot = 0;
function draw() {
  background(255);
  lights();
  upper_yrot = radians(slider_uy.value());
  upper_zrot = radians(slider_uz.value());
  forearm_yrot = radians(slider_fy.value());
  forearm_zrot = radians(slider_fz.value());
// rotate entire scene to make it visible
  rotateX(radians(70));
// draw a grid on xy plane
  noStroke();
  fill(180);
  push();
  plane(1000); // plane is drawn on xy plane
  pop();
  push();
// upper arm
  fill(255, 0, 255); // magenta
  transformAndRnderRobotArm(upper_yrot, upper_zrot);
// forearm
  push();
  fill(0, 255, 255); // cyan
  translate(0, 0, 50);
  transformAndRnderRobotArm(forearm_yrot, forearm_zrot);
  pop();
  pop();
}
function transformAndRnderRobotArm(yrot, zrot) {
  strokeWeight(1);
  stroke(255, 0, 0);
  line(0, 0, 0, 300, 0, 0); // visualize x-rotation axis
  rotateY(yrot);
  stroke(0, 255, 0);
  line(0, 0, 0, 0, 300, 0); // visualize y-rotation axis
  rotateZ(zrot);
  stroke(0, 0, 255);
  line(0, 0, 0, 0, 0, 300); // visualize z-rotation axis
  noStroke();
  translate(0, 0, 50);
  box(30, 30, 100);
// The above axis visualization is to show about which axis
// each rotation rotates in euler angle rotation
}