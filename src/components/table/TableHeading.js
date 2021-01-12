import React from 'react';
import styled from 'styled-components';

const Heading = styled.th`
  font-family: PoppinsBold;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: 0.36px;
  text-align: left;
  color: #000000;
  border-bottom: 0px !important;
`;

const TableHeading = (props) => {
  return <Heading {...props}>{props.children}</Heading>;
};

export default TableHeading;
