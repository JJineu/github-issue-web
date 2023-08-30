import React from 'react';
import { useParams } from 'react-router-dom';
import { fakeGetIssueDetail } from '../../api/request';
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
  } = useFetch<IIssueDetail, Error>(() => fakeGetIssueDetail(Number(id)));
  const { issueId, title, author, createdAt, commentsLength, profileImage, body } = issue || {};

  return (
    <>
      {loading && <Loading />}
      {error && <Error />}
      <Container>
        <HeaderContainer>
          <ProfileImage src={profileImage} alt='user profile image' />
          <IssueCard issue={{ issueId, title, author, createdAt, commentsLength } as IIssue} />
        </HeaderContainer>
        <BodyContainer>
          <MarkdownRenderer markdown={String(body)} />
        </BodyContainer>
      </Container>
    </>
  );
}

const Container = styled.section`
  display: flex-row;
`;

const HeaderContainer = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 10px;
`;

const BodyContainer = styled.div``;

const ProfileImage = styled.img`
  height: 100px;
  object-fit: cover;
  padding: 15px 0;
`;
