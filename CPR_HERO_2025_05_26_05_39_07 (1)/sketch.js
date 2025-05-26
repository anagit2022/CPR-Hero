let playImg;
let winImg;
let endImg;
let fasterImg;
let slowerImg;
let continueImg;
let elapsedTime = 0;
let now = 0;
let s1, s2, s3A, s3B, s3C, s3D, s4, s5, s6, s7, s7A;
let dial;
let ring;
let currentTouchTime = 0;
let playStartTime = 0;
let finishTimeInterval = 0;
let cprStartTime = 0;
let interval = 0;
let lastTouchTime = 0;
let bpm = 0;
let bpm_circle_color = "#D9D9D9";
let slow_interval = 0.8;
let compression_count = 0;
let good_compression = 0;
let numberToDisplay;
let decayRate = 10;
let decay_normal = 0.5;
let goodfillRate = 100;
let badfillRate = 10;
let progress = 0;
let maxTotalCompressions = 0;
let currentState = "s1";
let press_music;
let task_time;
let finishTime;
let cheekOpacity = 40;
let lipOpacity = 120;
// nexts1
let nextx = 118;
let nexty = 533;
let nextw = 142;
let nexth = 47;
// nextG
let nextGx = 298;
let nextGy = 577;
let nextGw = 50;
let nextGh = 50;

// nexts3A
let next3Ax = 255;
let next3Ay = 437;
let next3Aw = 60;
let next3Ah = 60;
// nexts3B
let next3Bx = 255;
let nextBy = 437;
let next3Bw = 60;
let next3Bh = 60;
// nexts3C
let next3Cx = 172;
let next3Cy = 365;
let next3Cw = 60;
let next3Ch = 60;
// nexts3D
let next3Dx = 172;
let next3Dy = 579;
let next3Dw = 60;
let next3Dh = 60;
// next 7A
let next7Ax = 343;
let next7Ay = 283;
let next7Aw = 45;
let next7Ah = 111;
// startplay
let startx = 152;
let starty = 288;
let startw = 236;
let starth = 102;
// restart
let restartx = 308; // X for start button clickable area (if specific region needed)
let restarty = 21; // Y for start button clickable area
let restartw = 66; // Width for start button clickable area
let restarth = 66; // Height for start button clickable area

function preload() {
  playImg = loadImage(
    "eye2 (1).png"
  );
  winImg = loadImage(
    "https://cdn.glitch.global/a82f68a9-a6b4-4725-b1f6-04e6768be410/giffycanvas%20(82).gif?v=1747283860379"
  );
  fasterImg = loadImage(
    "https://cdn.glitch.global/a82f68a9-a6b4-4725-b1f6-04e6768be410/faster%20feedback%20(1).png?v=1747281417953"
  );
  slowerImg = loadImage(
    "https://cdn.glitch.global/a82f68a9-a6b4-4725-b1f6-04e6768be410/slower%20feedback%20(1).png?v=1747281422673"
  );
  press_music = loadSound(
    "mixkit-message-pop-alert-2354.mp3"
  );
  win_music = loadSound(
    "mixkit-fairy-arcade-sparkle-866.wav"
  );
  endImg = loadImage(
    "https://cdn.glitch.global/a82f68a9-a6b4-4725-b1f6-04e6768be410/end%20(2).png?v=1747317803814"
  );
  s1 = loadImage(
    "s1 (7).png"
  );
  s2 = loadImage(
    "onboard2.png"
  );
  s3A = loadImage(
    "s3A (1).png"
  );
  s3B = loadImage(
    "s3B (1).png"
  );
  s3C = loadImage(
    "s3C (1).png"
  );
  s3D = loadImage(
    "s3Dscdf.png"
  );
  s4 = loadImage(
    "s3E.png"
  );
  s5 = loadImage(
    "s4 (3).png"
  );
  s6 = loadImage(
    "giffycanvas (83).gif"
  );
  s7 = loadImage(
    "s6 (3).png"
  );
  s7A = loadImage(
    "s7 (2).png"
  );
  continueImg = loadImage(
    "continue pressing.png"
  );
 dial = loadSound("9aud.mp3");
 ring = loadSound("mixkit-office-telephone-ring-1350.wav");
}
function setup() {
  createCanvas(392, 680);
  maxTotalCompressions = floor(random(50, 101));
  task_time = 600 * maxTotalCompressions + 3000;
  finishTime = 0;
  // static blood flow level
  const staticRectX = 92;
  const staticRectY = 44;
  const staticRectWidth = 254;
  const staticRectHeight = 11;
  const staticRectRadius = 11; // Assuming rounded corners for both
}

