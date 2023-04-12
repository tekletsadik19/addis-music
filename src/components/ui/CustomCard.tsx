'use client'
import React, { HTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Paragraph from '@/ui/Paragraph';
import Header from './Header';
import Button from './Button';

const cardVariants = cva(
  'm-5 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-800 dark:text-slate-400 data-[state=open]:bg-transparent dark:data-[state=open]:bg-transparent text-white',
  {
    variants: {
      size: {
        default: 'h-300',
        sm: '',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface CardProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof cardVariants> {
      header?:string;
      info?:string;
}

const CardContainer = styled.div`
  box-sizing: border-box;
  width: calc(420px / 1.5);
  line-height: 1.5;
  height: 300px;
  justify-content: space-between;
  gap: 0.5rem;
  border-radius: 16px;
	box-shadow: 0 30px 30px -25px rgba(#4133B7, .25);
`;
const CardWrapper = styled.div`
  padding: 20px;
  padding-top: 40px;
  border-radius: 12px;
	position: relative;
  overflow: hidden;
  
`;



const CustomCard = forwardRef<HTMLDivElement, CardProps>(
  ({ className, size, header,children,info, ...props }, ref) => {
    return (
      <CardContainer className={cn(cardVariants({ size }), className)} {...props} ref={ref}>
          <CardWrapper >
            <Header size={'sm'} className='text-coffee'>
              {header}
            </Header>
            <Paragraph size={'sm'} className='text-charcoal'>
              {info}
            </Paragraph>
            {children}     
          </CardWrapper>
      </CardContainer>
    );
  }
);

CustomCard.displayName = 'CustomCard';

export default CustomCard;
