import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getBlocksByHeight } from 'src/redux/actions';
import colors from 'src/vars/colors';
import styled from 'styled-components';
import moment from 'moment';
import { TableLoader } from 'src/components';
import { NoData } from 'src/components';
const TableHeading = styled.th`
  width: 25%;
`;
const HeadingWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TableCell = styled.td`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.36px;
`;
const TableRow = styled.tr``;
const TableBody = styled.tbody``;

const Icon = styled.span`
  background: ${colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;
const Heading = styled.span`
  font-family: PoppinsMedium;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: 0.36px;
  text-align: left;
`;
const Overview = (props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBlocksByHeight(height));
  }, []);

  const { height } = props.match.params;
  const { block, blockLoading } = useSelector((state) => state.blocks);
  return (
    <Table responsive>
      {block && !blockLoading && (
        <TableBody>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <Icon>?</Icon>
                <Heading>Height</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>{height}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <Icon>?</Icon>
                <Heading>Timestamp</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>
              {moment(block.block.header.time).fromNow()} (
              {new Date(block.block.header.time).toLocaleTimeString()}{' '}
              {new Date(block.block.header.time).toLocaleDateString()})
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <Icon>?</Icon>
                <Heading>Transactions</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>
              {block.block.header.num_txs} transactions in this block{' '}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <Icon>?</Icon>
                <Heading>MInd by</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>{block.block.header.validators_hash}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <Icon>?</Icon>
                <Heading>Validator Hash</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>{block.block.header.validators_hash}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <Icon>?</Icon>
                <Heading>Proposer Hash</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>{block.block.header.proposer_address}</TableCell>
          </TableRow>
        </TableBody>
      )}
      {!blockLoading && !block && <NoData colSpan={6} height={300} />}
      {blockLoading && <TableLoader colSpan={6} height={300} />}
    </Table>
  );
};

export default withRouter(Overview);
