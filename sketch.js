function setup() {
  createCanvas(600,600);
  angleMode(DEGREES)
}

function draw() {
  background("black");
  translate(250,250);
  rotate(-90); 
  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);
  

push();
rotate(scAngle);
stroke("blue")
strokeWeight(7)
line(0, 0, 100, 0);
pop();

  
push();
rotate(mnAngle);
stroke("purple")
strokeWeight(7)
line(0, 0, 130, 0);
pop();

push();
rotate(hrAngle);
stroke("red")
strokeWeight(7)
line(0, 0, 70, 0);
pop();














  drawSprites();
}