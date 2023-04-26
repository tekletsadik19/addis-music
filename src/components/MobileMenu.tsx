'use client'
import { Disclosure } from "@headlessui/react";
import { GiHamburgerMenu } from "react-icons/gi";
import Link from "next/link";
import SideBar from "@/components/home/SideBar";
import { buttonVariants } from "@/ui/Button";

import { useSession } from 'next-auth/react';
import SigninButton from "@/components/auth/SigninButton"
import SignoutButton from "@/components/auth/SignoutButton"

const MobileMenu = () => {
  const { data: session } = useSession();
  return (
    <div className="md:hidden">
      <Disclosure as="nav">
        <Disclosure.Button className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-gray-800 hover:bg-gray-900 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </Disclosure.Button>
        <div className="p-6 w-1/2 h-screen bg-white z-20 fixed top-0 -left-96 lg:left-0 lg:w-60  peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start item-center">
            <h1 className="text-base text-center cursor-pointer font-bold text-blue-900 border-b border-gray-100 pb-4 w-full">
              Addis Music
            </h1>
            
            {
                session?(
                    <>
                        <Link href="/addis-hub" className={buttonVariants({variant:"ghost"})}>
                            Addis Hub
                        </Link>
                        <SideBar/>
                        <SignoutButton/>
                       
                    </>
                ):<SigninButton/>
            }
          </div>
        </div>
      </Disclosure>
    </div>
  )
}

export default MobileMenu