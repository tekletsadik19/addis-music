import { Icons } from '@/components/Icons'
import { cn } from '@/lib/utils'
import * as React from 'react'

import { Loader2 } from 'lucide-react';


interface LoaderProps extends React.HTMLAttributes<HTMLDivElement> {

}

export function Loader({  className, ...props }: LoaderProps) {
  return (
    <div
      className={cn(
        'min-h-16 align-center flex w-[350px] flex-col items-start gap-1 rounded-md bg-white px-6 py-4 shadow-lg',
        className
      )}
      
      {...props}

    />
  )
}

interface LoaderIconProps extends Partial<React.SVGProps<SVGSVGElement>> {
  name: keyof typeof Icons
}

Loader.Icon = function ToastIcon({ name, className, ...props }: LoaderIconProps) {
  const Icon = Icons[name]

  if (!Icon) {
    return null
  }

  return (
    <div className='flex h-20 w-20 items-center justify-center rounded-full bg-slate-100'>
      <Icon className={cn('h-10 w-10', className)} {...props} />
    </div>
  )
}

interface LoaderTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {}

Loader.Title = function ToastTitle({ className, ...props }: LoaderTitleProps) {
  return <p className={cn('text-sm font-medium', className)} {...props} />
}


interface LoaderOpts {
  title?: string
}

export function loader(opts: LoaderOpts) {
  const { title = 'default'} = opts

  return (
    <Loader>
        <Loader2/>
        <Loader.Title>{title}</Loader.Title>
    </Loader>
  )
}