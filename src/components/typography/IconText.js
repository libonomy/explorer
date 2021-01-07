import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  a,
  span {
    max-width: 90px;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
const IconText = ({ children, rest }) => (
  <Wrapper {...rest}>{children}</Wrapper>
);

export default IconText;
