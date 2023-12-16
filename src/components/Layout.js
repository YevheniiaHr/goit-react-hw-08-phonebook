import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { AppBar, Container } from '@mui/material';

export const Layout = () => {
  return (
    <Container>
      <AppBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reversOrder={false} />
    </Container>
  );
};
