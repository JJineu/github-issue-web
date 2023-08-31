import React from 'react';
import IssueCard from '../../components/issue/IssueCard';
import { IIssue } from '../../types/issue';
import AdCard from '../../components/ad/AdCard';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import { useIssuesContext } from '../../context/IssuesProvider';
import InfinityIssues from '../../components/issue/InfinityIssues';

export default function Issue() {
  const { issues, loading, error } = useIssuesContext();

  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <>
          {issues &&
            issues.map((issue: IIssue, index: number) => (
              <React.Fragment key={issue.issueId}>
                <IssueCard issue={issue} />
                {(index + 1) % 4 === 0 && <AdCard />}
              </React.Fragment>
            ))}
          <InfinityIssues />
        </>
      )}
    </>
  );
}
