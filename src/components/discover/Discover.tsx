'use client'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/ui/DropdownMenu";
import { genres } from "@/utils/constants";
import Button from "@/ui/Button";
import Icons from "@/components/ui/Icons";
import Paragraph from "@/ui/Paragraph";

const Discover = () => {
    return ( 
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant={'link2'} className="flex align-center">
                        <Icons.Compass className="w-5 h-5"/>
                        <Paragraph size={'sm'}>Discover</Paragraph>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" forceMount>
                {genres.map((genre)=>
                    <DropdownMenuItem key={genre.value} onClick={()=>{}}>
                        <span>{genre.title}</span>
                    </DropdownMenuItem>)
                }
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
 
export default Discover;