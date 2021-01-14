import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';
import { IconText, NoData, Pagination, TableLoader } from 'src/components';
import { successIcon, failIcon } from 'src/assets/images';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { useMediaQuery } from 'src/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'src/redux/actions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import { SCALE } from 'src/vars/scale';
const Wrapper = styled.div`
  overflow-y: auto;
`;

const TableCell = styled.td`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.36px;
  text-align: left;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TableHeading = styled.th`
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
const TableHeader = styled.thead`
  border: solid 0.5px rgba(0, 0, 0, 0.1) 0;
  background-color: rgba(240, 249, 250, 0.8);
`;
const TableRow = styled.tr``;
const TableBody = styled.tbody``;

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
  letter-spacing: 0.36px;
  text-align: left;
  ${({ success }) => (success ? `color:${colors.darkerGreen}` : null)}
`;
const FailText = styled.span`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.36px;
  text-align: left;
  color: ${colors.red};
`;
const Icon = styled.img`
  margin-right: 5px;
`;

const TxsTable = () => {
  const matches = useMediaQuery('(min-width:600px)');

  const [state, setState] = useState({ limit: 10, currentPage: 1 });
  const dispatch = useDispatch();
  const { latestTxs, latestTxsLoading } = useSelector((state) => state.txs);
  useEffect(() => {
    const filter = {
      'tx.minheight': 1,
      'tx.maxheight': 1000000,
      page: state.currentPage,
      limit: state.limit
    };
    dispatch(getAllTransactions(filter));
  }, [state.limit, state.currentPage]);

  const pageHandler = (e, index) => {
    e.preventDefault();
    setState({
      ...state,
      currentPage: index
    });
  };

  const changeLimit = (limit) => {
    setState({ ...state, limit });
  };

  return (
    <Wrapper>
      <Header>
        <Text>
          A total of {latestTxs && latestTxs.total_count} transactions found
        </Text>
        {matches && (
          <Pagination
            pageHandler={pageHandler}
            changeLimit={changeLimit}
            count={latestTxs && latestTxs.total_count}
            limit={state.limit}
            currentPage={state.currentPage}
          />
        )}
      </Header>
      <Table hover>
        <TableHeader>
          <TableRow>
            <TableHeading>Tx Hash</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>Status</TableHeading>
            <TableHeading>To</TableHeading>
            <TableHeading>From</TableHeading>
            <TableHeading>Value</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          {latestTxs &&
            !latestTxsLoading &&
            latestTxs.txs.map((item, index) => (
              <TableRow key={index}>
                <TableCell>
                  <Link to={`/txs/${item.txhash}`}>{item.txhash}</Link>
                </TableCell>
                <TableCell>{moment(item.timestamp).fromNow()}</TableCell>
                <TableCell>
                  {item.logs[0].success ? (
                    <IconText>
                      <Icon src={successIcon}></Icon>
                      <Text success>success</Text>
                    </IconText>
                  ) : (
                    <IconText>
                      <Icon src={failIcon}></Icon>
                      <FailText>fail</FailText>
                    </IconText>
                  )}
                </TableCell>
                <TableCell>
                  <Link disabled>
                    {item.tx.value.msg[0].value.from_address}
                  </Link>
                </TableCell>
                <TableCell>
                  <Link disabled>{item.tx.value.msg[0].value.to_address}</Link>
                </TableCell>
                <TableCell>
                  {item.tx.value.msg[0].value.amount[0].denom}
                  <NumberFormat
                    value={item.tx.value.msg[0].value.amount[0].amount / SCALE}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                </TableCell>
              </TableRow>
            ))}
          {!latestTxsLoading && !latestTxs && (
            <NoData colSpan={6} height={300} />
          )}
          {latestTxsLoading && <TableLoader colSpan={6} height={300} />}
        </TableBody>
      </Table>
      <Footer>
        <Pagination
          pageHandler={pageHandler}
          changeLimit={changeLimit}
          count={latestTxs && latestTxs.total_count}
          limit={state.limit}
          currentPage={state.currentPage}
        />
      </Footer>
    </Wrapper>
  );
};

export default TxsTable;
