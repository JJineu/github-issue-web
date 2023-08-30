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
  justify-content: center;
`;
const Image = styled.img`
  display: flex;
  width: 100px;
`;
