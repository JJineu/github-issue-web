import React from 'react';
import { styled } from 'styled-components';
import Loading from '../common/Loading';
import useIntersect from '../../hooks/useIntersect';
import { useIssuesContext } from '../../context/IssuesProvider';
import Error from '../common/Error';

const InfinityIssues = () => {
  const { addIssues, page, callback, loading, error } = useIssuesContext();

  const getNextPage = async () => {
    if (!loading && !error) {
      page.current = page.current + 1;
      const nextIssues = await callback();
      addIssues(nextIssues);
    }
  };

  const targetRef = useIntersect(getNextPage);
  return (
    <>
      {loading ? (
        <Loading />
      ) : error ? (
        <Error />
      ) : (
        <TargetDiv ref={targetRef}>
          <Loading />
        </TargetDiv>
      )}
    </>
  );
};

export default InfinityIssues;

const TargetDiv = styled.div`
  width: 100%;
  height: 1px;
`;
