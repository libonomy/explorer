import React from 'react';
import styled from 'styled-components';

const Row = styled.tr``;
const TableRow = (props) => {
  return <Row {...props}>{props.children}</Row>;
};

export default TableRow;
