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
  IMG: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
} as const;

export const STATUS = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  SUCCESS: 'SUCCESS',
} as const;
