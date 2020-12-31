import React from 'react';
import Header from '../header/index';
import styled from 'styled-components';

const Wrapper = styled.div``;
class Layout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        {/* all app children components goes there */}
        <Wrapper>{this.props.children}</Wrapper>
        {/* calling footer component  */}

        {/* <Footer /> */}
      </Wrapper>
    );
  }
}

export default Layout;
