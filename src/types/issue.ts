export interface IIssue {
  issueId: number; // number
  title: string; // title
  author: string; // user.login
  createdAt: string; // created_at
  commentsLength: number; // comments
  state?: string; // state - closed, open
}
export interface IIssueDetail extends IIssue {
  profileImage: string; // user.avatar_url
  body: string;
}
