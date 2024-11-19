import Image from "next/image";

export default function Multimedia() {
    return (
        <main>
            <h1>Multimedia</h1>
            <div className="imageContainer">
                <Image src="./cpu1.jpg" alt="CPU image 1" layout="responsive" width={700} height={500} />
                <Image src="./cpu2.jpg" alt="CPU image 2" layout="responsive" width={700} height={500} />
                <Image src="./cpu3.jpg" alt="CPU image 3" layout="responsive" width={700} height={500} />
                <Image src="./cpu4.jpg" alt="CPU image 4" layout="responsive" width={700} height={500} />
                <Image src="./cpu5.jpg" alt="CPU image 5" layout="responsive" width={700} height={500} />
            </div>
        </main>
    );
}