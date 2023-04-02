import { cva } from "class-variance-authority";
import { FC } from "react";

const buttonVariant = cva("active:scale-95 inline-flex item-center justify-center rounded-md text-sm font-medium transition-color focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 disabled:opacity-50 dark:ring-slate-400 disabled:pointer-events-none dark:focus:ring-offset-slate-900",
    {
        variants:{
            variant:{
                default: "bg-slate-900 text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100",
                outline: "bg-slate-900 text-white hover:bg-slate-900 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100 border border-slate-200 hover:bg-slate-100 dark:border-slate-700",
                ghost: "bg-transparent hover:bg-slate-100 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent",
                link: "bg-transparent dark:bg-transparent underline-offset-4 hover:underline text-slate-900 dark:text-slate-100 hover:bg-transparent dark:hover:bg-transparent"
            }
        },
        defaultVariants:{

        }
    }
)

interface ButtonProps {
    
}
 
const Button: FC<ButtonProps> = () => {
    return ( <button></button> );
}
 
export default Button;