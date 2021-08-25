import React from 'react';
import PropTypes from 'prop-types';
import { TableCell } from '../table';
import styled from 'styled-components';
import { noData } from 'src/assets/images';
import colors from 'src/vars/colors';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  ${({ height }) => `height: ${height}px;`};
`;
const Text = styled.p`
  font-family: PoppinsRegular;
  font-size: 14px;
  text-align: center;
  color: ${colors.primary};
`;

const Image = styled.img``;

const TableRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
  :hover {
    background-color: #fff !important;
  }
`;

const NoData = (props) => {
  return (
    <TableRow {...props}>
      <TableCell colSpan={props.colSpan}>
        <LoaderWrapper height={props.height}>
          <Image src={noData} />
          <Text>No record found</Text>
        </LoaderWrapper>
      </TableCell>
    </TableRow>
  );
};

NoData.propTypes = {
  height: PropTypes.number.isRequired,
  colSpan: PropTypes.number.isRequired
};
NoData.defaultProps = {
  height: 10,
  colSpan: 3
};

export default NoData;
