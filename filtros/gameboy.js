let img;

function preload() {
  img = loadImage('1.png');
}

function setup() {
  createCanvas(1920, 1080);
  let rs = 5;
  for (let x = 0; x < img.width; x += rs) {
    for (let y = 0; y < img.height; y += rs) {
      let px = img.get(x, y);
      let shine = (px[0]+px[1]+px[2])/3;
      if (shine < 60) {
        px = color("#081820")
      } else if (shine >= 60 && shine < 120) {
        px = color("#346856")
      } else if (shine >= 120 && shine < 180) {
        px = color("#88c070")
      } else {
        px = color("#e0f8d0")
      }
      for (let i = 0; i < rs; i++) {
        for (let j = 0; j < rs; j++) {
          let auxX = x + j;
          let auxY = y + i;
          img.set(auxX, auxY, px);
        }
      }
    }
  }
  img.updatePixels();
  image(img,0,0);
}