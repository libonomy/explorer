import React from 'react';
import styled from 'styled-components';
import { PageContainer } from 'src/components';
import BlocksTable from './components/Table';

const VerifiedContracts = () => {
  return (
    <PageContainer heading="Contracts">
      <BlocksTable />
    </PageContainer>
  );
};

export default VerifiedContracts;
