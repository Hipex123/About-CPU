"use client";

import styles from "../components/pacman/pacman.module.css";
import React, { useEffect } from "react";
import { getCursorPos, chase, getRandomInt} from "../components/pacman/pacman";
import { useRef } from "react";

export default function ClientLayout({children}: {children: React.ReactNode}) {
    const svgRef = useRef(null);

    const startX = getRandomInt(800, 1700);
    const startY = getRandomInt(0, 500);

    useEffect(() => {
        const tick = () => {
            if (svgRef.current) {
                chase(svgRef.current, startX, startY);
            }
            requestAnimationFrame(tick);
        };

        window.addEventListener("mousemove", getCursorPos);
        requestAnimationFrame(tick);

        return () => {
            window.removeEventListener("mousemove", getCursorPos);
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
                style={{transform: `translate(${startX}px, ${startY}px)`}}>
                <defs
                    id="defs1" />
                <g
                    id="g1">
                    <image
                    width="13"
                    height="13"
                    preserveAspectRatio="none"
                    style={{ imageRendering: "optimizeSpeed" } as any}
                    xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA0AAAANCAYAAABy6+R8AAAACXBIWXMAAA7DAAAOwwHHb6hkAAAA&#10;T0lEQVQoFWNkQAP//zP8RxNiYGRkYEQWg3OwKUZWCGLDNIM1EaMBZgBIIxOMQwrNSIotMIPJsmmQ&#10;a6JjkMOCkZigR0kRMI0gGptmmGKYOgCKhBURRg4NdgAAAABJRU5ErkJggg==&#10;"
                    id="image1" />
                </g>
            </svg>
        </>
    );
}