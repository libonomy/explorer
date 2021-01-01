import React from 'react';
import styled from 'styled-components';
import { Header } from 'src/components';
import { Footer } from 'src/components';
const Wrapper = styled.div``;

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Wrapper>{children}</Wrapper>
      <Footer />
    </Wrapper>
  );
};

export default MainLayout;
