import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter, useParams, Link } from 'react-router-dom';
import { Table } from 'reactstrap';
import { getBlocksByHeight, getAllTransactions } from 'src/redux/actions';
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
const Text = styled.span`
  background: ${colors.chipColor};
  border-radius: 5px;
  padding: 4px 11px;
  font-family: PoppinsMedium;
  color: #000;
  &:hover {
    color: #fff;
    background: ${colors.primary};
  }
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
const LinkExp = styled(Link)`
  text-decoration: none !important;
`;
const Overview = (props) => {
  const dispatch = useDispatch();
  const params = useParams();
  const { height } = props.match.params;
  const { block, blockLoading } = useSelector((state) => state.blocks);
  useEffect(() => {
    const filter = {
      blockHeight: params.height
    };

    dispatch(getBlocksByHeight(height));
    dispatch(getAllTransactions(filter));
  }, [params.height]);
  return (
    <Table responsive>
      <TableBody>
        {block && !blockLoading && (
          <>
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
                {new Date(block.block.header.time).toUTCString()})
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
                <LinkExp to={`/txs?block=${height}`}>
                  <Text> {block.block.header.num_txs} transactions </Text>
                </LinkExp>{' '}
                &nbsp; in this block{' '}
              </TableCell>
            </TableRow>
            <TableRow>
              <TableHeading scope="row">
                <HeadingWraper>
                  <Icon>?</Icon>
                  <Heading>Mind by</Heading>
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
          </>
        )}
        {!blockLoading && !block && <NoData colSpan={6} height={245} />}
        {blockLoading && <TableLoader colSpan={6} height={245} />}
      </TableBody>
    </Table>
  );
};

export default withRouter(Overview);
