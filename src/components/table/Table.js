import React from 'react';
import styled from 'styled-components';
import { Table as RsTable } from 'reactstrap';

const TableExp = styled(RsTable)``;

const Table = ({ children, rest }) => {
  return <TableExp {...rest}>{children}</TableExp>;
};

export default Table;
