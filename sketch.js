var rows = 20;
var cols = 20;
var distanceX = 30;
var distanceY = 30;

function setup() {
    createCanvas(600, 600);
    generatePattern();
}

function generatePattern() {
    background(255);
    rectMode(CENTER);
    noStroke();

    for (var r = 0; r < rows; r++) {
        for (var c = 0; c < cols; c++) {
            var xPos = c * distanceX;
            var yPos = r * distanceY;
            var size = random(10, 30);
            var shape = floor(random(0, 3));

            fill(random(100, 255), random(100, 255), random(100, 255), random(180, 220));
            switch (shape) {
                case 0: // Square
                    rect(xPos, yPos, size, size);
                    break;
                case 1: // Triangle
                    triangle(xPos - size / 2, yPos + size / 2, xPos + size / 2, yPos + size / 2, xPos, yPos - size / 2);
                    break;
                case 2: // Circle
                    ellipse(xPos, yPos, size, size);
                    break;
            }
        }
    }
}

