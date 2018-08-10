console.log("hallo");
const canvas = document.getElementById("canvas");

function Bird(width, height, speedX, speedY, gravSpeed, gravity) {
  this.width = width;
  this.height = height;
  this.speedX = speedX;
  this.speedY = speedY;
  this.gravSpeed = gravSpeed;
  this.gravity = gravity;
  this.src = "./images/bear.png";

  this.moveUp = function() {
    this.speedY *= -1;
    this.height *= this.speedY;
  };

  this.newPos = function() {
    //calc new position
    //this.speedX
  };

  this.update = function() {
    //clear image
    //draw bird
    //restore image
  };
}
