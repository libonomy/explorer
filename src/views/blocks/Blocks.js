import React from 'react';
import styled from 'styled-components';
import { PageContainerTb, Pagination } from 'src/components';
import { Table } from 'reactstrap';

const TableCol = styled.td`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.36px;
  text-align: left;
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

const Blocks = () => {
  return (
    <PageContainerTb heading="All Blocks">
      <Pagination />
      <Table hover>
        <TableHeader>
          <TableRow>
            <TableHeading>#</TableHeading>
            <TableHeading>First Name</TableHeading>
            <TableHeading>Last Name</TableHeading>
            <TableHeading>Username</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCol>Mark</TableCol>
            <TableCol>Otto</TableCol>
            <TableCol>@mdo</TableCol>
            <TableCol>@mdo</TableCol>
          </TableRow>
          <TableRow>
            <TableCol>Jacob</TableCol>
            <TableCol>Thornton</TableCol>
            <TableCol>@fat</TableCol>
            <TableCol>@fat</TableCol>
          </TableRow>
          <TableRow>
            <TableCol>Larry</TableCol>
            <TableCol>the Bird</TableCol>
            <TableCol>@twitter</TableCol>
            <TableCol>@twitter</TableCol>
          </TableRow>
        </TableBody>
      </Table>
    </PageContainerTb>
  );
};

export default Blocks;
