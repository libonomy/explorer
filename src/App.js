import React from 'react';
import styled from 'styled-components';
import GlobalStyle from 'src/globalStyle';
import MainApp from 'src/navigation/RouterConfig';
import { Provider } from 'react-redux';
import store, { persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Wrapper = styled.div``;
const App = () => {
  return (
    <Wrapper>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <GlobalStyle />
          <MainApp />
        </PersistGate>
      </Provider>
    </Wrapper>
  );
};

export default App;
