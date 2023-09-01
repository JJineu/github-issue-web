import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { API } from '../constants';
import styled from 'styled-components';
import { capitalizeFirstLetter } from '../utils/format';
import { AiFillGithub } from 'react-icons/ai';

export default function Layout() {
  return (
    <Container>
      <Header>
        <StyledLink to='/'>
          <AiFillGithub className='ic_home' />
          {capitalizeFirstLetter(API.OWNER)} / {capitalizeFirstLetter(API.REPO)}
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
  width: 100%;
  justify-content: center;
  align-items: center;
  padding: 20px;

  .ic_home {
    padding: 0 5px 0 0;
  }
`;

const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: black;
  font-size: 30px;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`;
