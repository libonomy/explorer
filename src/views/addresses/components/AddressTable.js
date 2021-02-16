import React, { useEffect, useState } from 'react';
import {
  NoData,
  Pagination,
  Table,
  TableBody,
  TableCell,
  // TableHead,
  TableHeading,
  TableLoader,
  TableRow,
  IconText
} from 'src/components';
import { UncontrolledTooltip } from 'reactstrap';
import { useMediaQuery } from 'src/hooks';
import styled from 'styled-components';
// import { View } from 'src/components';
import { useDispatch, useSelector } from 'react-redux';
import { getTransactionsByAddresses } from 'src/redux/actions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import { SCALE } from 'src/vars/scale';
import { SYMBOL_REGEX } from 'src/vars/regex';
import { successIcon, failIcon } from 'src/assets/images';
import colors from 'src/vars/colors';
import { withRouter, useParams } from 'react-router-dom';
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

// const View = styled(Tooltip)`
//   font-family: PoppinsRegular;
//   font-size: 12px;
// `;

const TableHeader = styled.thead`
  border: solid 0.5px rgba(0, 0, 0, 0.1) 0;
  background-color: rgba(240, 249, 250, 0.8);
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
const TextExp = styled.span`
  font-family: PoppinsRegular;
  font-size: 12px;
  text-align: left;
  margin: 12px 0px;
`;
const Tooltip = styled(UncontrolledTooltip)`
  font-size: 10px;
  font-family: PoppinsRegular;
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

const AddressTable = (props) => {
  const matches = useMediaQuery('(min-width:600px)');
  const dispatch = useDispatch();
  const params = useParams();
  const { txs, txsLoading } = useSelector((state) => state.addresses);
  const [state, setState] = useState({ limit: 10, currentPage: 0 });
  const pageHandler = (e, index) => {
    e.preventDefault();
    setState({
      ...state,
      currentPage: index - 1
    });
  };
  const changeLimit = (limit) => {
    setState({ ...state, limit });
  };
  useEffect(() => {
    const filter = {
      address: params.address,
      page: state.currentPage,
      limit: state.limit
    };
    dispatch(getTransactionsByAddresses(filter));
  }, [params.address, state.limit, state.currentPage]);

  return (
    <Wrapper>
      {txs && txs.data.count >= 1 ? (
        <Header>
          <Text>A total of {txs && txs.data.count} transactions found</Text>
          {matches && (
            <Pagination
              pageHandler={pageHandler}
              changeLimit={changeLimit}
              count={txs && txs.data.count}
              limit={state.limit}
              currentPage={state.currentPage}
            />
          )}
        </Header>
      ) : (
        <Header>
          <Text>A total of {txs && txs.data.count} transactions found</Text>
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
            !txsLoading &&
            txs.data.txs.map((item, index) => (
              <TableRow key={index}>
                <TableCell id={`txhash${index}`}>
                  <Link to={`/txs/${item.txhash}`}>{item.txhash}</Link>
                  <Tooltip placement="right" target={`txhash${index}`}>
                    view detail
                  </Tooltip>
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
                <TableCell id={`from_address${index}`}>
                  <Link
                    to={`/addresses/${item.tx.value.msg[0].value.from_address}`}>
                    {item.tx.value.msg[0].value.from_address}
                  </Link>
                  <Tooltip placement="right" target={`from_address${index}`}>
                    view details
                  </Tooltip>
                </TableCell>
                <TableCell id={`to_address${index}`}>
                  <Link
                    to={`/addresses/${item.tx.value.msg[0].value.to_address}`}>
                    {item.tx.value.msg[0].value.to_address}
                  </Link>
                  <Tooltip placement="right" target={`to_address${index}`}>
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
          {!txsLoading && txs?.data.txs?.length === 0 && (
            <NoData colSpan={6} height={360} />
          )}
          {txsLoading && <TableLoader colSpan={6} height={360} />}
        </TableBody>
      </Table>
      {txs && txs.data.count >= 1 ? (
        <Footer>
          <Pagination
            pageHandler={pageHandler}
            changeLimit={changeLimit}
            count={txs && txs.data.count}
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

export default withRouter(AddressTable);
