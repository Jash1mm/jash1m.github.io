function setup() {
    createCanvas(950, 600);
}
function draw () {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 30, 30);
}