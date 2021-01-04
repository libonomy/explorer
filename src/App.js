import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'src/globalStyle';
import MainApp from 'src/navigation/RouterConfig';

const Wrapper = styled.div``;
const App = () => {
  return (
    <Wrapper>
      <GlobalStyle />
      <MainApp />
    </Wrapper>
  );
};

export default App;
