import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function AdCard() {
  return (
    <LinkContainer to={`url`}>
      <p>[AD]</p>
      <img src='/adImage.jpg' alt='Ad Image' />
    </LinkContainer>
  );
}

const LinkContainer = styled(Link)`
  display: block;
  position: relative;
  text-align: center;
  height: 100px;
  > img {
    height: 100%;
  }
  padding: 3px;
  text-decoration: none;
  color: black;
  background-color: #f0f6fa;
  > p {
    position: absolute;
    top: 2px;
    left: 4px;
    padding: 0;
    margin: 0;
  }
`;
