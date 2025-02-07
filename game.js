let myX = 0,
    myY = 0;
let tX=750,tY=550,hX=0,hY=0,posoka=0,brudar=0,jivoti=5,igrachX2=770,igrachY2=0,toiav=0,todesen=0,brupd=2000;
//posoka 0 - na gore i lavo
//posoka 1 - na dolo i lavo
//posoka 2 - na dolo i dasno
//posoka 3 - na gore i dasno

//pri update otgore: posoka 0/1
//pri update otlqvo: posoka 1/2
//pri update otdolo: posoka 2/3
//pri update otdqsno: posoka 3/0

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
 //proverka za izpusnato topche
 if(brupd){
        brupd=brupd-1;
        igrachY2=igrachY2+1;
        if(igrachY2>600-90)igrachY2=600-90;

        if(tX<0){
            if(tY+50<hY){//togava topcheto e nad hilkata
                jivoti=jivoti-1;
                //todesen=todesen+1;
                console.log("Izpusna topcheto!","tochki_desen=",todesen);}

                if(tY>hY+90){
                    // jivoti=jivoti-1;
                    todesen=todesen+1;

                    console.log("Izpusna topcheto!","jivoti=",jivoti,"tochkidesen=",todesen);}
            
            
        }

        //za lqv igrach
        if(tX+50>800){console.log("udar ot dqsno");
            if(tY+50<igrachY2){
                jivoti=jivoti-1;
                //toiav=toiav+1;
                console.log("Izpusna topcheto!","tockilav",toiav);}

                if(tY>igrachY2+90){
                // jivoti=jivoti-1;
                toiav=toiav+1;
                    console.log("Izpusna topcheto!","tochkidesen=",toiav);}
            
            
        }


        if(posoka ==0){tX=tX-2;
                        tY=tY-2;
                        }
        if(posoka ==1){tX=tX-2;
                        tY=tY+2;
                        }
        if(posoka ==2){tX=tX+2;
                        tY=tY+2;
                        }
        if(posoka ==3){tX=tX+2;
                        tY=tY-2;
                        }

        if(tY<0)
            if(posoka==0)
                {posoka=1;
                    brudar=brudar+1;}
            else 
            {posoka=2;
                brudar=brudar+1; }
        if(tX<0)
            if(posoka==1){posoka=2;
                brudar=brudar+1; }
            else 
            {posoka=3;
                brudar=brudar+1; }
        if(tY+50>600)
            if(posoka==1){posoka=0; 
                brudar=brudar+1;}
            else 
            {posoka=3;
                brudar=brudar+1; }
        if(tX+50>800){
            if(posoka==3){posoka=0; }
            else 
            {posoka=1;}
            brudar=brudar+1;}//ili taka

        console.log("brudari="+brudar);

        //if(tY<0){tY=550;}
        //if(tX<0){tX=750;}
        hY=mouseY;
        } 
        else {if(toiav>todesen)console.log("lav pecheli");
                if(toiav<todesen)console.log("desen pecheli");

            if(toiav==todesen) console.log("raven rezultat");}
}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backCake, 0, 0, 800, 600);
    drawImage(powerupGreen, tX, tY, 50, 50);
    drawImage(paddle, hX, hY, 30, 90);
    drawImage(paddle, igrachX2, igrachY2, 30, 90);

    if(jivoti>4){drawImage(heart,300,20,30,30);}
    if(jivoti>3){drawImage(heart,300+40,20,30,30);}
    if(jivoti>2){drawImage(heart,340+40,20,30,30);}
    if(jivoti>1){drawImage(heart,380+40,20,30,30);}
    if(jivoti>0){drawImage(heart,420+40,20,30,30);}
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    igrachY2=igrachY2-60;
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
