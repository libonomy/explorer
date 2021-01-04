import React from 'react';
import { Table } from 'reactstrap';
import colors from 'src/vars/colors';
import styled from 'styled-components';

const TableHeading = styled.th`
  width: 25%;
`;
const HeadingWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TableCol = styled.td`
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
const Overview = () => {
  return (
    <Table responsive>
      <TableBody>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Height</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>123458</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Timestamp</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>2 mins ago (Apr-11-2020 07:02:58 PM +UTC)</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Transactions</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>
            18 transactions and 5 contract internal transactions in this block{' '}
          </TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>MInd by</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>Mining-dutcuh</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Block Reward</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>2.0130382494 Ether (2 + 0.0130382494</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Uncle Reward</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>0</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Gas Used</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>2.0130382494 Ether (2 + 0.0130382494</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Gas Limit</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>2</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Difficulty</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>2.0130382494 Ether (2 + 0.0130382494</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Total Difficulty</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>2.0130382494 Ether (2 + 0.0130382494</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Size</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>2.0130382494 Ether (2 + 0.0130382494</TableCol>
        </TableRow>
        <TableRow>
          <TableHeading scope="row">
            <HeadingWraper>
              <Icon>?</Icon>
              <Heading>Extra data</Heading>
            </HeadingWraper>
          </TableHeading>
          <TableCol>2.0130382494 Ether (2 + 0.0130382494</TableCol>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default Overview;
