console.log("hallo");
const canvas = document.getElementById("canvas");

function Bird(width, height, speedX, speedY, gravSpeed, gravity, ctx) {
  console.log(ctx);
  this.width = width;
  this.height = height;
  this.speedX = speedX;
  this.speedY = speedY;
  this.gravSpeed = gravSpeed;
  this.gravity = gravity;
  this.src = "./images/flappy.png";

  this.moveUp = function() {
    this.height -= 50;
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

  let birdImg = new Image();
  birdImg.src = this.src;

  this.draw = function() {
    ctx.drawImage(birdImg, this.width, this.height, 70 * 1.4, 70 * 1);
  };
}
