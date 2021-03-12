import React from 'react';
import styled from 'styled-components';
import { Header, NavBar, Footer, Notification } from 'src/components';

const Wrapper = styled.div``;

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      {/* <Notification /> */}
      <Header />
      <NavBar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
