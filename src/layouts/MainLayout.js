import React from 'react';
import styled from 'styled-components';
import { Header, NavBar, Footer } from 'src/components';

const Wrapper = styled.div``;

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <NavBar />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
