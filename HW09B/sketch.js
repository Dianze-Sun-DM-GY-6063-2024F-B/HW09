let mCamera;

function setup() { 
  createCanvas(windowWidth, windowHeight);
  mCamera = createCapture(VIDEO);
  mCamera.size(width / 2, height / 2);
  mCamera.hide();
}

function draw() {
  background(0);
  mCamera.loadPixels();

  let rectDim = 50;
  noFill();
  for (let y = 0; y < height; y += rectDim) {
    for (let x = 0; x < width; x += rectDim) {
      let pixX = map(x, 0, width, 0, mCamera.width);
      let pixY = map(y, 0, height, 0, mCamera.height);
      let pixIdx = int(pixY) * mCamera.width + int(pixX);
      let p5Idx = 4 * pixIdx;

      let redVal = mCamera.pixels[p5Idx + 0];
      let greenVal = mCamera.pixels[p5Idx + 1];
      let blueVal = mCamera.pixels[p5Idx + 2];


      let brightnessVal = (redVal + greenVal + blueVal) / 3;

      let numCircles = map(brightnessVal, 0, 255, 1, 5); 
      let maxRadius = map(brightnessVal, 0, 255, 4, rectDim); 

      
      stroke(214, 242, 0);

      for (let i = 0; i < numCircles; i++) {
        let radius = map(i, 0, numCircles, 2, maxRadius);
        ellipse(x, y, radius * 2);
      }
    }
  }
}
