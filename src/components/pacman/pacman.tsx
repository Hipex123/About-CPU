let posX: number;
let posY: number;
let currPosX: number;
let currPosY: number;

export function getCursorPos(event: MouseEvent)
{
    posX = event.clientX;
    posY = event.clientY;
    //console.log(`${posX}, ${posY}`);
}

export function chase(image: SVGSVGElement, startX: number, startY: number) {
    //currPosX = startX;
    //currPosY = startY;
    
    /*
    if (posX < currPosX) {
        currPosX -= 1;
    }
    */
    //console.log(1);
    //image.setAttribute("transform", `translate(${currPosX}, ${currPosY})`);
    //image.setAttribute("transform", `translate(${startX}, ${startY})`);
    //image.setAttribute("transform", `translate(${posX}, ${posY})`);
}

export function getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min) + min);
}