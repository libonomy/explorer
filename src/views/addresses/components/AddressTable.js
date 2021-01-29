import React, { useEffect, useState } from 'react';
import {
  NoData,
  Pagination,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeading,
  TableLoader,
  TableRow,
  IconText
} from 'src/components';
import { useMediaQuery } from 'src/hooks';
import styled from 'styled-components';
// import { View } from 'src/components';
import Tooltip from 'react-simple-tooltip';
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

const View = styled(Tooltip)`
  font-family: PoppinsRegular;
  font-size: 12px;
`;

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
  useEffect(() => {
    const filter = {
      'transfer.recipient': params.address
      // 'message.sender': params.addresse
    };
    dispatch(getTransactionsByAddresses(filter));
  }, [params.address]);

  return (
    <Wrapper>
      <Header>
        <Text>A total of {txs && txs.total_count} transactions found</Text>
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
          {txs &&
            !txsLoading &&
            txs.txs.map((item, index) => (
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
                  <NumberFormat
                    value={item.tx.value.msg[0].value.amount[0].amount / SCALE}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                  <Text uppercase={true}>
                    {' '}
                    {item.tx.value.msg[0].value.amount[0].denom.replace(
                      SYMBOL_REGEX,
                      ''
                    )}
                  </Text>
                </TableCell>
              </TableRow>
            ))}
          {!txsLoading && !txs && <NoData colSpan={6} height={345} />}
          {txsLoading && <TableLoader colSpan={6} height={345} />}
        </TableBody>
      </Table>

      <Footer></Footer>
    </Wrapper>
  );
};

export default withRouter(AddressTable);
