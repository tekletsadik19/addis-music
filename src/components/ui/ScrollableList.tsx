'use client'
import React, { HTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const scrollableListVariants = cva(
  'cursor-default select-none items-center rounded-sm py-1.5 px-2 text-sm font-medium outline-none focus:bg-slate-100 data-[state=open]:bg-slate-100 dark:focus:bg-slate-700 dark:data-[state=open]:bg-slate-700',
  {
    variants: {
      size: {
        default: 'text-base sm:text-lg w-300',
        sm: 'text-sm sm:text-base',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface ScrollableListProps
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof scrollableListVariants> {
  items: string[];
}

const ListContainer = styled.div`
  overflow-y: auto;
  height: 400px;
`;

const ListItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ccc;
  font-size: 16px;
`;

const ScrollableList = forwardRef<HTMLDivElement, ScrollableListProps>(
  ({ className, size, items, ...props }, ref) => {
    return (
      <div className={cn(scrollableListVariants({ size }), className)} {...props} ref={ref}>
        <ListContainer>
          {items.map((item, index) => (
            <ListItem key={index}>{item}</ListItem>
          ))}
        </ListContainer>
      </div>
    );
  }
);

ScrollableList.displayName = 'ScrollableList';

export default ScrollableList;
