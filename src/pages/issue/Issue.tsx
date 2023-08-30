import React from 'react';
import IssueCard from '../../components/issue/IssueCard';
import { IIssue } from '../../types/issue';
import AdCard from '../../components/ad/AdCard';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import styled from 'styled-components';
import { useIssuesContext } from '../../context/IssuesProvider';

export default function Issue() {
  const { issues, loading, error, targetRef } = useIssuesContext();

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      {issues &&
        issues.map((issue: IIssue, index: number) => (
          <React.Fragment key={issue.issueId}>
            <IssueCard issue={issue} />
            {(index + 1) % 4 === 0 && <AdCard />}
          </React.Fragment>
        ))}
      <Target ref={targetRef} />
    </>
  );
}

const Target = styled.div`
  background: #bf4f74;
  height: 1px;
`;
