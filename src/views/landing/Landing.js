import React from 'react';
import styled from 'styled-components';
import { Banner, Main } from './components';

const Wrapper = styled.div``;

const Landing = () => {
  return (
    <Wrapper>
      <Banner />
      <Main />
    </Wrapper>
  );
};

export default Landing;
