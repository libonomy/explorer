import React from 'react';
import styled from 'styled-components';

const Col = styled.td`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.36px;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const TableCell = ({ children, rest }) => {
  return <Col {...rest}>{children}</Col>;
};

export default TableCell;
