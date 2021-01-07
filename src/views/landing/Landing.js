import React, { useEffect } from 'react';
import colors from 'src/vars/colors';
import styled from 'styled-components';
import { Banner, Main } from './components';

const Wrapper = styled.div`
  margin-top: -38px;
`;

const Landing = () => {
  useEffect(() => {
    const element = document.getElementById('navbar');
    if (element) {
      element.style.background = 'transparent';
    }
    return () => {
      element.style.background = colors.primary;
    };
  }, []);

  return (
    <Wrapper>
      <Banner />
      <Main />
    </Wrapper>
  );
};

export default Landing;
