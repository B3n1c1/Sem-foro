cores = []

cores[0] = "grey"
cores[1] = "red"
cores[2] = "yellow"
cores[3] = "green"

vermelho = true;
amarelo = false;
verde = false;

cor=1
posi=150

tempo = 0;

function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(220);
  
  //semáforo
  push()
  fill("black")
  rect(200, 100, 100, 300, 50)
  pop()
  
  //luzes
  fill(cores[0])
  circle(250, 150, 60)
  circle(250, 250, 60)
  circle(250, 350, 60)
  
  //automatizando
  tempo++;
  text(tempo, 20, 30)
  
  if(tempo>300) {
    tempo = 0;
  }
  
  if(tempo>=175 && tempo<=300) {
    vermelho = true;
    amarelo = false;
    verde = false;
    
  }
  
  if(tempo>=125 && tempo<175) {
    vermelho = false;
    amarelo = false;
    verde = true;
    
  }
  
  if(tempo>=0 && tempo<125) {
    vermelho = false;
    amarelo = true;
    verde = false;
    
  }
  
  
  if(vermelho==true) {
     Cor=1
     posi = 150
     }
  
  if(amarelo==true){
    CORNERS=2
    posi = 250
  }
  
  if(verde==true){
    Cor=3
    posi = 350
    
  }
  
  
  fill(cores [cor])
  circle(250, posi, 60)
  
}
