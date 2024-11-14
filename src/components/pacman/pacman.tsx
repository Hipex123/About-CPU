let mouseX: number;
let mouseY: number;
let currPosX: number;
let currPosY: number;

export function chase() {
    let movementWay = 0;
    const speed = 2;

    const treshold = 0;

    const dx = mouseX - currPosX;
    const dy = mouseY - currPosY; 

    document.body.style.cursor = "auto";

    if (Math.abs(dx) > treshold) {

        currPosX += Math.abs(dx) < speed ? 1 : Math.sign(dx) * speed;

        if (Math.sign(dx) == 1){
            movementWay = 0;
        }
        else {
            movementWay = 2;
        }
    }
    else if (Math.abs(dy) > treshold) {
        if (currPosY > -250) {

            currPosY += Math.sign(dy) * (Math.abs(dx) < speed ? 1 : Math.sign(dx) * speed);

            if (Math.sign(dy) == 1){
                movementWay = 6;
            }
            else {
                movementWay = 4;
            }
        }
        else if (mouseY > -200) {
            currPosY += 1
        }
        else {
            movementWay = -100;
        } 
    }

    if (mouseX == currPosX && mouseY == currPosY) {
        movementWay = -100;
        document.body.style.cursor = "none";
    }

    /*
    console.log(`Mouse POS: ${mouseX}, ${mouseY}
        \nPac POS: ${currPosX}, ${currPosY}`);
    */
    return [currPosX, currPosY, movementWay];
}

export function getCursorPos(event: MouseEvent) {
    mouseX = event.clientX-60;
    mouseY = event.clientY-365;
    //console.log(`${posX}, ${posY}`);
}

export function setStartPos(startX: number, startY: number){
    currPosX = startX;
    currPosY = startY;
}

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}