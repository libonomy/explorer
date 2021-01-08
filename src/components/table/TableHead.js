import React from 'react';
import styled from 'styled-components';

const Header = styled.thead`
  border: solid 0.5px rgba(0, 0, 0, 0.1) 0;
  background-color: rgba(240, 249, 250, 0.8);
`;

const TableHead = ({ children, rest }) => {
  return <Header {...rest}>{children}</Header>;
};

export default TableHead;
