import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { OWNER, REPO } from '../constants';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../utils/format';

export default function Layout() {
  return (
    <Container>
      <Header>
        <StyledLink to='/'>
          {capitalizeFirstLetter(OWNER)} / {capitalizeFirstLetter(REPO)}
        </StyledLink>
      </Header>
      <Outlet />
    </Container>
  );
}

const Container = styled.div`
  padding: 0;
  margin: 30px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 480px;
`;

const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 20px 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: black;
  font-size: 30px;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`;
