/* eslint-disable */

import React from 'react';
import IssueCard from '../../components/issue/IssueCard';
import { getIssues } from '../../api/request';
import { IIssue } from '../../types/issue';
import AdCard from '../../components/ad/AdCard';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import styled from 'styled-components';
import useIntersect from '../../hooks/useIntersect';
import { useIssuesContext } from '../../context/IssuesProvider';

export default function Issue() {
  const { issues, addIssues, loading, error, page, setPage } = useIssuesContext();

  // TODO: Throttling 적용(해야되나?)
  const targetRef = useIntersect(
    async (entry, observer) => {
      try {
        if (!loading && !error) {
          setPage((prevPage) => prevPage + 1);
          console.log('PAGE ! PAGE ! ', page);
          const newData = await getIssues({ params: { page } });
          addIssues(newData as IIssue[]);
        }
      } catch (error) {
        console.error('An error occurred:', error);
      }
    },
    // { rootMargin: '100px' },
  );

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
