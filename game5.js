// 1. Suzdavame promenlivi
let myX = 0,
    myY = 0,
    sno1y = 0,
    sno2y = 0,
    sno3y = 0,
    sno4y = 0,
    sno5y = 0;

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    myY = myY + (mouseY - myY) / 10;
    sno1y = sno1y + 5;
    sno2y = sno1y;
    sno3y = sno1y;
    sno4y = sno1y;
    sno5y = sno1y;

}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backAlien, 0, 0, 800, 600);
    drawImage(barrelGrey, myX, myY, 60, 80);
    drawImage(box, 100, sno1y, 60, 80);
    drawImage(box, 200, sno2y, 60, 80);
    drawImage(box, 300, sno3y, 60, 80);
    drawImage(box, 400, sno4y, 60, 80);
    drawImage(box, 500, sno5y, 60, 80);
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
