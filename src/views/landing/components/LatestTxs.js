import React from 'react';
import { Table } from 'reactstrap';
import { successIcon, failIcon } from 'src/assets/images';
import styled from 'styled-components';
import colors from 'src/vars/colors';

const Wrapper = styled.div`
  overflow-y: auto;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: ${colors.shaddow};
`;

const TableCol = styled.td`
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
  font-family: PoppinsMedium;
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: 0.54px;
  margin-left: 10px;
`;

const Text = styled.span`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.36px;
  text-align: left;
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

const TextIconWrapper = styled.div``;
const Icon = styled.img`
  margin-right: 5px;
`;

const LatestTxs = () => {
  return (
    <Wrapper>
      <Header>Latest Transactions</Header>
      <Table hover>
        <TableHeader>
          <TableRow>
            <TableHeading>Height</TableHeading>
            <TableHeading>Block Hash</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>Status</TableHeading>
            <TableHeading>To</TableHeading>
            <TableHeading>From</TableHeading>
            <TableHeading>Value</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCol>1234841</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3{' '}
            </TableCol>
            <TableCol>1 min ago</TableCol>
            <TableCol>
              <TextIconWrapper>
                <Icon src={successIcon}></Icon>
                <Text>success</Text>
              </TextIconWrapper>
            </TableCol>
            <TableCol>0xada02c3fe00720a4a204cbb6963af13478167d6b</TableCol>
            <TableCol>0xada02c3fe00720a4a204cbb6963af13478167d6b</TableCol>
            <TableCol>2 libocoin</TableCol>
          </TableRow>
          <TableRow>
            <TableCol>1234841</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3{' '}
            </TableCol>
            <TableCol>1 min ago</TableCol>
            <TableCol>
              <TextIconWrapper>
                <Icon src={failIcon}></Icon>
                <FailText>fail</FailText>
              </TextIconWrapper>
            </TableCol>
            <TableCol>0xada02c3fe00720a4a204cbb6963af13478167d6b</TableCol>
            <TableCol>0xada02c3fe00720a4a204cbb6963af13478167d6b</TableCol>
            <TableCol>2 libocoin</TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default LatestTxs;
