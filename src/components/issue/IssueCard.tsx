import React from 'react';
import { IIssue } from '../../types/issue';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { formatDate } from '../../utils/format';

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
          작성자: {author}, 작성일: {formatDate(createdAt)}
        </p>
      </TitleContainer>
      <CommentsContainer>
        <p>코멘트: {commentsLength}</p>
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
`;

const TitleContainer = styled.div`
  width: 100%;
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const CommentsContainer = styled.div`
  width: 100px;
`;
