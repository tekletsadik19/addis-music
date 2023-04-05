'use client'
import React, { HTMLAttributes, forwardRef } from 'react';
import styled from '@emotion/styled';
import { cva, VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import Paragraph from '@/ui/Paragraph';

const scrollableListVariants = cva(
  'pl-0 ml-0',
  {
    variants: {
      size: {
        default: '',
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
  overflow-y: overlay; /* use overlay instead of auto */
  height: 100%;
  max-height: 670px;
  width: 30vw;
  
  ::-webkit-scrollbar {
    width: .6rem;
    height: 100%;
  }
  

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 5rem;
  }

  ::-webkit-scrollbar-track {
    background-color: rgba(0, 0, 0, 0.1);
    border-radius: 5rem;
  }
`;

const ListItem = styled.div`
  height: 7rem;
  border-bottom: 1px  #ccc;
  color: #FFFFFF; 
  padding: 1rem;

  @media (prefers-color-scheme: dark) {
    color: #1A202C;
    &:hover {
      background-color: rgba(255, 255, 255, 0.1);
    }
  }
  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;

const ScrollableList = forwardRef<HTMLDivElement, ScrollableListProps>(
  ({ className, size, items, ...props }, ref) => {
    return (
      <div className={cn(scrollableListVariants({ size }), className)} {...props} ref={ref}>
        <ListContainer>
          {items.map((item, index) => (
            <ListItem key={index}>
              <Paragraph>
                {item}
              </Paragraph>
            </ListItem>
          ))}
        </ListContainer>
      </div>
    );
  }
);

ScrollableList.displayName = 'ScrollableList';

export default ScrollableList;
