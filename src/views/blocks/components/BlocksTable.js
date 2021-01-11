import React, { useEffect } from 'react';
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

const BlocksTable = () => {
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
        <Text>Block #11540841 to #11540865 (Total of 11,540,866 blocks)</Text>
        {matches && <Pagination />}
      </Header>
      <Table hover>
        <TableHead>
          <TableRow>
            <TableHeading>Height</TableHeading>
            <TableHeading>Block Hash</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>Txs</TableHeading>
            <TableHeading>Proposer</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {latestBlocks &&
            !latestBlocksLoading &&
            latestBlocks.result.block_metas.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link to={`/blocks/${item.header.height}`}>
                    {item.header.height}
                  </Link>
                </TableCell>
                <TableCell>{item.block_id.hash}</TableCell>
                <TableCell>
                  {moment(item.header.time, 'YYYYMMDD').fromNow()}
                </TableCell>
                <TableCell>{item.header.num_txs}</TableCell>
                <TableCell>{item.header.proposer_address}</TableCell>
              </TableRow>
            ))}

          {!latestBlocksLoading && !latestBlocks && (
            <NoData colSpan={6} height={300} />
          )}
          {latestBlocksLoading && <TableLoader colSpan={6} height={300} />}
        </TableBody>
      </Table>
      <Footer>
        <Pagination />
      </Footer>
    </Wrapper>
  );
};

export default BlocksTable;
