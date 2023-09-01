import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { IssuesProvider } from '../context/IssuesProvider';
import { PATH } from '../constants';
import Layout from '../pages/Layout';
// import Main from '../pages/issue/Main';
import Issue from '../pages/issue/Issue';
import IssueDetail from '../pages/issue/IssueDetail';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <IssuesProvider>
        <Routes>
          <Route element={<Layout />}>
            {/* <Route path={PATH.MAIN} element={<Main />} /> */}
            <Route path={PATH.ISSUES} element={<Issue />} />
            <Route path={PATH.ISSUEDETAIL} element={<IssueDetail />} />
          </Route>
          <Route path='*' element={<NotFound />} />
        </Routes>
      </IssuesProvider>
    </BrowserRouter>
  );
}
