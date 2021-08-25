import React from 'react';
import PropTypes from 'prop-types';
import { TableCell, TableRow } from '../table';
import styled from 'styled-components';
import { Spinner } from 'reactstrap';

const LoaderWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${({ height }) => `height: ${height}px;`};
`;
const TableLoader = (props) => {
  return (
    <TableRow {...props}>
      <TableCell colSpan={props.colSpan}>
        <LoaderWrapper height={props.height}>
          <Spinner style={{ color: '#1f4bb1' }} />
        </LoaderWrapper>
      </TableCell>
    </TableRow>
  );
};

TableLoader.propTypes = {
  height: PropTypes.number.isRequired,
  colSpan: PropTypes.number.isRequired
};
TableLoader.defaultProps = {
  height: 10,
  colSpan: 3
};

export default TableLoader;
