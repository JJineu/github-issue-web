import axios from 'axios';
import { API } from '../constants';

export const instance = axios.create({
  baseURL: API.BASE_URL,
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/vnd.github+json',
    'X-GitHub-Api-Version': '2022-11-28',
    Authorization: `Bearer ${process.env.REACT_APP_GITHUB_TOKEN}`,
  },
});
