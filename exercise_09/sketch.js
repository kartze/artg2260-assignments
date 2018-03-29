let sounds = [];
let numSounds = 5;

// The playSound array is defining how many samples will be played at each trigger event
let playSound = [1,1,1,1,1];

// The trigger is an integer number in milliseconds so we can schedule new events in the draw loop
let trigger;

function preload(){
  // Load 5 soundfiles from a folder in a for loop. By naming the files 1., 2., 3., n.aif it is easy to iterate
  // through the folder and load all files in one line of code.
  for (let i = 0; i < numSounds; i++){
    sounds[i] = loadSound(i + '.wav');
  }
}

function setup(){
  var canvas = createCanvas(640, 360);
  // Create a trigger which will be the basis for our random sequencer.
  canvas.parent('sketch-box');
  trigger = millis();
  noStroke();
}

function draw(){
  // If the determined trigger moment in time matches up with the computer clock events get triggered.
  if (millis() > trigger){
    background(255);

    for (let i = 0; i < numSounds; i++){
      // Check which indexes are 1 and 0. Only play if playSound[i] == 1.
      if (playSound[i] == 1){
        let rate;
        fill(random(255),random(255),random(255));
        rect((width/numSounds) * i, 0, (width/numSounds), height);
        sounds[i].play();
      }

      // Renew the indexes of playSound so that at the next event the order is different and randomized.
      playSound[i] = round(random(0,1));
    }

    // Create a new triggertime in the future, with a random offset between 200 and 1000 milliseconds
    trigger = millis() + round(random(1,4))*200;
  }
}
