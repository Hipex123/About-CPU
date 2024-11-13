let mouseX: number;
let mouseY: number;
let currPosX: number;
let currPosY: number;

export function chase(image: SVGSVGElement) {
    const speed = 1;
    const treshold = 10;

    const dx = mouseX - currPosX;
    const dy = mouseY - currPosY;

    if (Math.abs(dx) > treshold) {
        currPosX += Math.sign(dx) * speed;
    }
    else if (Math.abs(dy) > treshold) {
        currPosY += Math.sign(dy) * speed;
    }

    console.log(`Mouse POS: ${mouseX}, ${mouseY}
        \nPac POS: ${currPosX}, ${currPosY}`);
    
    return [currPosX, currPosY];
}

export function getCursorPos(event: MouseEvent) {
    mouseX = event.clientX;
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