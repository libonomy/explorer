import React from 'react';
import styled from 'styled-components';

const Body = styled.tbody``;

const TableBody = (props) => {
  return <Body {...props}>{props.children}</Body>;
};

export default TableBody;
