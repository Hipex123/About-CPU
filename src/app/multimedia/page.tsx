import Image from "next/image";

export default function Multimedia() {
    return (
        <main>
            <h1>Multimedia</h1>
          
            <Image src="/cpu1.jpg" alt="CPU image 1" width={700} height={500} />
            <Image src="/cpu2.jpg" alt="CPU image 1" width={700} height={500} />
            <Image src="/cpu3.jpg" alt="CPU image 1" width={700} height={500} />
            <Image src="/cpu4.jpg" alt="CPU image 1" width={700} height={500} />
            <Image src="/cpu5.jpg" alt="CPU image 1" width={700} height={500}/>
        </main>
    );
}