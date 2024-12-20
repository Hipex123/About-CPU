"use client"

import { useEffect } from "react";

export default function Quiz() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//embed.typeform.com/next/embed.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);
    
    return (
        <main>
            <h1>Quiz</h1>

            <div data-tf-live="01JD4NF6K59QJDW743ZZMY2313"></div>
        </main>
    );
}
