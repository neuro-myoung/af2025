import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Check } from "lucide-react";
import PrimaryButton from '@/components/PrimaryButton/PrimaryButton'
import SecondaryButton from '@/components/SecondaryButton/SecondaryButton'
import Image from "next/image";
import Bokeh from '@/components/Bokeh/Bokeh'

const Hero = () => {
    return (
        <div className="bg-[#0e0008] min-h-[80vh] relative w-full flex justify-center overflow-hidden">
            <Bokeh />
            <section>
                <MaxWidthWrapper className=" pt-10 grid grid-cols-1 lg:grid-cols-2 gap-x-0 lg:pt-24 xl:pt-32">
                    <div className='relative justify-center mx-auto text-center lg:text-left flex flex-col items-center lg:items-start w-full h-full'>
                        <h1 className='relative w-fit tracking-tight text-balance mt-16 font-bold !leading-tight text-white text-5xl md:text-6xl lg:text-7xl'>
                            Vibrant and Realistic Colored Pencil <span className="px-2 text-[#FFC300]">ART</span>
                        </h1>
                        <p className='text-[#d2d2d2] mt-8 text-[1.2rem] md:text-xl lg:pr-10 max-w-prose text-center lg:text-left text-balance md:text-wrap leading-7 w-[98%]'>
                            I specialize in highly detailed and realistic wildlife, pet, and people portraits. Visit my shop for original drawings, high-quality prints, greeting cards, and other ways to
                            <span className="font-bold text-[#e93e68]"> bring art into your home </span>
                            or connect with me to request a custom commission.
                        </p>

                        <div className='w-[65ch] flex flex-col lg:flex-row items-center lg:items-start pb-10 gap-8 lg:gap-16 pt-8 lg:pt-16 font-semibold'>
                            <PrimaryButton>Shop Art</PrimaryButton>
                            <SecondaryButton>Connect</SecondaryButton>
                        </div>
                    </div>
                    <div className='relative flex h-[50vh] md:h-full w-full'>
                        <Image
                            src="/homepage/shorthairedpointer.png"
                            fill={true}
                            className="relative opacity-90"
                            style={{ objectFit: "contain" }}
                            alt="Colored pencil drawing of a short-haired pointer."
                            sizes="(max-width:768px) 300px, 500px"
                        />
                    </div>
                </MaxWidthWrapper>
            </section>
        </div>
    )
}

export default Hero

