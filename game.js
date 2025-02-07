let myX = 0,myY =520,updates=0,vragX=450,vragY=0,
    pX=1000,pY=1000,strelqmli=false,skorost=2,razmer=50,jivoti=5;

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
if(jivoti){
    myX = mouseX;
     pY=pY-2;//pY-=2; pY=pY+1 - pY++; pY-- 
   vragY+=skorost;//vragY=vragY+3;
    if(vragY>=600){vragY=0;
                   vragX=randomInteger(800-50);
                  if(skorost>2)skorost=skorost-1;
                  if(razmer<100)razmer=razmer+15;
                  jivoti=jivoti-1;
                  console.log("jivoti="+jivoti);}//prerajda se
    
   //if(pX>vragX && pX<vragX+50 && pY>vragY && pY<vragY+50)
   //{ console.log("Ima sblasak");} 
       //или
    
if(strelqmli && areColliding(vragX,vragY,razmer,razmer,pX,pY,20,40)) 
       {console.log("Ima sblasak");
        vragY=0;
        vragX=randomInteger(800-50); 
        if(skorost<10)skorost=skorost+1;
        if(razmer>15)razmer=razmer-5;
       jivoti=jivoti+1;
       console.log("Ima sblasak, jivoti= "+jivoti);}

}}
function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backCake, 0, 0, 800, 600);
    drawImage(jelly[2], myX, myY, 80, 80);
    drawImage(jelly[0], vragX, vragY, razmer, razmer);
    if(strelqmli)drawImage(rocket[0], pX, pY, 20, 40);
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
    pX=myX;
    pY=myY;
    strelqmli=true;
}