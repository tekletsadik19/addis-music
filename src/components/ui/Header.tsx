import { cn } from "@/lib/utils";
import { VariantProps,cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";


const headerVariants = cva(
    "text-black dark:text-white text-center lg:text-left font-extrabold leading-tight tracking-tighter",
    {
        variants:{
            size:{
                default:"text-4xl md:text-5x1 lg:text-6xl",
                lg:"text-5xl md:text-6x1 lg:text-7xl",
                sm:"text-2xl md:text-3xl lg:text-4x1",
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