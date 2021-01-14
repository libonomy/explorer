import React from 'react';
import { PageContainer } from 'src/components';
import Cards from './components/Cards';
import AddressesTable from './components/AddressesTable';
import styled from 'styled-components';
const Wrapper = styled.div``;
const ViewAddresses = () => {
  return (
    <Wrapper>
      <Cards />
      <PageContainer heading="Addresses">
        <AddressesTable />
      </PageContainer>
    </Wrapper>
  );
};
export default ViewAddresses;
