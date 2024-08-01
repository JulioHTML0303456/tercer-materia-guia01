let img;
let negro = 0;
let gris1 = 64;
let gris2 = 128;
let gris3 = 192
let gris4 = 255

function preload() {
    img=loadImage('1.png');  
}

function setup() {
    createCanvas(img.width, img.height);

    for (let y = 0; y < img.height; y++) {
        for (let x = 0; x < img.width; x++) {
            let px = img.get(x, y);
          if (brightness(px) < gris1 ){
            
              img.set(x, y, negro)
              
          }else
          if (brightness(px) < gris2 ){
            
              img.set(x, y, gris1)
              
          }else
          if (brightness(px) < gris3 ){
            
              img.set(x, y, gris2)
              
          }else
          if (brightness(px) < gris4 ){
            
              img.set(x, y, gris3)
              
          }else
          if (brightness(px) == gris4 ){
            
              img.set(x, y, gris4)
              
          }
        }
    }
    img.updatePixels();
    image(img, 0, 0);
  
}