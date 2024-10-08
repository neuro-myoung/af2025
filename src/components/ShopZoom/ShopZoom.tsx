'use client'
import Image from "next/image";
import ragdollcat from '../../../public/homepage/cocoacat.jpg'
import kingcharles from '../../../public/homepage/kingcharlesspaniel.jpg'
import wedding from '../../../public/homepage/wedding.jpg'
import boy from '../../../public/homepage/boy.jpg'
import leopard from '../../../public/homepage/purpleleopard2.jpg'
import tortoise from '../../../public/homepage/turtle.jpg'
import macaws from '../../../public/homepage/AlixFuerst_Macaws.jpg'
import cardinal from '../../../public/homepage/Cardinal.jpeg'
import { useScroll, useTransform, motion } from 'framer-motion'
import { useRef, useEffect } from "react";
import Lenis from '@studio-freight/lenis'



export default function ShopZoom() {

    useEffect(() => {
        const lenis = new Lenis()

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }

        requestAnimationFrame(raf)
    }, [])

    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4])
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5])
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6])
    const scale7 = useTransform(scrollYProgress, [0, 1], [1, 7])
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8])
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9])

    const pics = [
        {
            src: ragdollcat,
            scale: scale5,
            classes: "top-[-30vh] left-[2.5vw] w-[30vw] h-[30vh] relative"
        },
        {
            src: kingcharles,
            scale: scale8,
            classes: "top-[2.5vh] left-[22.5vw] w-[17.5vw] h-[30vh] relative"
        },
        {
            src: wedding,
            scale: scale6,
            classes: "top-[-25vh] left-[-22.5vw] w-[18.5vw] h-[32vh] relative"
        },
        {
            src: boy,
            scale: scale7,
            classes: "top-[-24vh] left-[23.5vw] w-[10vw] h-[17.55vh] relative"
        },
        {
            src: leopard,
            scale: scale5,
            classes: "top-[28.5vh] left-[-2.5vw] w-[30vw] h-[30vh] relative"
        },
        {
            src: tortoise,
            scale: scale7,
            classes: "top-[2.7vh] left-[-26vw] w-[25vw] h-[20vh] relative"
        },
        {
            src: cardinal,
            scale: scale9,
            classes: "top-[27vh] left-[21.25vw] w-[15vw] h-[17.5vh] relative"
        },
        {
            src: macaws,
            scale: scale8,
            classes: "top-[24.5vh] left-[-25vw] w-[12.5vw] h-[22.5vh] relative"
        },
     
    ]
    return (
        <div ref={container} className="h-[300vh] relative">
            <div className="top-0 sticky h-[100vh] bg-[#f2f2f2] overflow-hidden">
                <motion.div style={{ scale: scale4 }} className="w-full h-full absolute top-0 flex items-center justify-center ">
                    <div className="w-[25vw] h-[25vh] relative bg-[#0e0008] flex justify-center items-center">
                        <h1 className="text-2xl text-[#f2f2f2]">Bring art into your home</h1>
                    </div>
                </motion.div>
                {
                    pics.map(({ src, scale, classes }, index) => {
                        return <motion.div style={{ scale }} key={index} className="w-full h-full absolute top-0 flex items-center justify-center">
                            <div className={classes}>
                                <Image
                                    src={src}
                                    fill
                                    className="object-cover"
                                    alt='image'
                                    placeholder='blur'
                                />
                            </div>
                        </motion.div>
                    })
                }
            </div>
        </div>
    )
} 