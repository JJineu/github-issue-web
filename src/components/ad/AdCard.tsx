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
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  color: black;
  background-color: #f0f6fa;
  > img {
    height: 100px;
    object-fit: cover;
  }
  > p {
    position: absolute;
    top: 4px;
    left: 4px;
    padding: 0;
    margin: 0;
  }
`;
