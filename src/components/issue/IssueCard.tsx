import React from 'react';
import { IIssue } from '../../types/issue';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../../utils/format';
import { BiCommentError } from 'react-icons/bi';
import { RiRadioButtonLine } from 'react-icons/ri';

export default function IssueCard({ issue }: { issue: IIssue }) {
  const { issueId, title, author, createdAt, commentsLength } = issue;

  return (
    <LinkContainer to={`/${issueId}`}>
      <TitleContainer>
        <Title>
          <p>
            #{issueId} {title}
          </p>
        </Title>
        <p>
          <RiRadioButtonLine className='ic_status' />
          작성자: {author}, 작성일: {formatDate(createdAt)}
        </p>
      </TitleContainer>
      <CommentsContainer>
        <BiCommentError className='ic_comments' />
        <p>{commentsLength}</p>
      </CommentsContainer>
    </LinkContainer>
  );
}

const LinkContainer = styled(Link)`
  display: flex;
  width: 100%;
  gap: 5px;
  padding: 10px;
  align-items: center;
  border-bottom: 1px solid #ccc;
  text-decoration: none;
  color: black;
  &:hover {
    transform: scale(1.02);
    transition: transform 0.2s ease-in-out;
  }
`;

const TitleContainer = styled.div`
  width: 100%;
  > p {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: small;
    color: #787777;
  }
  .ic_status {
    width: 18px;
    height: 18px;
    color: green;
  }
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const CommentsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60px;
  .ic_comments {
    width: 100%;
    color: #6f6cd3;
  }
`;
