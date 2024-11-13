"use client";

import styles from "../components/pacman/pacman.module.css";
import { useEffect } from "react";
import { getCursorPos, chase, getRandomInt} from "../components/pacman/pacman";
import Pac from "./images/pacmanCircleFrame.svg";
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
            <Pac
                ref={svgRef}
                className = {styles.pacman}
                style={{ transform: `translate(${startX}px, ${startY}px)` }}
            />
        </>
    );
}