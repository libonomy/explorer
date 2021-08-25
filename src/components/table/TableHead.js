import React from 'react';
import styled from 'styled-components';

const Header = styled.thead`
  border: solid 0.5px rgba(0, 0, 0, 0.1) 0;
  background-color: #f0f4ff;
`;

const TableHead = (props) => {
  return <Header {...props}>{props.children}</Header>;
};

export default TableHead;
