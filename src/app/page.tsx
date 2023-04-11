import Button from "@/components/ui/Button";
import Paragraph from "@/ui/Paragraph";
import type { Metadata } from "next";
import { type } from "os";
import ScrollableList from '@/components/ui/ScrollableList'
import CustomCard from "@/components/ui/CustomCard";

export const metadata: Metadata = {
  title:"Addis Music | Home",
  description:"Elegant Music Hub for Addis"
}

export default function Home() {
  const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7', 'Item 8', 'Item 9', 'Item 10'];
  return (
    <div className="relative h-screen flex overflow-x-hidden">
      
      <div className="pl-0 mr-5 container mt-40 ">
        <CustomCard header="Create Library" info="I miss you" btnText="Add"/>
        <CustomCard header="Create Library" info="I miss you" btnText="Add"/>
      </div>
      
    </div>
  )
}
