import type { Metadata } from "next";
import Header from "@/components/ui/Header";
import Paragraph from "@/components/ui/Paragraph";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title:"Addis Music | Home",
  description:"Music Hub for Addis"
}

export default function Home() {
  return (
    <div className='relative h-screen flex items-center justify-center overflow-x-hidden'>
      <div className='container pt-32 max-w-7xl w-full mx-auto h-full'>
        <div className='h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start'>
            <Header size={'lg'} className="three-d text-black dark:text-light-gold">
              Music That <br/> Moves You
            </Header>
            <Paragraph className="max-w-xl lg:text-left">
              Discover the latest hits and hidden gems, 
              create your own playlists. Join us today and experience the power of music that 
              moves you!
            </Paragraph>
            <div className='relative w-full max-w-xl lg:max-w-xl lg:left-1/2 aspect-square lg:absolute'>
              <Image
                priority
                className="img-shadow"
                quality={100}
                style={{objectFit:'contain'}}
                fill
                src={'/addis-music.png'}
                alt="addis music"
              />

            </div>
        </div>    
      </div>
      {/*Allow More Height in Mobile Device*/}
      <div className='h-40 md:hidden'/>
    </div>
  )
}


