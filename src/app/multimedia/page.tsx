import Image from "next/image";

export default function Multimedia() {
    return (
        <main style={{ fontFamily: "Arial, sans-serif", padding: "1vw" }}>
            <h1 style={{ textAlign: "left" }}>Multimedia Galerija</h1>
            <p style={{ textAlign: "left", maxWidth: "800px", marginLeft: "2.4vw", marginBottom: "9vh"}}>
                Spodaj boste našli niz slik, povezanih s procesorjem, z nekaj opisi, ki vam bodo pomagali razumeti njihov pomen. 
            </p>
            <div className="imageContainer">
                <figure>
                    <Image src="./cpu1.jpg" alt="CPU Close-Up" layout="responsive" width={700} height={500} />
                    <figcaption>Najsodobnejši CPE, vgrajen v matično ploščo, izžareva moč in natančnost. Možgani vašega stroja, pripravljeni na računanje.</figcaption>
                </figure>
                <figure>
                    <Image src="./cpu2.jpg" alt="CPU Assembly" layout="responsive" width={700} height={500} />
                    <figcaption>Diagram Von Neumannove arhitekture – načrt za sodobno računalništvo. Vnos, proces, izhod – vse je tukaj.</figcaption>
                </figure>
                <figure>
                    <Image src="./cpu3.jpg" alt="CPU on Motherboard" layout="responsive" width={700} height={500} />
                    <figcaption>Silicijeva matrica od blizu, ki razkriva zapleten labirint vezja CPE. Tukaj plešejo milijarde tranzistorjev.</figcaption>
                </figure>
                <figure>
                    <Image src="./cpu4.jpg" alt="Stacked CPUs" layout="responsive" width={700} height={500} />
                    <figcaption>Krmilna enota v akciji: dekodiranje navodil, upravljanje signalov in ohranjanje orkestra procesorja v popolni sinhronizaciji.</figcaption>
                </figure>
                <figure>
                    <Image src="./cpu5.jpg" alt="CPU with Cooling System" layout="responsive" width={700} height={500} />
                    <figcaption>Preprosta predstavitev CPE-ja, ki poudarja njegove ključne komponente: ALU, krmilno enoto, pomnilnik in stalni pretok podatkov.</figcaption>
                </figure>
            </div>
        </main>
    );
}
