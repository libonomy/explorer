import React from 'react';
import styled from 'styled-components';

const Row = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;
const TableRow = (props) => {
  return <Row {...props}>{props.children}</Row>;
};

export default TableRow;
