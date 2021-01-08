import React from 'react';
import styled from 'styled-components';

const Row = styled.tr``;
const TableRow = ({ children, rest }) => {
  return <Row {...rest}>{children}</Row>;
};

export default TableRow;
