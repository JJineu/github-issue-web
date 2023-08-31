import React from 'react';
import styled from 'styled-components';

export default function Error() {
  return (
    <DivContainer>
      <p>Error</p>
      <p>예상치 못한 오류가 발생했습니다.</p>
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
