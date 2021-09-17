var tela= 1;
var largura= 200;
var altura= 50;
var xMenu= 200;
var yMenu1= 85;
var yMenu2= 145;
var yMenu3= 205;
var u= 15;
var larguralk=100;
var alturalk=40;
var yMenu4=260;
var xlike=70;
var xlike1=190;
var xlike2=310;
var xlike3=430;
var ylike=300;
var xlado=450
var xVolta=450
 xb = 100; 
  yb1 = 150; 
  yb2 = 250; 
  yVoltar = 340; 
  xVoltar = 65; 
  larguraB = 200; 
  larguraVoltar = 100;
  alturaVoltar = 40;
  alturaB = 60; 
  suavizaB = 12; 

let img;
function preload() {
  acertou=loadImage("acertou.jpeg")
  errou=loadImage('errou.jpeg')
  cubo=loadImage("cubo.jpeg")
  info=loadImage("info.jpeg")
  perfil=loadImage("perfil.jpeg")
  cred=loadImage("cred.jpeg")
  bola=loadImage("bola.jpeg")
  irru=loadImage("irru.jpeg")
  oi=loadImage('oi.jpeg')
  fim=loadImage("fim.jpeg")
}

function setup() {
  createCanvas(600,400);
}

function draw() {
  textStyle(ITALIC);
  // menu do jogo
  if(tela==1){
    background(180,190,255,180);
    image(perfil, 300,200,600,400);
    imageMode(CENTER);
    // menu com 3 opções 
    //iniciar 
    textAlign(CENTER);
    textSize(20);
    
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu1 && mouseY< yMenu1 + altura){
    fill(220,290,250,240);
    rect(xMenu, yMenu1,largura,altura,u);
      if (mouseIsPressed) {
        tela=2
      }
    
    }
   
    fill(0);
    text("Iniciar", 300,120);
    
    //informações
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu2 && mouseY< yMenu2 + altura){
    fill(220,290,250,240);
    rect(xMenu, yMenu2,largura,altura,u);
      if (mouseIsPressed) {
        tela=3
      }
    }
    
    fill(0);
    text("Informações", 300,180);
    
    
    // créditos
    if(mouseX> xMenu && mouseX< xMenu + largura && mouseY> yMenu3 && mouseY< yMenu3 + altura){
    fill(220,290,250,240);
    rect(xMenu, yMenu3,largura,altura,u);
      if (mouseIsPressed) {
        tela=4
    }
    }
    fill(0);
    text("Créditos", 300,240);
    
    
  }
  // jogo code
     else if( tela==2){
       background(180,190,255,180);
     image(cubo,300,200,600,400);
     imageMode(CENTER);
     if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVolta && mouseX < xVolta+larguraVoltar ){
      fill(220,290,250,240);
        rect(xVolta,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
}
     }
       textSize(18);
    fill(0);
    text("Voltar",xVolta+50,yVoltar+25)
       
       
       if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=5
    
  }
    }
  textSize(18);
   fill(0);
   text("Quadrado", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=7
       }
     }
     textSize(18);
   fill(0);
   text("Cone", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=7
        }
     }
     textSize(18);
   fill(0);
   text("Esfera", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=7
        }
     }
      textSize(18);
   fill(0);
   text("Triângulo", xlike3+50, ylike+0)
     }
  // informação code
   if( tela==3){
     background(180,190,255,180);
                image(info,300,200,600,400);
                imageMode(CENTER);
  if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    
    }
   
    textSize(18);
    fill(0);
    text("Voltar",xVoltar+50,yVoltar+25)
   }
  //créditos code
   else if(tela==4){
   background(250,170);
     image(cred, 300,200,600,400);
    imageMode(CENTER);
      if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Voltar",xVoltar+50,yVoltar+25)

   }
  //telaAcertou5
  if(tela==5){
    background(140,290,280,290)
    image(acertou,300,200,600,400);
    imageMode(CENTER);
    
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela=6; 
      }
}
    textSize(18);
    fill(0);
    text("Avançar",xVoltar+50,yVoltar+25)
  }
  //telaErrou
