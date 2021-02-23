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
import { UncontrolledTooltip } from 'reactstrap';
import { useMediaQuery } from 'src/hooks';
import { getAllBlocks, getTotalSupply } from 'src/redux/actions';
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
const Tooltip = styled(UncontrolledTooltip)`
  .tooltip-inner {
    font-size: 12px !important;
    font-family: PoppinsRegular;
    background-color: #000;
  }
`;
const BlocksTable = () => {
  const matches = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();

  const [state, setState] = useState({ limit: 10, currentPage: 0 });
  // const supply = useSelector((state) => state.supply.totalSupply);

  useEffect(() => {
    dispatch(getAllBlocks(state.currentPage, state.limit));
  }, [state.currentPage, state.limit]);

  // useEffect(() => {
  //   dispatch(getTotalSupply());
  // }, []);

  const { latestBlocks, latestBlocksLoading } = useSelector(
    (state) => state.blocks
  );
  const pageHandler = (e, index) => {
    e.preventDefault();
    setState({
      ...state,
      currentPage: index - 1
    });
  };
  const changeLimit = (limit) => {
    let totalCount = (state.currentPage + 1) * state.limit;
    if (totalCount > latestBlocks.data.total_count) {
      totalCount = latestBlocks.data.total_count;
    }
    let currentPage = totalCount / limit;
    currentPage = Math.ceil(currentPage);
    if (currentPage) {
      setState({ ...state, limit, currentPage: currentPage - 1 });
    }
  };

  return (
    <Wrapper>
      {latestBlocks && latestBlocks.data.blocks.length >= 1 ? (
        <Header>
          {latestBlocks && (
            <Text>
              Block #{latestBlocks.data.blocks[0].block_meta.header.height} to #
              {
                latestBlocks.data.blocks[latestBlocks.data.blocks.length - 1]
                  .block_meta.header.height
              }{' '}
              ( Total of {latestBlocks.data.blocks.length} blocks)
            </Text>
          )}

          {matches && (
            <Pagination
              pageHandler={pageHandler}
              changeLimit={changeLimit}
              limit={state.limit}
              count={latestBlocks && latestBlocks.data.total_count}
              currentPage={state.currentPage}
            />
          )}
          {/* {console.log(latestBlocks.data.total_count, 'count')} */}
        </Header>
      ) : (
        <Header>
          <Text>Total of 0 blocks</Text>
        </Header>
      )}
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
            latestBlocks.data.blocks.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link
                    to={`/blocks/${item.block_meta.header.height}`}
                    id={`height_exp_alpha${index}`}>
                    {item.block_meta.header.height}
                  </Link>
                  <Tooltip
                    placement="right"
                    target={`height_exp_alpha${index}`}>
                    view block by height!
                  </Tooltip>
                </TableCell>
                <TableCell>{item.block_meta.block_id.hash}</TableCell>
                <TableCell>
                  {moment(item.block_meta.header.time).fromNow()}
                </TableCell>
                <TableCell>{item.block_meta.header.num_txs}</TableCell>
                <TableCell>{item.block_meta.header.proposer_address}</TableCell>
              </TableRow>
            ))}

          {!latestBlocksLoading && !latestBlocks && (
            <NoData colSpan={6} height={360} />
          )}
          {latestBlocksLoading && <TableLoader colSpan={6} height={360} />}
        </TableBody>
      </Table>
      {latestBlocks && latestBlocks.data.blocks.length >= 1 ? (
        <Footer>
          {' '}
          <Pagination
            pageHandler={pageHandler}
            changeLimit={changeLimit}
            count={latestBlocks && latestBlocks.data.total_count}
            limit={state.limit}
            currentPage={state.currentPage}
          />
        </Footer>
      ) : (
        ''
      )}
    </Wrapper>
  );
};

export default BlocksTable;
