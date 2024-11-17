"use client";

import styles from "../components/pacman/pacman.module.css";
import React, { useEffect, useState } from "react";
import { chase, getCursorPos, setStartPos, getRandomInt } from "../components/pacman/pacman";
import { useRef } from "react";

let wayIndex: { [way: number]: number } = {};
wayIndex[0] = 0;
wayIndex[1] = 3;
wayIndex[2] = 1;
wayIndex[3] = 5;
wayIndex[4] = 7;


export default function ClientLayout({children}: {children: React.ReactNode}) {
    const svgRef = useRef(null);

    const [posX, setPosX] = useState(1000);
    const [posY, setPosY] = useState(500);

    let lastTime = 0;

    let pacImages = {
    full: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAT0lEQVQoFWNkQAP//zP8RxNiYGRkYEQWg3OwKUZWCGLDNIM1EaMBZgBIIxOMQwrNSIotMIPJsmmQa6JjkMOCkZigR0kRMI0gGptmmGKYOgCKhBURRg4NdgAAAABJRU5ErkJggg==",
    rightOpen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAZUlEQVQoFYWSUQrAMAhDdez+V3akw+JKkvmjWJ8JbTNIVEWd7czI7t1dILPhed71ph0wVQBeTat8AphbSkqFAYCkkgIk5AAJKbsAENKeA3+vnFmVSq8R/uBbCUPW0vhGH8huH9AD/SUeFNBCLRUAAAAASUVORK5CYII=",
    rightMidOpen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAYklEQVQoFb2SSw4AIQhDqZn7XxmDSU3HD2E240YhfQVR2LLczZeUAQbNzeAkVmGcCQ+oAtAgwMbgy45qFbYW5k9WQYWq26CbUKG0vZtBCr3c5a1+HDlbqIyed5zfKIMppqYDYucbHCQldGAAAAAASUVORK5CYII=",
    leftOpen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAbklEQVQoFY2QUQrAMAhDdez+V3ZkLBKlyvyotuZFqdsXERasmd3NWWvOxxNEYYcTguAveNENuTtqT+syiY1pIk3LJEJs8t7zEYJoA0doWhGGR2gD3i1waEyArlsmTYCaos4v3wCdAujGMUUXU/cAxcUbGgkJLKAAAAAASUVORK5CYII=",
    leftMidOpen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAXElEQVQoFaWSUQoAIAhDtfvf2TBYrChZ1E8pe5tIbtuJsNha5m7OvVmcxCzMN+ABKQAMEmwoXu45XkJq4gJxWmVwhSqDKyQnVUJOHkmqOMH/lStpy4/geU8wxNB1PT0hAYFU01IAAAAASUVORK5CYII=",
    upOpen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAXklEQVQoFb2RQQ4AIQgDYf//Z0w3KcGK0ZNeCLRjI5q9Oh5hgTB381MovR+NHLDXWvWEYKpChXQ+QR2oADwLVMEOgP4/fifCoAcLa5PUqH2u+SaN35IQb+tgmul5VwdyASb0Jbd7IQAAAABJRU5ErkJggg==",
    upMidOpen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAZUlEQVQoFaWPgQoAIQhDtf//Z2PBDlkLigui1LetIv6sqihs56GzAegEqwG5JepDDtjTGv3hmhS4E/yW5EDtWRHTeV6JFNI6T24K9jpRvAgzI+2fuqu7r6TbNKSA/UR0dE8lTGYC6ckv7F8xFIAAAAAASUVORK5CYII=",
    downOpen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAWUlEQVQoFb2PUQoAIAhDtfvf2Vhg1FIqiPwx9c2ZyK9QNjIT456qTFwvIjgTN9GJwBfAtXhxkzVzwcZsFjr5xz3zFYuIQa6xYBJFACDudxEPAI+xm4/su3cFrhYPJD3qBfAAAAAASUVORK5CYII=",
    downMidOpen: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA&#10;YklEQVQoFZWOUQoAIAhDtfvf2TBYjKVg/ehsb+omL8JCRuZuzrMrKjMbswd8oAmAgAQXxE/1ny0I&#10;bjfhfhi5thCbtC8hbEEdQWpSvbo0NUKn/zlPQ1QnfKDqA8lcpz5mbr8BsVAMLfEG6rQAAAAASUVO&#10;RK5CYII=&#10;"
    };

    const keys = Object.keys(pacImages) as (keyof typeof pacImages)[];

    const [animFrame, setAnimFrame] = useState(0);
    let [movWay, setMovWay] = useState(0);

    let animIndexCouter = 0;
    let baseAnimIndex = [0, 2, 1, 2];

    useEffect(() => {
        if (typeof window !== "undefined") {
            const randNumX = getRandomInt(window.screen.width/1.5, window.screen.width/1.2);
            const randNumY = getRandomInt(window.screen.height/4, window.screen.height/1.5);

            setPosX(randNumX);
            setPosY(randNumY);
            setStartPos(randNumX, randNumY);
        }

        const tick = (currentTime: number) => {
            if (lastTime) {
                const dt = (currentTime - lastTime) / 16.67;
                const [newPosX, newPosY, newMovWay] = chase(dt);
                setPosX(newPosX);
                setPosY(newPosY);
                movWay = newMovWay;
            }
            lastTime = currentTime;
            requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", getCursorPos);
        requestAnimationFrame(tick);

        const animation = setInterval(() => {
            if (baseAnimIndex[animIndexCouter] === 0 || movWay < 0) {
                setAnimFrame(0);
            }
            else {
                setAnimFrame(baseAnimIndex[animIndexCouter]+movWay);
            }

            animIndexCouter = (animIndexCouter + 1) % baseAnimIndex.length;
        }, 100);

        return () => {
            window.removeEventListener("mousemove", getCursorPos);
            clearInterval(animation);
        };
    }, []);

    return (
        <>
            {children}

            <svg
                version="1.1"
                id="svg1"
                width="130"
                height="130"
                viewBox="0 0 13 13"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                xmlns="http://www.w3.org/2000/svg"
                ref={svgRef}
                className={styles.pacman}
                style={{transform: `translate(${posX}px, ${posY}px)`}}>
                <defs
                    id="defs1" />
                <g
                    id="g1">
                    <image
                    width="13"
                    height="13"
                    preserveAspectRatio="none"
                    href={pacImages[keys[animFrame]]}
                    id="image1" />
                </g>
            </svg>
        </>
    );
}