import React from 'react';
import IssueCard from '../../components/issue/IssueCard';
import { fakeGetIssue } from '../../api/request';
import { IIssue } from '../../types/issue';
import AdCard from '../../components/ad/AdCard';
import Loading from '../../components/common/Loading';
import useFetch from '../../hooks/useFetch';
import Error from '../../components/common/Error';

export default function Issue() {
  const { data: issues, loading, error } = useFetch<IIssue[], Error>(fakeGetIssue);

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
    </>
  );
}
