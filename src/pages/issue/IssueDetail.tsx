import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fakeGetIssueDetail } from '../../api/request';
import { IIssueDetail } from '../../types/issue';

export default function IssueDetail() {
  const { id } = useParams();
  const [issue, setIssue] = useState<IIssueDetail | undefined>(undefined);
  const { issueId, title, author, createdAt, commentsLength, profileImage, body } = issue || {};

  useEffect(() => {
    (async () => {
      if (id) {
        const data = await fakeGetIssueDetail(Number(id));
        if (data) {
          setIssue(data);
        }
      }
    })();
  }, [id]);

  return (
    <section>
      <p>{issueId}</p>
      <title>{title}</title>
      <p>{author}</p>
      <p>{createdAt}</p>
      <p>{commentsLength}</p>
      <img src={profileImage} alt='user profile image' />
      <div>{body}</div>
    </section>
  );
}
