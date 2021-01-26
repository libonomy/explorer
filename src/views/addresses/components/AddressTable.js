import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  NoData,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeading,
  TableLoader,
  TableRow
} from 'src/components';
import { useMediaQuery } from 'src/hooks';
import { getAllBlocks } from 'src/redux/actions';
import styled from 'styled-components';
import moment from 'moment';
// import { View } from 'src/components';
import Tooltip from 'react-simple-tooltip';
const Wrapper = styled.div`
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: row;
  justify-content: space-between;
  padding: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: row;
  justify-content: flex-end;
  padding: 1rem;
`;

const Text = styled.span`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.75;
  letter-spacing: 0.36px;
  text-align: left;
`;
const View = styled(Tooltip)`
  font-family: PoppinsRegular;
  font-size: 12px;
`;
const AddressTable = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBlocks());
  }, []);

  const { latestBlocks, latestBlocksLoading } = useSelector(
    (state) => state.blocks
  );
  return (
    <Wrapper>
      <Header>
        <Text> Latest 25 from a total of 286,378 transactions</Text>
      </Header>
      <Table hover>
        <TableHead>
          <TableRow>
            <TableHeading>Txn Hash</TableHeading>
            <TableHeading>Block</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>From</TableHeading>
            <TableHeading>To</TableHeading>
            <TableHeading>Value</TableHeading>
            <TableHeading>Txn Fee</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {latestBlocks &&
            !latestBlocksLoading &&
            latestBlocks.result.block_metas.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link to={`/blocks/${item.header.height}`}>
                    <View
                      content="View"
                      placement="right"
                      padding="4"
                      fontSize="12px"
                      fontFamily="PoppinsRegular">
                      {item.header.height}
                    </View>
                  </Link>
                </TableCell>
                <TableCell>{item.block_id.hash}</TableCell>
                <TableCell>{moment(item.header.time).fromNow()}</TableCell>
                <TableCell>{item.header.num_txs}</TableCell>
                <TableCell>{item.header.proposer_address}</TableCell>
                <TableCell>{item.header.proposer_address}</TableCell>
                <TableCell>{item.header.proposer_address}</TableCell>
              </TableRow>
            ))}

          {!latestBlocksLoading && !latestBlocks && (
            <NoData colSpan={6} height={300} />
          )}
          {latestBlocksLoading && <TableLoader colSpan={6} height={300} />}
        </TableBody>
      </Table>
      <Footer></Footer>
    </Wrapper>
  );
};

export default AddressTable;
