import { Outlet } from 'react-router-dom';

import Header from '../components/header/Header.tsx';

const AppRoute = () => {
  return (
    <>
        <Header />
        <Outlet />
    </>
  );
}

export default AppRoute;
