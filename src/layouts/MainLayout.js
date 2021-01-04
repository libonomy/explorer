import React from 'react';
import styled from 'styled-components';
import { Header } from 'src/components';

const Wrapper = styled.div``;

const MainLayout = ({ children }) => {
  return (
    <Wrapper>
      <Header />
      <Wrapper>{children}</Wrapper>
    </Wrapper>
  );
};

export default MainLayout;
