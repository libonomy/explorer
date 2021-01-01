import React from 'react';
import { PageContainerTb } from 'src/components';
import TxsTable from './components/Table';

const Transactions = () => {
  return (
    <PageContainerTb heading="All Transactions">
      <TxsTable />
    </PageContainerTb>
  );
};

export default Transactions;
