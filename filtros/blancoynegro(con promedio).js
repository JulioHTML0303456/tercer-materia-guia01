
let img;
let gris;

function preload() {
    img=loadImage('1.png'); 
}

function setup() {
    createCanvas(img.width, img.height);

    for (let y = 0; y < img.height; y++) {

        for (let x = 0; x < img.width; x++) {

            let px = img.get(x, y);

            gris = (max(px[0], px[1], px[2]) + min(px[0], px[1], px[2])) / 2
            img.set(x, y, gris);
        }
    }
    img.updatePixels();
    image(img, 0, 0);
  
}
