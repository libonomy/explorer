import React from 'react';
import { Table } from 'reactstrap';
import { Pagination } from 'src/components';
import { useMediaQuery } from 'src/hooks';
import styled from 'styled-components';

const Wrapper = styled.div`
  overflow-y: auto;
`;

const TableCol = styled.td`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.36px;
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
  line-height: 1.75;
  letter-spacing: 0.36px;
  text-align: left;
`;

const BlocksTable = () => {
  const matches = useMediaQuery('(min-width:600px)');
  return (
    <Wrapper>
      <Header>
        <Text>Block #11540841 to #11540865 (Total of 11,540,866 blocks)</Text>
        {matches && <Pagination />}
      </Header>
      <Table hover>
        <TableHeader>
          <TableRow>
            <TableHeading>Height</TableHeading>
            <TableHeading>Block Hash</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>Txs</TableHeading>
            <TableHeading>Proposer</TableHeading>
            <TableHeading>Block Reward</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCol>9012738</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3
            </TableCol>
            <TableCol>2 years ago</TableCol>
            <TableCol>168</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3
            </TableCol>
            <TableCol>195146</TableCol>
          </TableRow>
          <TableRow>
            <TableCol>9012738</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3
            </TableCol>
            <TableCol>2 years ago</TableCol>
            <TableCol>168</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3
            </TableCol>
            <TableCol>195146</TableCol>
          </TableRow>
          <TableRow>
            <TableCol>9012738</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3
            </TableCol>
            <TableCol>2 years ago</TableCol>
            <TableCol>168</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3
            </TableCol>
            <TableCol>195146</TableCol>
          </TableRow>
          <TableRow>
            <TableCol>9012738</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3
            </TableCol>
            <TableCol>2 years ago</TableCol>
            <TableCol>168</TableCol>
            <TableCol>
              0xc7a5b3d6b969a4d12473acad1b298080e6941fca4dcf63dc7005e2aeb6b53fb3
            </TableCol>
            <TableCol>19514655</TableCol>
          </TableRow>
        </TableBody>
      </Table>
      <Footer>
        <Pagination />
      </Footer>
    </Wrapper>
  );
};

export default BlocksTable;
