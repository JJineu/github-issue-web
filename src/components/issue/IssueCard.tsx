import React from 'react';
import { IIssue } from '../../types/issue';
import { useNavigate } from 'react-router-dom';

export default function IssueCard({ issue }: { issue: IIssue }) {
  const { issueId, title, author, createdAt, commentsLength } = issue;
  const navigate = useNavigate();
  const moveIssueDetail = () => {
    navigate(`/${issueId}`);
  };

  return (
    <section onClick={moveIssueDetail}>
      <p>{issueId}</p>
      <title>{title}</title>
      <p>{author}</p>
      <p>{createdAt}</p>
      <p>{commentsLength}</p>
    </section>
  );
}
