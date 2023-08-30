import React from 'react';
import styled from 'styled-components';

export default function Loading() {
  return (
    <Container>
      <Image src='/spinner.gif' />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
  text-align: center;
`;
const Image = styled.img`
  position: absolute;
  height: 100px;
  z-index: 20;
`;
