import { getServerSession } from "next-auth";
import Link from "next/link";
import { buttonVariants } from "@/ui/Button";
import SigninButton from "@/components/SigninButton"
import SignoutButton from "@/components/SignoutButton"
import ThemeToggle from "@/components/ThemeToggle";
import MobileMenu from '@/components/MobileMenu'
import { authOptions } from "@/lib/auth";
import SearchBar from "@/components/SearchBar";

const Navbar = async ({}) => {
    const session = await getServerSession(authOptions)
    return <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-slate-900 z-50 top-0 left-0 right-0 h-20 border-b border-slate-300 dark:border-slate-700 shadow-sm flex items-center justify-between">
        <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
            <MobileMenu />
            <div className="ml-5">
                <Link href='/' className={buttonVariants({variant:"link"})}>
                    Addis Music
                </Link>
            </div>
            <div  className="hidden lg:flex gap-0 ml-5">
                <SearchBar/>
            </div>
            
            
            <div className="hidden md:flex gap-4 mr-5">
                
                <ThemeToggle/>
                <Link href="/addis-hub" className={buttonVariants({variant:"ghost"})}>
                    Addis Hub
                </Link>
                
                {
                session?(
                    <>
                        <Link className={buttonVariants({variant:"ghost"})} href='/library'>
                            Music Library
                        </Link>
                        <SignoutButton/>
                    </>
                ):<SigninButton/>
                }
            </div>
        </div>
    </div>;
}
 
export default Navbar;