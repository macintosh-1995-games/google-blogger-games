// 1. Suzdavame promenlivi
let myX = 0,
    myY = 0,
    beex = 340,
    beey = 370;

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    //myX = myX + (mouseX - myX) / 10;
    //myY = myY + (mouseY - myY) / 10;
    beey = beey - 6
    //beex = beex - 5
    if(beey<=0)beey=370

}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backAlien, 0, 0, 800, 600);
    drawImage(flowerBlue, 370, 450, 70, 120);
    drawImage(bee, beex, beey, 100, 120);
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
