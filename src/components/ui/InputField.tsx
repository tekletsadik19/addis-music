import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { HTMLAttributes, forwardRef } from "react";
import Button from "@/ui/Button";
import styled from '@emotion/styled';
import { css } from '@emotion/react';

export const formVariant = cva(
    'my-2 inline-flex items-center justify-center rounded-md   transition-colors focus:outline-none disabled:opacity-50  disabled:pointer-events-none',
    {
      variants: {
        variant: {
          default:
            'bg-slate-900 text-white dark:text-white hover:bg-slate-800 dark:bg-slate-200 dark:text-slate-900 dark:hover:bg-slate-100',
            search:
            'bg-slate-100 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 dark:bg-slate-800 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',
            ghost:
            'bg-slate-300 dark:text-white hover:bg-slate-300 dark:bg-slate-500 dark:hover:bg-slate-700  data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent',   
        },
        size: {
          default: 'h-10 py-2 px-4',
          sm: 'h-9 px-2 rounded-md',
          lg: 'h-11 px-8 rounded-md',
        },
      },
      defaultVariants: {
        variant: 'default',
        size: 'default',
      },
    }
  )

  
interface FieldProps extends HTMLAttributes<HTMLInputElement>,
VariantProps<typeof formVariant> {
  placeHolder?:string;
}
 
const InputField = forwardRef<HTMLInputElement,FieldProps>(
({
    className,placeHolder,children,variant,size,...props
},ref) => {
    return ( 
      <input className={cn(formVariant({variant,size,className}))}
        ref={ref}
        {...props}
        placeholder={placeHolder}
        onChange={props.onChange}
        value={props.value}
        />       
    );
})

InputField.displayName = "Input";
 
export default InputField;