'use client'

import React from "react";
import Header from "@/components/ui/Header";
import styled from '@emotion/styled';

const Art = styled.div`
  grid-column: 2/3;
`

class Artwork extends React.Component {
  render() {
    return (
      <Art>
        <Header className={`artwork__img`}>
          HEY
        </Header>
      </Art>
    );
  }
}

export default Artwork;

{/* <div
        className="artwork"
        style={{
          
        }}
      >
        
</div> */}