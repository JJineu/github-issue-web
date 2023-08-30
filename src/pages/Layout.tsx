import React from 'react';
import { Outlet } from 'react-router-dom';
import { OWNER, REPO } from '../constants';
import styled from 'styled-components';

export default function Layout() {
  return (
    <Container>
      <Header>
        <h1>
          {OWNER} / {REPO}
        </h1>
      </Header>
      <Outlet />
    </Container>
  );
}

const Container = styled.main`
  display: flex-col;
  padding: 10px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;
`;
