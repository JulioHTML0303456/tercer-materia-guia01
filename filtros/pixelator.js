let img ;

function preload(){
  img = loadImage('arbol.png')
  
}

function setup() { 

  
  createCanvas(img.width,img.height);
  
  let rs = 6;
  
  for(let y=0; y < img.height; y += rs){
    
    for(let x = 0; x < img.width; x += rs){
      px = img.get(x, y);
      
      for(let i=0; i < rs; i++){
        
        for(let j=0 ; j < rs; j++){
          let auxX = x + j; 
          let auxY = y + i;
          
          img.set(auxX, auxY, px)
        }
      }
    }
    img.updatePixels()
    image(img, 0, 0);
  }
}