function draw() {
  cprStartTime = millis();

  if (currentState === "s1") {
    image(s1, 0, 0);
  } else if (currentState === "s2") {
    image(s2, 0, 0);
  } else if (currentState === "s3A") {
    image(s3A, 0, 0);
  } else if (currentState === "s3B") {
    image(s3B, 0, 0);
  } else if (currentState === "s3C") {
    image(s3C, 0, 0);
  } else if (currentState === "s3D") {
    image(s3D, 0, 0);
  } else if (currentState === "s4") {
    image(s4, 0, 0);
  } else if (currentState === "s5") {
    image(s5, 0, 0);
  } else if (currentState === "s6") {
    image(s6, 0, 0);
  } else if (currentState === "s7") {
    image(s7, 0, 0);
  }else if (currentState === "s7A") {
    image(s7A, 0, 0);
  } else if (currentState === "play") {
    playScreen();
    /*push();
    fill(0);
    text("cpr start time :" + " " + cprStartTime / 1000, 100, 100);
    text("play start time:" + " " + playStartTime / 1000, 100, 200);
    text("finish time:" + " " + finishTime / 1000, 100, 300);
    text("finish time interval :" + " " + finishTimeInterval / 1000, 100, 400);
    text("task time:" + " " + task_time / 1000, 100, 500);

    text("Elapsed time: " + elapsedTime, 100, 550);
    text("max: " + maxTotalCompressions, 200, 560);
    text("good: " + good_compression, 100, 580);

    pop();*/
    let timeSinceLastTouch = (millis() - lastTouchTime) / 1000;
    // If more than 4 seconds have passed since the last touch
    if (timeSinceLastTouch > 8 && lastTouchTime !== 0) {
     bpm = 0;
      currentState = "late";
    }
  } else if (currentState === "win") {
    winScreen();
    /*push();
    fill(0);
    text("cpr start time :" + " " + cprStartTime, 100, 100);
    text("play start time:" + " " + playStartTime, 100, 200);
    text("finish time:" + " " + finishTime, 100, 300);
    text("finish time interval :" + " " + finishTimeInterval, 100, 200);
    text("task time:" + " " + task_time, 100, 400);
    text("Elapsed time: " + elapsedTime, 100, 550);
    text("max: " + maxTotalCompressions, 200, 560);
    text("good: " + good_compression, 100, 580);
    pop();*/
  } else if (currentState === "late") {
    lateScreen();
    /*push();
    fill(0);
    text("cpr start time :" + " " + cprStartTime / 1000, 100, 100);
    text("play start time:" + " " + playStartTime / 1000, 100, 200);
    text("finish time:" + " " + finishTime / 1000, 100, 300);
    text("finish time interval :" + " " + finishTimeInterval / 1000, 100, 400);
    text("task time:" + " " + task_time, 100, 500);
    text("Elapsed time: " + elapsedTime, 100, 550);
    text("max: " + maxTotalCompressions, 200, 560);
    text("good: " + good_compression, 100, 580);
    pop();*/
  }
}
function playScreen() {
  //task_time = (0.6 * maxTotalCompressions);
  elapsedTime = millis() - playStartTime;

  console.log("task time" + round(task_time));
  progress -= decay_normal;
  progress = constrain(progress, 6, 254);
  console.log("progress" + " " + progress);
  cheekOpacity = map(progress, 6, 254, 40, 255);
  lipOpacity = map(progress, 6, 254, 120, 255);
  background("#FFC5B7");
  image(playImg, 86, 22);
  // draw bpm circle
  push();
  noStroke();
  fill(bpm_circle_color);
  circle(50, 50, 60);
  pop();
  // cheek circle1
  push();
  noStroke();
  fill(253, 175, 179, cheekOpacity);
  circle(220, 122, 132);
  pop();
  // cheek circle1
  push();
  noStroke();
  fill(253, 175, 179, cheekOpacity);
  circle(220, 542, 132);
  pop();
  // static rect
  push();
  noStroke();
  fill("#EEEEEE");
  rect(92, 44, 254, 11, 11);
  pop();
  //live rect
  push();
  noStroke();
  fill("#FF5058");
  rect(347, 44, -progress, 11, 11);
  pop();
  console.log("interval" + round(interval, 2));
  console.log("bpm" + " " + round(bpm));
  // show BPM text
  push();
  translate(30, 48);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(23);
  fill(255);
  text(round(bpm), 0, 0);
  pop();
  // JUST BPM
  // show BPM text
  push();
  translate(60, 48);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(12);
  fill(255);
  text("BPM", 0, 0);
  pop();
  if (bpm > 99 && bpm < 121) {
    bpm_circle_color = "#038660";

    //progress += fillRate;
  } else {
    bpm_circle_color = "#FF3C46";
    //progress -= decayRate;
  }
  if (bpm < 99 && bpm > 0) {
    image(fasterImg, 26, 287);
  } else if (bpm > 121) {
    image(slowerImg, 26, 287);
  }
  // CHECK FOR INACTIVITY
  if (interval > 2) {
    image(continueImg, 26, 287);
  } else if (interval > 4) {
    bpm = 0;
    currentState = "late";
  }
  // DRAW MOUTH
  push();
  noStroke();
  fill(255, 124, 130, lipOpacity);
  ellipse(310,330,42,120);

  // pop();
  //show compression count
  push();
  translate(25, 600);
  rotate(-HALF_PI);
  textAlign(CENTER, TOP);
  textSize(23);
  fill(0);
  let numberToDisplay;
  if (compression_count === 0) numberToDisplay = 0;
  else if (compression_count % 5 === 0) numberToDisplay = compression_count;
  else numberToDisplay = compression_count % 5;
  text(numberToDisplay + " AND", 0, 0);
  console.log("good_compression = " + good_compression);

  pop();
  // First check if time is up before the player can complete the task
  if (elapsedTime >= task_time && good_compression < maxTotalCompressions) {
    currentState = "late";
    console.log(
      "Time up! Good compressions: " +
        good_compression +
        "/" +
        maxTotalCompressions
    );
    return; // Exit the function early
  }

  // Then check if player completed the task in time
  if (good_compression >= maxTotalCompressions) {
    finishTime = millis();
    finishTimeInterval = finishTime - playStartTime;

    if (elapsedTime <= task_time + 8000) {
      currentState = "win";
      win_music.play();
    } else {
      currentState = "late";
    }
  }
}
function lateScreen() {
  image(endImg, 0, 0);
}
function winScreen() {
  image(winImg, 0, 0);
  /*if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    ) {
      currentState = "play";
      lastTouchTime = currentTime;
      compression_count = 0;
      maxTotalCompressions = floor(random(50, 101));
     
} */
}
function mousePressed() {
  if (currentState === "s1") {
    if (
      mouseX > nextx &&
      mouseX < nextx + nextw &&
      mouseY > nexty &&
      mouseY < nexty + nexth
    ) {
      currentState = "s2";
      console.log(currentState);
    }
  } else if (currentState === "s2") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s3A";
    }
  } else if (currentState === "s3A") {
    
    if (
      mouseX > next3Ax &&
      mouseX < next3Ax + next3Aw &&
      mouseY > next3Ay &&
      mouseY < next3Ay + next3Ah
    ) {
      currentState = "s3B";
      dial.play();
    }
  }else if (currentState === "s3B") {
    if (
      mouseX > next3Ax &&
      mouseX < next3Ax + next3Aw &&
      mouseY > next3Ay &&
      mouseY < next3Ay + next3Ah
    ) {
      currentState = "s3C";
      dial.play();
    }
  } else if (currentState === "s3C") {
    if (
      mouseX > next3Cx &&
      mouseX < next3Cx + next3Cw &&
      mouseY > next3Cy &&
      mouseY < next3Cy + next3Ch
    ) {
      currentState = "s3D";
      dial.play();
    }
  }else if (currentState === "s3D") {
    if (
      mouseX > next3Dx &&
      mouseX < next3Dx + next3Dw &&
      mouseY > next3Dy &&
      mouseY < next3Dy + next3Dh
    ) {
      ring.play();
      currentState = "s4";
    }
  }  else if (currentState === "s4") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s5";
    }
  } else if (currentState === "s5") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s6";
    }
  } else if (currentState === "s6") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s7";
    }
  } else if (currentState === "s7") {
    if (
      mouseX > nextGx &&
      mouseX < nextGx + nextGw &&
      mouseY > nextGy &&
      mouseY < nextGy + nextGh
    ) {
      currentState = "s7A";
      
    }
  }else if (currentState === "s7A") {
    if (
      mouseX > next7Ax &&
      mouseX < next7Ax + next7Aw &&
      mouseY > next7Ay &&
      mouseY < next7Ay + next7Ah
    ) {
      currentState = "play";
      playStartTime = millis();
    }
  } else if (currentState === "play") {
    compression_count += 1;
    press_music.play();
    now = millis();
    console.log(now / 1000);
    if (lastTouchTime !== 0) {
      interval = (now - lastTouchTime) / 1000;
      let calculatedBPM = 60 / interval;
      bpm = calculatedBPM;
    } else {
      interval = 0;
      bpm = 0;
    }

    lastTouchTime = now;

    if (bpm > 99 && bpm < 121) {
      progress += goodfillRate;
      good_compression += 1;
    } else {
      progress -= badfillRate;
    }
  } else if (currentState === "win") {
    // winmusic.play(); // Uncomment if you want win music to play on win screen
    if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    ) {
      currentState = "play";
      lastTouchTime = 0; // <-- CORRECTED: Use 'now'
      elapsedTime = 0;
      playStartTime =millis();
      finishTimeInterval=0;
      compression_count = 0;
      maxTotalCompressions = floor(random(50, 101));
      // Add resets for other game state variables:
      bpm = 0;
      progress = 0;
      good_compression = 0;
      finishTime = 0;
      bpm_circle_color = "#D9D9D9"; // Optional: reset color

      console.log("Restarting from Win Screen"); // Debugging
    }
    // return false; // Optional: Remove or keep based on if you need to prevent default touch in this state outside restart area
  } else if (currentState === "late") {
    if (
      mouseX > restartx &&
      mouseX < restartx + restartw &&
      mouseY > restarty &&
      mouseY < restarty + restarth
    ) {
      currentState = "play";
      lastTouchTime = 0; // <-- CORRECTED: Use 'now'
      elapsedTime = 0;
      playStartTime =millis();
      finishTimeInterval=0;
      compression_count = 0;
      maxTotalCompressions = floor(random(50, 101));
      // Add resets for other game state variables:
      bpm = 0;
      progress = 0;
      good_compression = 0;
      finishTime = 0;
      bpm_circle_color = "#D9D9D9"; // Optional: reset color

      console.log("Restarting from Late Screen"); // Debugging
    }
    // return false; // Optional: Remove or keep
  }
}

function touchStarted() {
  mousePressed(); // Use the same logic
  return false; // Prevent default browser touch behavior
}
