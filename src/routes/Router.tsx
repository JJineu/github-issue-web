import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Issue from '../pages/issue/Issue';
import IssueDetail from '../pages/issue/IssueDetail';
import Layout from '../pages/Layout';
import NotFound from '../pages/NotFound';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path='/' element={<Issue />} />
          <Route path='/:id' element={<IssueDetail />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
