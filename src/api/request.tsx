import { OWNER, REPO } from '../constants';
import { IIssue, IIssueDetail } from '../types/issue';
import { instance } from './axiosinstance';

export const getIssues = async () => {
  try {
    const response = await instance.get(`/repos/${OWNER}/${REPO}/issues`);
    const processedIssues: IIssue[] = response.data.map(
      (issue: {
        number: number;
        title: string;
        user: { login: string };
        created_at: string;
        comments: number;
        state: string;
      }) => ({
        issueId: issue.number,
        title: issue.title,
        author: issue.user.login,
        createdAt: issue.created_at,
        commentsLength: issue.comments,
        state: issue.state,
      }),
    );
    return processedIssues;
  } catch (error) {
    console.log(error);
  }
};

export const getIssueDetail = async (id: number) => {
  try {
    const response = await instance.get(`/repos/${OWNER}/${REPO}/issues/${id}`);
    const processedIssue: IIssueDetail = {
      issueId: response.data.number,
      title: response.data.title,
      author: response.data.user.login,
      createdAt: response.data.created_at,
      commentsLength: response.data.comments,
      profileImage: response.data.user.avatar_url,
      body: response.data.body,
    };
    return processedIssue;
  } catch (error) {
    console.log(error);
  }
};

export const fakeGetIssue = async () => {
  try {
    const response = await instance.get(`/issues.json`);
    const processedIssues: IIssue[] = response.data.map(
      (issue: {
        number: number;
        title: string;
        user: { login: string };
        created_at: string;
        comments: number;
        state: string;
      }) => ({
        issueId: issue.number,
        title: issue.title,
        author: issue.user.login,
        createdAt: issue.created_at,
        commentsLength: issue.comments,
        state: issue.state,
      }),
    );
    return processedIssues;
  } catch (error) {
    console.log(error);
  }
};

export const fakeGetIssueDetail = async (id: number) => {
  try {
    const response = await instance.get(`/issueDetail.json`);
    const processedIssue: IIssueDetail = {
      issueId: response.data.number,
      title: response.data.title,
      author: response.data.user.login,
      createdAt: response.data.created_at,
      commentsLength: response.data.comments,
      profileImage: response.data.user.avatar_url,
      body: response.data.body,
    };
    return processedIssue;
  } catch (error) {
    console.log(error);
  }
};
