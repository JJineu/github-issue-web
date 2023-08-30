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
      <p>#{issueId}</p>
      <div>
        <title>{title}</title>
        <p>
          작성자: {author}, 작성일: {createdAt}
        </p>
      </div>
      <p>{commentsLength}</p>
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  width: 100%;
  gap: 10px;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;