if(tela==7){
  background(140,270,300,170)
  image(errou,300,200,600,400)
  imageMode(CENTER)
  
  if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =2; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Voltar",xVoltar+50,yVoltar+25)
}
  if(tela==6){
    background(140);
    image(bola,300,200,600,400);
    imageMode(CENTER);
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=9
    
  }
    }
  textSize(18);
   fill(0);
   text("Triângulo", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=9
       }
     }
     textSize(18);
   fill(0);
   text("Retângulo", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=8
        }
     }
     textSize(18);
   fill(0);
   text("Círculo", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=9
        }
     }
      textSize(18);
   fill(0);
   text("Cone", xlike3+50, ylike+0)
  }
  //tela9para voltar
  if(tela==9){
    background(190,230,240,190)
    image(errou,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =6; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Voltar",xVoltar+50,yVoltar+25)
  }
  //tela8
  if(tela==8){
    background(140)
    image(acertou,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =10; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Avançar",xVoltar+50,yVoltar+25)
  }
  //tela10perguntas
  if(tela==10){
    background(140)
    image(irru,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=11
    
  }
    }
  textSize(18);
   fill(0);
   text("Quadrado", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=11
       }
     }
     textSize(18);
   fill(0);
   text("Círculo", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=11
        }
     }
     textSize(18);
   fill(0);
   text("Triângulo", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=12
        }
     }
      textSize(18);
   fill(0);
   text("Cone", xlike3+50, ylike+0)
 }
  if(tela==11){
    background(190,230,240,190)
    image(errou,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =10; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Voltar",xVoltar+50,yVoltar+25)
  }
  
  if(tela==12){
    background(140)
    image(acertou,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =13; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Avançar",xVoltar+50,yVoltar+25)
  }
  if(tela==13){
    background(140)
    image(oi,300,200,600,400)
    imageMode(CENTER)
    
    if(mouseX> xlike && mouseX< xlike + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike, ylike-20,larguralk,alturalk,u);
  if(mouseIsPressed){
    tela=14
    
  }
    }
  textSize(18);
   fill(0);
   text("Retângulo", xlike+50, ylike+0)
     
     if(mouseX> xlike1 && mouseX< xlike1 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike1, ylike-20,larguralk,alturalk,u);
       if(mouseIsPressed){
         tela=15
       }
     }
     textSize(18);
   fill(0);
   text("Cone", xlike1+50, ylike+0)
     
      if(mouseX> xlike2 && mouseX< xlike2 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike2, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=15
        }
     }
     textSize(18);
   fill(0);
   text("Triângulo", xlike2+50, ylike+0)
     
      if(mouseX> xlike3 && mouseX< xlike3 + larguralk && mouseY> yMenu4 && mouseY< yMenu4 + alturalk){
    fill(220,290,250,240);
    rect(xlike3, ylike-20,larguralk,alturalk,u);
        if(mouseIsPressed){
          tela=15
        }
     }
      textSize(18);
   fill(0);
   text("Quadrado", xlike3+50, ylike+0)
 }
  if(tela==15){
    background(190,230,240,190)
    image(errou,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =6; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Voltar",xVoltar+50,yVoltar+25)
}
  if(tela==14){
    background(190,230,240,190)
    image(fim,300,200,600,400)
    imageMode(CENTER)
    if ( mouseY > yVoltar && mouseY < yVoltar + alturaVoltar && mouseX > xVoltar && mouseX < xVoltar+larguraVoltar ){
      
      fill(220,290,250,240);
        rect(xVoltar,yVoltar,larguraVoltar,alturaVoltar,suavizaB);
      if(mouseIsPressed){
        tela =1; 
      }
    }
  
    textSize(18);
    fill(0);
    text("Início",xVoltar+50,yVoltar+25)
}
}