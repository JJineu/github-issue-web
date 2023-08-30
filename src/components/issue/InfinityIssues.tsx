import React from 'react';
import { styled } from 'styled-components';
import Loading from '../common/Loading';
import useIntersect from '../../hooks/useIntersect';
import { getIssues } from '../../api/request';
import { useIssuesContext } from '../../context/IssuesProvider';

const InfinityIssues = () => {
  const { addIssues, page } = useIssuesContext();

  const getNextPage = async () => {
    const nextPage = page.current + 1;
    const nextIssues = await getIssues(nextPage);
    page.current = nextPage;
    addIssues(nextIssues);
  };

  const targetRef = useIntersect(getNextPage);

  return (
    <TargetDiv ref={targetRef}>
      <Loading />
    </TargetDiv>
  );
};

export default InfinityIssues;

const TargetDiv = styled.div`
  width: 100%;
  height: 1px;
`;
