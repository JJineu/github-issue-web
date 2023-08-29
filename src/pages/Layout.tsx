import React from 'react';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <>
      {/* {Organization Name / Repository Name} */}
      <Outlet />
    </>
  );
}
