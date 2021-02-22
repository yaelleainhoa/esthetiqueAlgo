// -------------------
//  Parameters and UI
// -------------------

const gui = new dat.GUI()
const params = {
    Ellipse_Size: 30,
    Download_Image: () => save(),
}
gui.add(params, "Ellipse_Size", 0, 100, 1)
gui.add(params, "Download_Image")

// -------------------
//       Drawing
// -------------------


/*
function draw() {
    background(0)
    ellipse(mouseX, mouseY, params.Ellipse_Size)
}*/

///Maison
/*function draw(){
    background('#daf5e1')
    rectMode(CENTER)
    noStroke()
    fill('#c5d9ca')
    rect(width/2, height/2+100, 400, 300)
    fill('#aabdaf')
    triangle(width/2-200, height/2-50, width/2, 80, width/2+200, height/2-50)
    fill('#aabdaf')
    rect(width/2, height/2+150, 100, 200)
}*/


///Misckey
/*function draw(){
    background('#aabdaf')
    ellipse(width/2, height/2, 300,300)
    ellipse(width/2-159, height/2-159, 150, 150)
    ellipse(width/2+159, height/2-159, 150, 150)
}*/


//face
function draw(){
    background('#a16e68')
    strokeWeight(0)
    fill('#faead7')
    ellipse(width/2, height/2, 220,250)
    ellipse(width/2, height/2+10, 225,250)
    strokeWeight(1)
    fill('white')
    ellipse(width/2-50, height/2-10, 70,70)
    ellipse(width/2+50, height/2-10, 70,70)
    fill('black')
    ellipse(width/2-50-10, height/2-10, 50,50)
    ellipse(width/2+50-10, height/2-10, 50,50)
    strokeWeight(2)
    line(width/2-5, height/2+40, width/2+5, height/2+40)
    /*line(width/2-3, height/2+40, width/2+3, height/2+40)   
    line(width/2-7, height/2+61, width/2, height/2+60)
    line(width/2, height/2+60, width/2+7, height/2+61)*/
    fill('#ffbfa6')
    strokeWeight(0)
    ellipse(width/2-60, height/2+40, 45, 20)
    ellipse(width/2+60, height/2+40, 45, 20)
}

// -------------------
//    Initialization
// -------------------

function setup() {
    p6_CreateCanvas()
}

function windowResized() {
    p6_ResizeCanvas()
}