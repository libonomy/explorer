import React, { useEffect } from 'react';
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

const TopAccountTable = () => {
  const matches = useMediaQuery('(min-width:600px)');

  return (
    <Wrapper>
      <Header>
        <Text>A total of ,999,999 accounts found (114,257,029.967 libo)</Text>
        {matches && <Pagination />}
      </Header>
      <Table hover>
        <TableHead>
          <TableRow>
            <TableHeading>Rank</TableHeading>
            <TableHeading> Address</TableHeading>
            <TableHeading>Name Tag </TableHeading>
            <TableHeading>Balance</TableHeading>
            <TableHeading>Percentage</TableHeading>
            <TableHeading>Txn Count</TableHeading>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell>{row.rank}</TableCell>
              <TableCell>{row.address}</TableCell>
              <TableCell>{row.nametag}</TableCell>
              <TableCell> {row.balance}</TableCell>
              <TableCell> {row.percentage}%</TableCell>
              <TableCell>{row.txncount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Footer>
        <Pagination />
      </Footer>
    </Wrapper>
  );
};

export default TopAccountTable;
function createData(rank, address, nametag, balance, percentage, txncount) {
  return { rank, address, nametag, balance, percentage, txncount };
}

const rows = [
  createData(
    1,
    0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2,
    'Wrapped Ether',
    '5,230,742.99066034 ',
    4.57804915,
    '1,087,940'
  ),
  createData(
    2,
    0xbe0eb53f46cd790cd13851d5eff43d12404d33e8,
    'Binance 7',
    '2,897,785.84180003 ',
    2.53619917,
    775
  ),
  createData(
    3,
    0x00000000219ab540356cbb839cbe05303d7705fa,
    'Eth2 Deposit Contract',
    '2,507,170.000069 ',
    2.1943245,
    '52,147'
  ),
  createData(
    4,
    0x00000000219ab540356cbb839cbe05303d7705fa,
    'Huobi 6',
    '11,507,170.000069 ',
    1.1943245,
    '42,147'
  ),
  createData(
    5,
    0x00000000219ab540356cbb839cbe05303d7705fa,
    'Kraken 6	',
    '6,507,170.000069 ',
    0.1943245,
    '12,147'
  ),
  createData(
    6,
    0x00000000219ab540356cbb839cbe05303d7705fa,
    'Bitfinex 2',
    '5,507,170.000069 ',
    3.1943245,
    '72,147'
  )
];
