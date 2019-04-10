const universe = [];
var friction = .80;

// pos, vel, f, rgb, att, rep, minR, maxR, damp

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);


  //RED PARTICLES
  for(let i = 0; i < 170; i++) {
    universe.push(new Particle(
      createVector(random(0, width - 50), random(0, height - 50)), //position
      createVector(0, 0),                 //velocity
      0.15,//2,                                  //force
      1,                                  //color
      [1,3,4],                             //attracted to
      [2,5],                                 //repelled to
      [],                                   //passive to
      25,                                 //minimum radius
      70,                     //maximum radius
      friction,                                //dampening or friction
      12                                  //size
      ));
  }

  //BLUE PARTICLES
  for(let i = 0; i < 200; i++) {
    universe.push(new Particle(
      createVector(random(width/4, width * (3/4)), random(height/4, height * (3/4))), //position
      createVector(0, 0),                 //velocity
      0.09,//5,                                 //force
      3,                                  //color
      [1,3],                                //attracted to
      [2,4,5],                                 //repelled to
      [],                                   //passive to
      25,                                 //minimum radius
      57,                                //maximum radius
      friction,                                 //dampening or friction
      12                                  //size
      ));
  }

  
  //GREEN PARTICLES
  for(let i = 0; i < 150; i++) {
    universe.push(new Particle(
      createVector(random(0, width - 50), random(0, height - 50)), //position
      createVector(0, 0),                 //velocity
      0.5,//7,                                  //force
      2,                                  //colors
      [3],                                //attracted to
      [1,4,5],                              //repelled to
      [],                                   //passive to
      25,                                 //minimum radius
      70,                                 //maximum radius
      friction,                                //dampening or friction
      12                                  //size
      ));
  }

  //YELLOW PARTICLES
  for(let i = 0; i < 88; i++) {
    universe.push(new Particle(
      createVector(random(width/3, width - 200), random(height/3, height - 200)), //position
      createVector(0, 0),                 //velocity
      0.25,//7,                                  //force
      4,                                  //colors
      [2,1,5],                                //attracted to
      [3,4],                              //repelled to
      [],                                   //passive to
      25,                                 //minimum radius
      85,                                 //maximum radius
      friction,                                //dampening or friction
      12                                  //size
      ));
  }

  //PINK PARTICLES
  for(let i = 0; i < 66; i++) {
    universe.push(new Particle(
      createVector(random(width/3, width - 200), random(height/3, height - 200)), //position
      createVector(0, 0),                 //velocity
      0.6,//7,                                  //force
      5,                                  //colors
      [3],                                //attracted to
      [1,2,4],                              //repelled to
      [],                                   //passive to
      25,                                 //minimum radius
      90,                                 //maximum radius
      friction,                                //dampening or friction
      12                                  //size
      ));
  }
  
}

function draw() {
  background(15);
  
  for(let p of universe) {

    p.applyForce(universe);
    p.update();
    p.display();

  }
}

