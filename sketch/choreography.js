/*
THIS CODE IS FOR CHOREOGRAPHY OF DANCING CAR
Implemented by Minwoo Choo
 */

function handleDancingCar() {
  const cur_time = sounds.bgm.currentTime().toFixed(1).toString();
  if (chreography[cur_time]) {
    chreography[cur_time]();
  }
}

const chreography = {
  '0.0': function () {  // initial
    rot = 0;
    car.door_wing.mode = 0;
    car.turnOffAllLight();
  },
  '3.5': function () {
    car.turnOnAllLight();
  },
  '3.8': function () {
    car.turnOffAllLight();
  },
  '4.0': function () {
    car.turnOnAllLight();
  },
  '4.5': function () {
    car.turnOffAllLight();
  },
  '4.8': function () {
    car.turnOnAllLight();
  },
  '5.1': function () {
    car.turnOffAllLight();
  },

  '5.6': function () {  // part 1
    car.turnOnAllLight();
  },
  '5.7': function () {
    car.turnOffAllLight();
  },
  '5.8': function () {
    car.turnOnAllLight();
  },
  '5.9': function () {
    car.turnOffAllLight();
  },

  '6.4': function () {
    car.turnOnAllLight();
  },
  '6.5': function () {
    car.turnOffAllLight();
  },
  '6.6': function () {
    car.turnOnAllLight();
  },
  '6.7': function () {
    car.turnOffAllLight();
  },

  '7.2': function () {
    car.turnOnAllLight();
  },
  '7.3': function () {
    car.turnOffAllLight();
  },
  '7.4': function () {
    car.turnOnAllLight();
  },
  '7.5': function () {
    car.turnOffAllLight();
  },

  '8.0': function () {
    car.turnOnAllLight();
  },
  '8.1': function () {
    car.turnOffAllLight();
  },
  '8.2': function () {
    car.turnOnAllLight();
  },
  '8.3': function () {
    car.turnOffAllLight();
  },

  '8.8': function () {
    car.turnOnAllLight();
  },
  '8.9': function () {
    car.turnOffAllLight();
  },
  '9.0': function () {
    car.turnOnAllLight();
  },
  '9.1': function () {
    car.turnOffAllLight();
  },

  '9.6': function () {
    car.turnOnAllLight();
  },
  '9.7': function () {
    car.turnOffAllLight();
  },
  '9.8': function () {
    car.turnOnAllLight();
  },
  '9.9': function () {
    car.turnOffAllLight();
  },

  '10.4': function () {
    car.turnOnAllLight();
  },
  '10.5': function () {
    car.turnOffAllLight();
  },
  '10.6': function () {
    car.turnOnAllLight();
  },
  '10.7': function () {
    car.turnOffAllLight();
  },

  '10.8': function () {  // part 2
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
  },
  '11.0': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
  },
  '11.2': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
  },
  '11.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
  },
  '11.6': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
  },
  '11.8': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
  },
  '11.9': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
  },

  '12.0': function () {  // part 1
    car.turnOnAllLight();
  },
  '12.1': function () {
    car.turnOffAllLight();
  },
  '12.2': function () {
    car.turnOnAllLight();
  },
  '12.3': function () {
    car.turnOffAllLight();
  },

  '12.8': function () {
    car.turnOnAllLight();
  },
  '12.9': function () {
    car.turnOffAllLight();
  },
  '13.0': function () {
    car.turnOnAllLight();
  },
  '13.1': function () {
    car.turnOffAllLight();
  },

  '13.6': function () {
    car.turnOnAllLight();
  },
  '13.7': function () {
    car.turnOffAllLight();
  },
  '13.8': function () {
    car.turnOnAllLight();
  },
  '13.9': function () {
    car.turnOffAllLight();
  },

  '14.4': function () {
    car.turnOnAllLight();
  },
  '14.5': function () {
    car.turnOffAllLight();
  },
  '14.6': function () {
    car.turnOnAllLight();
  },
  '14.7': function () {
    car.turnOffAllLight();
  },

  '15.2': function () {
    car.turnOnAllLight();
  },
  '15.3': function () {
    car.turnOffAllLight();
  },
  '15.4': function () {
    car.turnOnAllLight();
  },
  '15.5': function () {
    car.turnOffAllLight();
  },

  '16.0': function () {
    car.turnOnAllLight();
  },
  '16.1': function () {
    car.turnOffAllLight();
  },
  '16.2': function () {
    car.turnOnAllLight();
  },
  '16.3': function () {
    car.turnOffAllLight();
  },

  '16.8': function () {
    car.turnOnAllLight();
  },
  '16.9': function () {
    car.turnOffAllLight();
  },
  '17.0': function () {
    car.turnOnAllLight();
  },
  '17.1': function () {
    car.turnOffAllLight();
  },

  '17.2': function () {  // part 2
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
  },
  '17.4': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
  },
  '17.6': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
  },
  '17.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
  },
  '18.0': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
  },
  '18.2': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
  },
  '18.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
  },

  '18.5': function () {  // part 4-1
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '18.7': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.left_yellow = true;
  },
  '18.9': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.right_yellow = true;
  },
  '19.1': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '19.3': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '19.5': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.left_yellow = true;
  },
  '19.7': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.right_yellow = true;
  },
  '19.9': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '20.1': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '20.3': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.left_yellow = true;
  },
  '20.5': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.right_yellow = true;
  },
  '20.7': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '20.9': function () {  // part 4-2
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '21.1': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.left_yellow = true;
  },
  '21.3': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.right_yellow = true;
  },
  '21.5': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '21.7': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '21.9': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.left_yellow = true;
  },
  '22.1': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.right_yellow = true;
  },
  '22.3': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '22.5': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '22.6': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.left_yellow = true;
  },
  '22.7': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.right_yellow = true;
  },
  '22.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '23.3': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '23.5': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.left_yellow = true;
  },
  '23.7': function () {
    car.turnOnAllLight();
  },
  '23.8': function () {
    car.turnOffAllLight();
  },

  '25.2': function () {  // part 5
    car.turnOnAllLight();
  },
  '25.3': function () {
    car.turnOffAllLight();
  },

  '26.7': function () {
    car.turnOnAllLight();
  },
  '26.8': function () {
    car.turnOffAllLight();
  },

  '27.2': function () {
    car.turnOnAllLight();
  },
  '27.3': function () {
    car.turnOffAllLight();
  },
  '27.4': function () {
    car.turnOnAllLight();
  },
  '27.5': function () {
    car.turnOffAllLight();
  },

  '28.0': function () {
    car.turnOnAllLight();
  },
  '28.1': function () {
    car.turnOffAllLight();
  },
  '28.2': function () {
    car.turnOnAllLight();
  },
  '28.3': function () {
    car.turnOffAllLight();
  },

  '28.4': function () {  // part 6
    car.turnOffAllLight();
    car.fog_light.left_yellow = true;
  },
  '28.8': function () {
    car.turnOffAllLight();
    car.fog_light.right_yellow = true;
  },
  '29.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
  },
  '29.6': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
  },
  '30.0': function () {
    car.turnOffAllLight();
    car.fog_light.left_yellow = true;
    car.fog_light.right_yellow = true;
  },
  '30.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
  },
  '30.8': function () {
    car.turnOffAllLight();
  },
  '31.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right2 = true;
  },

  '31.4': function () {  // part 7 - door opening!
    car.turnOffAllLight();
    car.door_wing.mode = 1;
    car.fog_light.left_white = true;
  },
  '31.6': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '31.8': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '32.0': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '32.2': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '32.4': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '32.6': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '32.8': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '33.0': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '33.2': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '33.4': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '33.6': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '33.8': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '34.0': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '34.2': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '34.4': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '34.6': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '34.8': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '35.0': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '35.2': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '35.4': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '35.6': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '35.8': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '36.0': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '36.2': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '36.4': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '36.6': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '36.8': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '37.0': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '37.2': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '37.4': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '37.6': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '37.8': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '38.0': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '38.2': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '38.4': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '38.6': function () {  // part 8 - The Nutcracker
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '38.8': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },
  '39.0': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_white = true;
  },
  '39.2': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '39.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '39.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_white = true;
  },
  '39.8': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '40.0': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '40.1': function () {
    car.turnOffAllLight();
  },


  '40.2': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_white = true;
  },
  '40.4': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },
  '40.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '40.8': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '41.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '41.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_white = true;
  },
  '41.4': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '41.6': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '41.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '42.0': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },
  '42.2': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_white = true;
  },
  '42.4': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '42.6': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '42.8': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_white = true;
  },
  '43.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.fog_light.left_white = true;
  },
  '43.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.fog_light.right_white = true;
  },

  '43.4': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '43.6': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_white = true;
  },
  '43.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.fog_light.left_white = true;
  },
  '44.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.fog_light.right_white = true;
  },

  '44.2': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '44.4': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_white = true;
  },
  '44.6': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '44.8': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '45.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '45.2': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },
  '45.4': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_white = true;
  },
  '45.6': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '45.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '46.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_white = true;
  },
  '46.2': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '46.4': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '46.6': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_white = true;
  },
  '46.8': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },
  '47.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '47.2': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '47.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right2 = true;
    car.fog_light.left_white = true;
  },
  '47.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },
  '47.8': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '48.0': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '48.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_white = true;
  },
  '48.4': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },
  '48.6': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_white = true;
  },
  '48.8': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },

  '49.0': function () {
    car.turnOffAllLight();
    car.fog_light.left_white = true;
  },
  '49.2': function () {
    car.turnOffAllLight();
    car.fog_light.right_white = true;
  },
  '49.4': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.fog_light.left_white = true;
  },
  '49.6': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },

  '49.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.fog_light.left_white = true;
  },
  '50.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.fog_light.right_white = true;
  },
  '50.2': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.fog_light.left_white = true;
  },
  '50.4': function () {
    car.turnOffAllLight();
    car.head_light.right2 = true;
    car.fog_light.right_white = true;
  },

  '50.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.fog_light.left_white = true;
  },
  '50.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.fog_light.right_white = true;
  },
  '51.0': function () {
    car.turnOffAllLight();
  },

  '51.2': function () {  // part 9
    car.turnOnAllLight();
  },
  '51.4': function () {
    car.turnOffAllLight();
  },

  '52.8': function () {
    car.turnOnAllLight();
  },
  '53.0': function () {
    car.turnOffAllLight();
  },

  '54.2': function () {
    car.turnOnAllLight();
  },
  '54.4': function () {
    car.turnOffAllLight();
  },

  '54.8': function () {
    car.turnOnAllLight();
  },
  '54.9': function () {
    car.turnOffAllLight();
  },
  '55.1': function () {
    car.turnOnAllLight();
  },
  '55.2': function () {
    car.turnOffAllLight();
  },

  '55.6': function () {
    car.turnOnAllLight();
  },
  '55.7': function () {
    car.turnOffAllLight();
  },
  '55.9': function () {
    car.turnOnAllLight();
  },
  '56.0': function () {
    car.turnOffAllLight();
  },

  '56.3': function () {
    car.turnOnAllLight();
  },
  '56.4': function () {
    car.turnOffAllLight();
  },
  '56.8': function () {
    car.turnOnAllLight();
  },
  '56.9': function () {
    car.turnOffAllLight();
  },
  '57.1': function () {
    car.turnOnAllLight();
  },
  '57.2': function () {
    car.turnOffAllLight();
  },

  '57.4': function () {  // part 10 - door dance
    car.door_wing.mode = 2;
    car.door_wing.rot_angle = 4.71;
    car.door_wing.dancing_factor = 1;
    car.door_wing.rot_speed = 0.011;
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '57.6': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '57.8': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '58.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '58.2': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '58.4': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '58.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '58.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '59.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '59.2': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '59.4': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '59.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '59.8': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '60.0': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '60.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '60.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '60.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '60.8': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '61.0': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '61.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '61.4': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '61.6': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '61.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '62.0': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.right_yellow = true;
  },

  '62.2': function () {
    car.turnOffAllLight();
  },
  '62.4': function () {
    car.turnOffAllLight();
  },
  '62.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '62.8': function () {
    car.turnOffAllLight();
  },


  '63.0': function () {  // part 11
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '63.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },
  '63.4': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.left_yellow = true;
  },
  '63.6': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },

  '63.8': function () {  // part 10
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '64.0': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '64.2': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '64.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '64.6': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '64.8': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '65.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '65.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '65.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '65.6': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '65.8': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '66.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '66.2': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '66.4': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '66.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '66.8': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '67.0': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '67.2': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '67.4': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '67.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '67.8': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '68.0': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '68.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '68.4': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '68.6': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.right3 = true;
    car.fog_light.left_yellow = true;
  },
  '68.8': function () {
    car.turnOffAllLight();
    car.head_light.left2 = true;
    car.head_light.right2 = true;
    car.fog_light.right_yellow = true;
  },
  '69.0': function () {
    car.turnOffAllLight();
    car.head_light.left3 = true;
    car.head_light.right1 = true;
    car.fog_light.left_yellow = true;
  },
  '69.2': function () {
    car.turnOffAllLight();
    car.head_light.left1 = true;
    car.head_light.left2 = true;
    car.head_light.left3 = true;
    car.head_light.right2 = true;
    car.head_light.right1 = true;
    car.head_light.right3 = true;
    car.fog_light.right_yellow = true;
  },

  '69.4': function () {  // part 11
    car.turnOffAllLight();
  },
  '69.6': function () {
    car.turnOffAllLight();
  },
  '69.8': function () {
    car.turnOnAllLight();
  },
  '70.0': function () {
    car.turnOffAllLight();
  },

  '70.2': function () {
    car.turnOffAllLight();
  },
  '70.4': function () {
    car.turnOffAllLight();
  },
  '70.6': function () {
    car.turnOnAllLight();
  },
  '70.8': function () {
    car.turnOffAllLight();
  },

  '71.0': function () {
    car.turnOffAllLight();
  },
  '71.2': function () {
    car.turnOffAllLight();
  },
  '71.4': function () {
    car.turnOnAllLight();
  },
  '71.6': function () {
    car.turnOffAllLight();
  },

  '71.8': function () {
    car.turnOffAllLight();
  },
  '72.0': function () {
    car.turnOffAllLight();
  },
  '72.2': function () {
    car.turnOnAllLight();
  },
  '72.4': function () {
    car.turnOffAllLight();
  },

  '72.6': function () {
    car.turnOffAllLight();
  },
  '72.8': function () {
    car.turnOffAllLight();
  },
  '73.0': function () {
    car.turnOnAllLight();
  },
  '73.2': function () {
    car.turnOffAllLight();
  },

  '73.4': function () {
    car.turnOffAllLight();
  },
  '73.6': function () {
    car.turnOffAllLight();
  },
  '73.8': function () {
    car.turnOnAllLight();
  },
  '74.0': function () {
    car.turnOffAllLight();
  },

  '74.2': function () {
    car.turnOffAllLight();
  },
  '74.4': function () {
    car.turnOffAllLight();
  },
  '74.6': function () {
    car.turnOnAllLight();
  },
  '74.8': function () {
    car.turnOffAllLight();
  },

  '75.0': function () {
    car.turnOffAllLight();
  },
  '75.2': function () {
    car.turnOffAllLight();
  },
  '75.4': function () {
    car.turnOnAllLight();
  },
  '75.6': function () {
    car.turnOffAllLight();
  },

  '75.8': function () {
    car.turnOffAllLight();
  },
  '76.0': function () {
    car.turnOffAllLight();
  },
  '76.2': function () {  // door close
    car.door_wing.mode = 0;
    car.door_wing.rot_angle = 4.71;
    car.turnOnAllLight();
  },
  '79.4': function () {
    car.turnOffAllLight();
  },
  '79.5': function () {
    car.turnOnAllLight();
  },
  '79.6': function () {
    car.turnOffAllLight();
  },

  '82.0': function () {  // show end
    car.turnOnAllLight();
  }
}