import React from 'react';
import styled from 'styled-components';
import { PageContainer } from 'src/components';
import TxsTable from './components/TxsTable';

const InternalTxs = () => {
  return (
    <PageContainer heading="Contract Internal Transactions">
      <TxsTable />
    </PageContainer>
  );
};

export default InternalTxs;
