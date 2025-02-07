// 1. Suzdavame promenlivi
let myX = 370, myY = 250,tochki=0,jivoti=19,celrazmerX=50,celrazmerY=50;
let bombrazmer=40,bombaX=200,bombaY=400;
let bombaskorost=3,celskorost=2;
let brostava=0;

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myY=myY-2;
    //prowerka za dostigane na goren kraj i preravdane vcel-cherecha
 if(myY+celrazmerY<0)
                     {myX=myX;myY=randomInteger(800-celrazmerY);
                        if(celrazmerY<150){celrazmerY=celrazmerY+5;celrazmerX=celrazmerX+5;}}

  bombaY=bombaY-bombaskorost;
  if(bombaY+bombrazmer<0){bombaY=400;
    if(bombrazmer<120)bombrazmer=bombrazmer+5;
    bombaX=randomInteger(800-bombrazmer);}

  if(myY<-celrazmerY){myY=250; jivoti=jivoti-1;}

 // tuk che otchita udar ako e posochena pri wseki updat - 100 v ServiceWorker.
  /*if(mouseX>myX){
    if(mouseX<myX+50){
      if(mouseY>myY){
        if(mouseY<myY+50)
    tochki=tochki+1;console.log("Bravo"+ "Tochki="+tochki);
      }
    }
}*/

if(mouseX>myX){
    if(mouseX<myX+celrazmerX){
      if(mouseY>myY){
        if(mouseY<myY+celrazmerY){tochki=tochki+1;
                        console.log("Bravo"+ "Tochki="+tochki);
                                  
                   myY=250;myX=randomInteger(800-celrazmerX);//da se prerajda w sluchaina nadqsnost
     if(celrazmerY>5){celrazmerX=celrazmerX-5;celrazmerY=celrazmerY-5;
                   celskorost=celskorost+1;}
                        }} }}
//удар на бомбата с целта проверка
if(mouseX>bombaX){
    if(mouseX<bombaX+bombrazmer){
      if(mouseY>bombaY){
        if(mouseY<bombaY+bombrazmer){console.log("Ti grumna...");
           if(brostava<=0){jivoti=jivoti-1;
                            console.log("jivoti=" + jivoti);
                            bombaskorost=bombaskorost+1;
                            brostava=600; } 
     if(bombaX<70){bombaY=400;bombaX=randomInteger(800-bombrazmer);}}
      }}}
    brostava=brostava-1;}
function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backGrass, 0, 0, 800, 600);
    drawImage(cherry, myX, myY, celrazmerX, celrazmerY);
    if(brostava<=0)
        {drawImage(bomb, bombaX, bombaY, bombrazmer, bombrazmer);}
        else {
            if(randomInteger(2)==1)drawImage(bomb, bombaX, bombaY, bombrazmer, bombrazmer);}
        }




function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
