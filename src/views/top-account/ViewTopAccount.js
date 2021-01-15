import React from 'react';
import { PageContainer } from 'src/components';
import { TopAccountTable } from './components';
const TopAccount = () => {
  return (
    <PageContainer heading="Top Account">
      <TopAccountTable />
    </PageContainer>
  );
};

export default TopAccount;
