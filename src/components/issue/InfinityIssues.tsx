import React, { useEffect } from 'react';
import { styled } from 'styled-components';
import Loading from '../common/Loading';
import useIntersect from '../../hooks/useIntersect';
import { useIssuesContext } from '../../context/IssuesProvider';
import useFetch from '../../hooks/useFetch';
import { IIssue } from '../../types/issue';
import { getIssues } from '../../api/request';

export default function InfinityIssues() {
  const { page, setPage, addIssues } = useIssuesContext();
  const { data, loading, error, fetch } = useFetch<IIssue[], Error>(getIssues);

  const getNextPage = () => {
    if (!loading && !error) {
      setPage((prev) => (prev += 1));
    }
  };
  const targetRef = useIntersect(getNextPage);

  useEffect(() => {
    fetch(() => getIssues(page));
  }, [page]);

  useEffect(() => {
    if (data) {
      addIssues(data);
    }
  }, [data]);

  return (
    <TargetDiv ref={targetRef}>
      <Loading />
    </TargetDiv>
  );
}

const TargetDiv = styled.div`
  width: 100%;
  height: 1px;
`;
