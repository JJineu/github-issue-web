import React from 'react';
import styled from 'styled-components';

export default function NotFound() {
  return (
    <DivContainer>
      <p>Not Found 404</p>
      <p>페이지를 찾을 수 없습니다.</p>
    </DivContainer>
  );
}

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  min-width: 480px;
  font-size: 50px;
  font-weight: bold;
  > :last-child {
    font-size: 30px;
  }
`;
