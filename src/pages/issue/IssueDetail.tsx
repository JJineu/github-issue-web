import React from 'react';
import { useParams } from 'react-router-dom';
import { getIssueDetail } from '../../api/request';
import { IIssue, IIssueDetail } from '../../types/issue';
import MarkdownRenderer from '../../components/issue/MarkdownRenderer';
import styled from 'styled-components';
import IssueCard from '../../components/issue/IssueCard';
import useFetch from '../../hooks/useFetch';
import Loading from '../../components/common/Loading';
import Error from '../../components/common/Error';

export default function IssueDetail() {
  const { id } = useParams();
  const {
    data: issue,
    loading,
    error,
  } = useFetch<IIssueDetail, Error>(() => getIssueDetail(Number(id)));
  const { issueId, title, author, createdAt, commentsLength, profileImage, body } = issue || {};

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      <div>
        <HeaderContainer>
          <ProfileImage src={profileImage} alt='user profile image' />
          <IssueCard issue={{ issueId, title, author, createdAt, commentsLength } as IIssue} />
        </HeaderContainer>
        <div>
          <MarkdownRenderer markdown={String(body)} />
        </div>
      </div>
    </>
  );
}

const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 100px 1fr;
  justify-content: center;
  align-items: center;
  gap: 10px;
  padding-bottom: 10px;
  min-height: 120px;
`;

const ProfileImage = styled.img`
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 50%;
  aspect-ratio: 1/1;
`;
