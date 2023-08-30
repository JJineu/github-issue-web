import React from 'react';
import { IIssue } from '../../types/issue';
import { useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function IssueCard({ issue }: { issue: IIssue }) {
  const { issueId, title, author, createdAt, commentsLength } = issue;
  const navigate = useNavigate();
  const location = useLocation();
  const moveIssueDetail = () => {
    if (location.pathname !== `/${issueId}`) navigate(`/${issueId}`);
  };

  return (
    <Container onClick={moveIssueDetail}>
      <TitleContainer>
        <Title>
          <p>
            #{issueId} {title}
          </p>
        </Title>
        <p>
          작성자: {author}, 작성일: {createdAt}
        </p>
      </TitleContainer>
      <CommentsContainer>
        <p>코멘트: {commentsLength}</p>
      </CommentsContainer>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  gap: 5px;
  padding: 15px 0;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

const TitleContainer = styled.div`
  display: flex-col;
  width: 100%;
`;

const Title = styled.h3`
  padding: 0 0 10px 0;
`;

const CommentsContainer = styled.div`
  width: 90px;
`;
