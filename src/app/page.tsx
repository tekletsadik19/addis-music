import Button from "@/components/ui/Button";
import Paragraph from "@/ui/Paragraph";
import type { Metadata } from "next";
import { type } from "os";
import MusicForm from '@/components/MusicForm'
import ScrollableList from '@/components/ui/ScrollableList'
import Artwork from '@/components/player/ui/Artwork';

export const metadata: Metadata = {
  title:"Addis Music | Home",
  description:"Elegant Music Hub for Addis"
}

export default function Home() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];
  return (
    <div className="relative h-screen flex overflow-x-hidden">
      <div className="pl-0 ml-0 container pt-20 ">
        <ScrollableList items={items} className="hidden md:flex" />
      </div>
      <div className="pl-0 mr-5 container mt-40 ">
        <Artwork/>
      </div>
      
    </div>
  )
}
