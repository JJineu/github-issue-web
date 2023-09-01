import { API } from '../constants';
import { IIssue, IIssueDetail } from '../types/issue';
import { instance } from './axiosinstance';

const ISSUE_URL = `/repos/${API.OWNER}/${API.REPO}/issues` as const;

export const getIssues = async (page = 1): Promise<IIssue[]> => {
  try {
    const response = await instance.get(`${ISSUE_URL}${API.CONDITION}&page=${page}`);
    const processedIssues: IIssue[] = response.data.map((issue: any) => ({
      issueId: issue.number,
      title: issue.title,
      author: issue.user.login,
      createdAt: issue.created_at,
      commentsLength: issue.comments,
      state: issue.state,
    }));
    return processedIssues;
  } catch (error) {
    throw new Error('Failed to fetch issue list.');
  }
};

export const getIssueDetail = async (id: number): Promise<IIssueDetail> => {
  try {
    const response = await instance.get(`${ISSUE_URL}/${id}`);
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
