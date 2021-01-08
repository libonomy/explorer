import React from 'react';
import { PageContainer } from 'src/components';
import TxsTable from './components/TxsTable';

const PendingTxs = () => {
  return (
    <PageContainer heading="Pending Transactions">
      <TxsTable />
    </PageContainer>
  );
};

export default PendingTxs;
