import { Navigation } from 'components/Navigation/Navigation';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { NavContainer } from './Layout.styled';

export const Layout = () => {
  return (
    <>
      <header>
        <NavContainer>
        <Navigation />
        </NavContainer>
      </header>
      <main>
        <Suspense>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
};
