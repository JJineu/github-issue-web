import React, { useEffect, useState } from 'react';
import IssueCard from '../../components/issue/IssueCard';
import { IIssue } from '../../types/issue';
import AdCard from '../../components/ad/AdCard';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';
import { useIssuesContext } from '../../context/IssuesProvider';
// import InfinityIssues from '../../components/issue/InfinityIssues';
import useFetch from '../../hooks/useFetch';
import { getIssues } from '../../api/request';
import styled from 'styled-components';
import useIntersect from '../../hooks/useIntersect';

const Issue = () => {
  const { issues, setIssues } = useIssuesContext();
  const [page, setPage] = useState(1);
  const { data, loading, error, refetch } = useFetch<IIssue[], Error>();

  const getNextPage = () => {
    if (!loading && !error) {
      setPage((prev) => prev + 1);
    }
  };

  useEffect(() => {
    refetch(() => getIssues(page));
  }, [page]);

  useEffect(() => {
    if (data) {
      setIssues([...issues, ...data]);
    }
  }, [data]);

  const targetRef = useIntersect(getNextPage);
  return (
    <>
      {loading ?? <Loading />}
      {error && <Error />}
      {issues &&
        issues.map((issue: IIssue, index: number) => (
          <React.Fragment key={issue.issueId}>
            <IssueCard issue={issue} />
            {(index + 1) % 4 === 0 && <AdCard />}
          </React.Fragment>
        ))}
      <TargetDiv ref={targetRef}>
        <Loading />
      </TargetDiv>
      {/* <InfinityIssues /> */}
    </>
  );
};

export default Issue;

const TargetDiv = styled.div`
  width: 100%;
  height: 1px;
`;
