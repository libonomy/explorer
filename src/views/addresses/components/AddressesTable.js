import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
const Wrapper = styled.div`
  overflow-y: auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: row;
  justify-content: flex-end;
  padding: 1rem;
`;

const Footer = styled.div`
  display: flex;
  justify-content: row;
  justify-content: flex-end;
  padding: 1rem;
`;

const AddressesTable = () => {
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
      <Header>{matches && <Pagination />}</Header>
      <Table hover>
        <TableHead>
          <TableRow>
            <TableHeading>Transaction</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {latestBlocks &&
            !latestBlocksLoading &&
            latestBlocks.result.block_metas.map((item, index) => (
              <TableRow key={index}>
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

export default AddressesTable;
