var angle = 0;
var slider;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight - 50);
  stroke(255);
  slider = createSlider(0.1 * PI, TWO_PI, PI / 4, 0.001);
}


function draw() {
  background(51);
  translate(width / 2, height / 2);
  angle = slider.value();
  var base_angle = (angle <= PI * 2/3) ? angle : PI * 2/3;
  for (var i = 0; i < TWO_PI; i += base_angle) {
    push();
    rotate(i);
    branch(100);
    pop();
  }
}

function branch(len) {
  line(0, 0, 0, -len);
  translate(0, -len);
  if (len > 4) {
    push();
    rotate(angle);
    branch(len * 0.67);
    pop();
    push();
    rotate(-angle);
    branch(len * 0.67);
    pop();
  }
}
