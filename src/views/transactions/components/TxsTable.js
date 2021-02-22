import React, { useEffect, useState } from 'react';
import { Table, UncontrolledTooltip } from 'reactstrap';
import { IconText, NoData, TableLoader, Pagination } from 'src/components';
import { successIcon, failIcon } from 'src/assets/images';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { useMediaQuery } from 'src/hooks';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'src/redux/actions';
import { Link, withRouter } from 'react-router-dom';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import { SCALE } from 'src/vars/scale';
import { SYMBOL_REGEX } from 'src/vars/regex';

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
const TableRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;
const TableBody = styled.tbody`
  height: 405px;
  display: table;
  width: 100%;
  table-layout: fixed;
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
  letter-spacing: 0.36px;
  text-align: left;
  ${({ success }) => (success ? `color:${colors.darkerGreen}` : null)}
  ${({ uppercase }) => uppercase && `text-transform: uppercase `}
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

const Tooltip = styled(UncontrolledTooltip)`
  font-size: 10px;
  font-family: PoppinsRegular;
`;

const TxsTable = (props) => {
  const matches = useMediaQuery('(min-width:600px)');

  const [state, setState] = useState({ limit: 10, currentPage: 0 });
  const dispatch = useDispatch();

  const { latestTxs, latestTxsLoading } = useSelector((state) => state.txs);

  const queryString = require('query-string');
  const { block } = queryString.parse(props.location.search);

  let txs = latestTxs && latestTxs.data.txs;
  useEffect(() => {
    const filter = {
      page: state.currentPage,
      limit: state.limit,
      blockHeight: block
    };
    dispatch(getAllTransactions(filter));
  }, [block, state.currentPage, state.limit]);

  const pageHandler = (e, index) => {
    e.preventDefault();
    setState({
      ...state,

      currentPage: index - 1
    });
  };
  const changeLimit = (limit) => {
    let totalCount = (state.currentPage + 1) * state.limit;
    if (totalCount > latestTxs.data.total_count) {
      totalCount = latestTxs.data.total_count;
    }
    let currentPage = totalCount / limit;
    currentPage = Math.ceil(currentPage);
    if (currentPage) {
      setState({ ...state, limit, currentPage: currentPage - 1 });
    }
  };

  return (
    <Wrapper>
      {txs && txs.length >= 1 ? (
        <Header>
          <Text>A total of {txs && txs.length} latest transactions</Text>
          {matches && (
            <Pagination
              pageHandler={pageHandler}
              changeLimit={changeLimit}
              count={latestTxs && latestTxs.data.count}
              limit={state.limit}
              currentPage={state.currentPage}
            />
          )}
        </Header>
      ) : (
        <Header>
          <Text>A total of {txs && txs.length} latest transactions</Text>
        </Header>
      )}
      <Table hover>
        <TableHeader>
          <TableRow>
            <TableHeading>Tx Hash</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>Status</TableHeading>
            <TableHeading>From</TableHeading>
            <TableHeading>To</TableHeading>
            <TableHeading>Value</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          {txs &&
            !latestTxsLoading &&
            txs.map((item, index) => (
              <TableRow key={index}>
                <TableCell id={`txhash_exp_alpha${index}`}>
                  <Link to={`/txs/${item.txhash}`}>{item.txhash}</Link>
                  <Tooltip
                    placement="right"
                    target={`txhash_exp_alpha${index}`}>
                    view tx by hash
                  </Tooltip>
                </TableCell>
                <TableCell>{moment(item.timestamp).fromNow()}</TableCell>

                <TableCell>
                  {item.logs && item.logs[0].success ? (
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
                <TableCell id={`from_address_alpha${index}`}>
                  <Link
                    to={`/addresses/${item.tx.value.msg[0].value.from_address}`}>
                    {item.tx.value.msg[0].value.from_address}
                  </Link>
                  <Tooltip
                    placement="right"
                    target={`from_address_alpha${index}`}>
                    view details
                  </Tooltip>
                </TableCell>
                <TableCell id={`to_address_alpha${index}`}>
                  <Link
                    to={`/addresses/${item.tx.value.msg[0].value.to_address}`}>
                    {item.tx.value.msg[0].value.to_address}
                  </Link>
                  <Tooltip
                    placement="right"
                    target={`to_address_alpha${index}`}>
                    view details
                  </Tooltip>
                </TableCell>
                <TableCell>
                  <NumberFormat
                    value={item.tx.value.msg[0].value.amount[0].amount / SCALE}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                  <Text uppercase>
                    {' '}
                    {item.tx.value.msg[0].value.amount[0].denom.replace(
                      SYMBOL_REGEX,
                      ''
                    )}
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          {!latestTxsLoading && !txs?.length && (
            <NoData colSpan={6} height={360} />
          )}
          {latestTxsLoading && <TableLoader colSpan={6} height={360} />}
        </TableBody>
      </Table>
      {txs && txs.length >= 1 ? (
        <Footer>
          <Pagination
            pageHandler={pageHandler}
            changeLimit={changeLimit}
            count={latestTxs && latestTxs.data.count}
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

export default withRouter(TxsTable);
