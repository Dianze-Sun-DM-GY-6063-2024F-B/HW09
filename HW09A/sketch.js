
let oImg;
let mImg;
let slider;
let texture=[];
function preload() {
  oImg = loadImage("../assets/mondriaan.jpg");
  mImg = loadImage("../assets/mondriaan.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  oImg.resize(0, height);
  mImg.resize(0, height);

  oImg.loadPixels();

  slider = createSlider(0, 255);
  slider.position((height * 5) / 4, height / 2);
  slider.size(320);
 
}

function draw() {
  let s= slider.value();
  mImg.loadPixels();
  for (let idx = 0; idx < mImg.pixels.length; idx+=4) {
    let r = mImg.pixels[idx + 0];
    let g = mImg.pixels[idx + 1];
    let b = mImg.pixels[idx + 2];
    let pixelIsR = r > 1.3 *g && r >  1.3*b && r >128;
    let pixelIsG = g> 1.8 * r && g > 0.4* b && g > 50;
    let pixelIsY = r > 1.2* b && g > 1.2* b && r > 128&&g>128;
    if (pixelIsR) {
      oImg.pixels[idx + 0]=89;
      oImg.pixels[idx + 1]=55+s/2;
      oImg.pixels[idx + 2]=191;
    }
    if (pixelIsG) {
      oImg.pixels[idx + 0]=255;
      oImg.pixels[idx + 1]=178;
      oImg.pixels[idx + 2]=77+s;
    }
    if (pixelIsY) {
      oImg.pixels[idx + 0]=222;
      oImg.pixels[idx + 1]=0+s;
      oImg.pixels[idx + 2]=0;
    }
  }
  oImg.updatePixels();

  image(oImg, 0, 0);
}

