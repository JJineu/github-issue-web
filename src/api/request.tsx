import { CONDITION, OWNER, REPO } from '../constants';
import { IIssue, IIssueDetail } from '../types/issue';
import { instance } from './axiosinstance';

export const getIssues = async (params?: { params: { page: number } }): Promise<IIssue[]> => {
  try {
    const page = params?.params.page || 1;
    const response = await instance.get(`/repos/${OWNER}/${REPO}/issues${CONDITION}&page=${page}`);
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
    throw new Error('Failed to fetch issue list.');
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
    throw new Error('Failed to fetch issue detail.');
  }
};

export const fakeGetIssue = async (params?: { params: { page: number } }): Promise<IIssue[]> => {
  try {
    const response = await instance.get(`/issues.json`, params);
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
    throw new Error('Failed to fetch issue detail.');
  }
};

export const fakeGetIssueDetail = async (id: number): Promise<IIssueDetail> => {
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
    throw new Error('Failed to fetch issue detail.');
  }
};
