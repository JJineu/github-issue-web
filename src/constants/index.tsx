export const API = {
  BASE_URL: 'https://api.github.com',
  OWNER: 'facebook',
  REPO: 'react',
  CONDITION: '?state=open&sort=comments&per_page=10',
} as const;

export const PATH = {
  ISSUES: '/',
  ISSUEDETAIL: '/:id',
} as const;

export const AD = {
  URL: 'https://www.wanted.co.kr/ ',
  IMG: '/adImage.jpg',
} as const;

export const STATUS = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;
