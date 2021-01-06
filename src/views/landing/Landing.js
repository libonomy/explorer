import React, { Fragment, useEffect } from 'react';
import styled from 'styled-components';
import { Banner, Main } from './components';

const Wrapper = styled.div`
  margin-top: -46px;
`;

const Landing = () => {
  useEffect(() => {
    const element = document.getElementsByClassName('YefZl');
    element[0].style['background-color'] = 'transparent';
  }, []);
  return (
    <Wrapper>
      <Banner />
      <Main />
    </Wrapper>
  );
};

export default Landing;
