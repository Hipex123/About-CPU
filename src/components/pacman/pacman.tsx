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

        currPosX += Math.sign(dx) * (Math.abs(dx) < speed ? 1 : speed);
        movementWay = Math.sign(dx) === 1 ? 0 : 2;

    }
    else if (Math.abs(dy) > treshold) {
        if (currPosY > 60) {

            currPosY += Math.sign(dy) * (Math.abs(dy) < speed ? 1 : speed);
            movementWay = Math.sign(dy) === 1 ? 6 : 4;

        }
        else if (mouseY > 100) {
            currPosY += 1;
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
    mouseY = event.clientY-50;
    //console.log(`${mouseX}, ${mouseY}`);
}

export function setStartPos(startX: number, startY: number){
    currPosX = startX;
    currPosY = startY;
}

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}