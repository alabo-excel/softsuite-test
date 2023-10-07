import HeaderNav from '@/components/HeaderNav';
import SideBar from '@/components/SideBar';
import FooterNav from '@/components/FooterNav';
import React, { Fragment } from 'react';

const MainLayout = ({ children }) => {
  return (
    <Fragment>
      <title>Softsuite test</title>
      <HeaderNav />
      <main className='d-flex'>
        <SideBar />
        <section>
          {children}
        </section>
      </main>
      <FooterNav />
    </Fragment>
  );
};

export default MainLayout;