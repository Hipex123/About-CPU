import Image from "next/image";

export default function Multimedia() {
    return (
        <main style={{ fontFamily: "Arial, sans-serif", padding: "1vw" }}>
            <h1 style={{ textAlign: "left" }}>Multimedia Gallery</h1>
            <p style={{ textAlign: "left", maxWidth: "800px", marginLeft: "2.4vw", marginBottom: "9vh"}}>
                Welcome to my multimedia showcase. Below, you'll find an array of CPU-related images with some descriptions to help you understand their significance. Geek out as much as you want!
            </p>
            <div className="imageContainer">
                <figure>
                    <Image src="./cpu1.jpg" alt="CPU Close-Up" layout="responsive" width={700} height={500} />
                    <figcaption>A state-of-the-art CPU embedded on a motherboard, radiating power and precision. The brains of your machine, ready to compute.</figcaption>
                </figure>
                <figure>
                    <Image src="./cpu2.jpg" alt="CPU Assembly" layout="responsive" width={700} height={500} />
                    <figcaption>A diagram of the Von Neumann architecture—the blueprint for modern computing. Input, process, output—it's all here.</figcaption>
                </figure>
                <figure>
                    <Image src="./cpu3.jpg" alt="CPU on Motherboard" layout="responsive" width={700} height={500} />
                    <figcaption>A silicon die close-up, exposing the intricate circuit maze of a CPU. This is where billions of transistors do their dance.</figcaption>
                </figure>
                <figure>
                    <Image src="./cpu4.jpg" alt="Stacked CPUs" layout="responsive" width={700} height={500} />
                    <figcaption>The control unit in action: decoding instructions, managing signals, and keeping the CPU's orchestra in perfect sync.</figcaption>
                </figure>
                <figure>
                    <Image src="./cpu5.jpg" alt="CPU with Cooling System" layout="responsive" width={700} height={500} />
                    <figcaption>A simple representation of a CPU, highlighting its key components: ALU, control unit, memory, and the constant flow of data.</figcaption>
                </figure>
            </div>
        </main>
    );
}