console.log("hallo");
window.onload = function() {
  document.getElementById("start-button").onclick = function() {
    startGame();
  };
  let canvas = document.getElementById("canvas");
  let ctx = canvas.getContext("2d");
  let bird = new Bird(1.4, 1, 1, 1, 1, 1);

  function startGame() {
    updateCanvas();
  }

  function updateCanvas() {
    backgroundImage.move();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    backgroundImage.draw();
    birdDrawing.draw();

    setInterval(updateCanvas, 100 / 50);
  }

  document.onkeydown = function(e) {
    console.log(e.keyCode);
    if (e.keyCode === 32) {
      console.log("yay i space");
      bird.moveUp();
    } else if (e.keyCode === 38) {
      // bird.moveDown();
      console.log("yay i clicked up");
    }
  };

  //bird stuff
  //information bird

  //canvas bird
  let birdImg = new Image();
  birdImg.src = bird.src;

  let birdDrawing = {
    img: birdImg,
    width: bird.width,
    height: bird.height,
    x: bird.speedX,

    draw: function() {
      // console.log("draw bird function");
      ctx.drawImage(
        this.img,
        100,
        canvas.height/2,
        70 * this.width,
        70 * this.height
      );
    }
  };

  //background image
  var imgBackground = new Image();
  imgBackground.src = "./images/bg.png";

  var backgroundImage = {
    img: imgBackground,
    x: 0,
    speed: -0.003,

    move: function() {
      this.x += this.speed;
      this.x %= canvas.width;
    },

    draw: function() {
      // console.log(this.x, this.img.width);
      ctx.drawImage(this.img, this.x, 0);
      if (this.speed < 0) {
        ctx.drawImage(this.img, this.x + canvas.width, 0);
      } else {
        ctx.drawImage(this.img, this.x - this.img.width, 0);
      }
    }
  };
};
