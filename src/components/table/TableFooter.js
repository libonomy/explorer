import React from 'react';
import styled from 'styled-components';

const Footer = styled.div`
  display: flex;
  justify-content: row;
  justify-content: flex-end;
  padding: 1rem;
`;

const TableFooter = (props) => {
  return <Footer {...props}>{props.children}</Footer>;
};

export default TableFooter;
