import ArtistStatement from "@/components/ArtistStatement/ArtistStatement";
import Hero from "@/components/Hero/Hero";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import ShopZoom from "@/components/ShopZoom/ShopZoom";
import Image from 'next/image'

export default function Home() {

  return (
    <div>
      <Hero />
      <ArtistStatement />
      <ShopZoom />
      <div className='relative h-[100vh] w-full bg-[#0e0008]'>
        <MaxWidthWrapper>
          <div className='relative h-[100vh] w-full bg-[#0e0008] grid grid-cols-2'>
            <div></div>
            <div className="flex flex-col h-[50vw] max-h-[800px] w-full justify-center items-center">
              <div className="relative w-full h-full">
                <Image
                  src="/mockups/fireplace_mockup_small.png"
                  className="rounded-md"
                  fill
                  style={{ objectFit: "contain" }}
                  alt="Render of two bird drawings above a fireplace."
                  sizes="(max-width:768px) 400px, 800px"
                />
              </div>
              <div className="w-full h-full relative flex gap-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/mockups/panther-mockup_compressed_small.png"
                    className="rounded-md"
                    fill
                    style={{ objectFit: "contain" }}
                    alt="Mockup of a leopard portrait on a yellow wall."
                    sizes="(max-width:768px) 300px, 500px"
                  />
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/mockups/hummingbird_mockup_small.png"
                    fill
                    className="rounded-md"
                    style={{ objectFit: "contain" }}
                    alt="Mockup of a hummingbird drawing on a desk."
                    sizes="(max-width:768px) 300px, 500px"
                  />
                </div>
              </div>
            </div>
          </div>
        </MaxWidthWrapper>
      </div>
    </div >
  );
}
