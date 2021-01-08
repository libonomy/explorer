import React from 'react';
import styled from 'styled-components';

const Body = styled.tbody``;

const TableBody = ({ children, rest }) => {
  return <Body {...rest}>{children}</Body>;
};

export default TableBody;
