import { cn } from "@/lib/utils";
import { VariantProps,cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";


const headerVariants = cva(
    "pl-2 text-black dark:text-white text-center lg:text-left leading-tight tracking-tighter",
    {
        variants:{
            size:{
                default:"text-4xl md:text-5x1 lg:text-6xl",
                lg:"text-5xl font-extrabold md:text-6x1 lg:text-7xl",
                sm:"text-xl md:text-xl lg:text-3x1",
            }
        },
        defaultVariants:{
            size:"default"
        }
    }
)

interface HeaderProps extends HTMLAttributes<HTMLHeadingElement>,
VariantProps<typeof headerVariants>
{
    
}
 
const Header = forwardRef<HTMLHeadingElement,HeaderProps>(({
    className,size,children,...props
},ref)=>{
    return <h1 ref={ref} {...props} className={
        cn(headerVariants({size,className}))
    }>
        {children}
    </h1>
});

Header.displayName = "Header";
 
export default Header;