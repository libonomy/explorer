import React from 'react';
import Header from '../header/index';
import styled from 'styled-components';

const Wrapper = styled.div``;
class Layout extends React.Component {
  render() {
    return (
      <Wrapper>
        <Header />
        <Wrapper>{this.props.children}</Wrapper>
      </Wrapper>
    );
  }
}

export default Layout;
