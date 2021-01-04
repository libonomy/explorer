import React from 'react';
import { PageContainer } from 'src/components';
import TxsTable from './components/Table';

const Transactions = () => {
  return (
    <PageContainer heading="All Transactions">
      <TxsTable />
    </PageContainer>
  );
};

export default Transactions;
