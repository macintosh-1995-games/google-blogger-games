// 1. Suzdavame promenlivi
let myX = 0,
    myY = 700,
    paddley = 0
    paddlex = 0
    notex = 800
    notey = 0

function update() {
    // 2. Kodut tuk se izpulnqva 100 puti v sekunda
    myX = myX + (mouseX - myX) / 10;
    //myY = myY + (mouseY - myY) / 10;
    notex = notex - 1
    //if (notey<400)
        //notey=200+notey
    //else notey = 0
    if (notex <= 0) {
        if (notey < 400) {
            notey = notey + 200;
            notex = 800;
        } else {
            notex = 800;
            notey = 0;
        }
    }
    

}

function draw() {
    // 3. Tuk naprogramirai kakvo da se risuva
    drawImage(backDesert, 0, 0, 800, 600);
    drawImage(note, notex, notey, 200, 200);
    drawImage(paddle, paddlex, paddley )
}

function keyup(key) {
    // Pechatai koda na natisnatiq klavish
    console.log("Pressed", key);
    if (paddley < 400) paddley = 200 + paddley
    else paddley = 0

}

function mouseup() {
    // Pri klik - pokaji koordinatite na mishkata
    console.log("Mouse clicked at", mouseX, mouseY);
}
