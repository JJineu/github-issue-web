export interface IIssue {
  issueId: number; // number
  title: string;
  author: string;
  createdAt: string;
  commentsLength: number; // 2
  state: string; // state - closed, 1 open
}
export interface IIssueDetail {
  issueId: number; // number
  title: string;
  author: string; // user.login
  createdAt: string; // created_at
  commentsLength: number; // comments
  profileImage: string; // user.avatar_url
  body: string; // markdown
}
