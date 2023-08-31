import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { AD } from '../../constants';

export default function AdCard() {
  return (
    <LinkContainer to={AD.URL}>
      <p>[AD]</p>
      <img src={AD.IMG} alt={`ad image of ${AD.URL}`} />
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
