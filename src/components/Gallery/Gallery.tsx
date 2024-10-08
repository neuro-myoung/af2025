'use client'
import { TabGroup, TabList, Tab, TabPanel, TabPanels } from '@headlessui/react';
import Masonry from 'react-masonry-css';
import CloudImage from '@/components/CloudinaryImage/CloudImage'

import type { LightGallery } from 'lightgallery/lightgallery';
import LightGalleryComponent from 'lightgallery/react';
import { useRef } from 'react';

import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';

import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

export default function GallerySection(data: any) {

    return (
        <div className="h-full w-screen min-h-screen overflow-auto pt-[4rem]">
            <main className="py-32 bg-[#f2f2f2]">
                <div className="flex flex-col items-center px-10">
                    <TabGroup>
                        <TabList className="flex items-start justify-between gap-16 my-10 w-full px-20">
                            {data.data.map((tab:any) => (
                                <Tab key={tab.key} className="p-2 text-5xl">
                                    {({ selected }) => (
                                        <span className={selected ? "text-[#e93e68]" : "text-[#0e0008]"}>
                                            {tab.display}
                                        </span>
                                    )}
                                </Tab>
                            ))}
                        </TabList>
                        <div className="relative h-full max-w-[1600px] w-full before:content-[''] before:absolute before:w-[100%] before:h-[20px] before:l-0 before:t-0 before:border-l-2 before:border-r-2 before:border-t-2 before:border-[#0e0008] after:content-[''] after:absolute after:w-[100%] after:h-[20px] after:r-0 after:b-100 after:border-l-2 after:border-r-2 after:border-b-2 after:border-[#0e0008]">
                            <TabPanels className="h-full w-full">
                            {data.data.map((tab:any) => (
                                <TabPanel key={tab.key} className="p-2 sm:p-6">
                                    <Gallery key={tab.key} photos={tab.images} />
                                </TabPanel>
                            ))}
                            </TabPanels>
                        </div>
                    </TabGroup>
                </div>

            </main>
        </div>
    );
}

function Gallery({ photos }: any) {
    const lightboxRef = useRef<LightGallery | null>(null)

    return (
        <>
            <Masonry breakpointCols={4} className="flex items-start justify-center gap-5 overflow-hidden" columnClassName="">
                {photos.map((image: any, idx: number) => (
                    <CloudImage
                        key={idx}
                        src={image.secure_url}
                        alt={image.alt}
                        width="400"
                        height="400"
                        sizes="(min-width: 480px ) 50vw, (min-width: 728px 33vw), (min-width: 976px ) 25vw, 100vw"
                        loading="lazy"
                        className="hover:opacity-70 hover:scale-105 rounded-lg transition ease-in-out duration-300 my-5 cursor-pointer"
                        onClick={() => {
                            lightboxRef.current?.openGallery(idx);
                        }}
                    />
                ))}
            </Masonry>

            <LightGalleryComponent
                onInit={(ref) => {
                    if (ref) {
                        lightboxRef.current = ref.instance
                    }
                }}
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                dynamic
                dynamicEl={photos.map((image: any) => ({
                    src: image.secure_url.slice(0, 54) + "f_auto/q_auto:best/" + image.secure_url.slice(54),
                    thumb: image.secure_url.slice(0, 54) + "c_scale,w_100/f_auto/q_auto/" + image.secure_url.slice(54)
                })
                )}
            />
        </>
    )

}