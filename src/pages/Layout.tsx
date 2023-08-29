import React from 'react';
import { Outlet } from 'react-router-dom';
import { OWNER, REPO } from '../constants';

export default function Layout() {
  return (
    <>
      <h1>
        {OWNER} / {REPO}
      </h1>
      <Outlet />
    </>
  );
}
