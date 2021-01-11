import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '../table';
import styled from 'styled-components';
import { noData } from 'src/assets/images';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ height }) => `height: ${height}px;`};
`;

const Image = styled.img``;

const NoData = (props) => {
  return (
    <TableRow {...props}>
      <TableCell colSpan={props.colSpan}>
        <LoaderWrapper height={props.height}>
          <Image src={noData} />
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
