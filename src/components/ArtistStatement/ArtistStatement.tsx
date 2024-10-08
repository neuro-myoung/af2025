import TextReveal from '@/components/TextReveal/TextReveal'
import MaxWidthWrapper from '../MaxWidthWrapper';
import Image from "next/image";

const txt = "I am especially drawn to nature, and strive to capture the tiny details and unique character of every subject I draw."


export default function ArtistStatement() {

    return (
        <div className="relative h-[100vh] w-full pt-[100px] bg-[#f2f2f2]">
            <MaxWidthWrapper>
            <h1 className="sticky h-[10vh] top-20 text-8xl">Artist Statement</h1>
                <div className="relative w-full h-full grid grid-cols-3 pb-[250px] bg-[#f2f2f2]/85 z-15">
                    <div className="col-span-1 col-start-1 flex items-center justify-center">
                        <Image
                            src="/homepage/artist.png"
                            height={300}
                            width={300}
                            className="absolute"
                            alt="Alix Fuerst Photograph"
                        />
                    </div>
                    <div className="w-full flex justify-center items-center h-full col-span-2 col-start-2">
                        <TextReveal value={txt} />
                    </div>
                </div>
            </MaxWidthWrapper>
        </div>

    )
}
