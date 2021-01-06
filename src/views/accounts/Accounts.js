import React from 'react';
import styled from 'styled-components';
import { PageContainer } from 'src/components';
import BlocksTable from './components/Table';

const Accounts = () => {
  return (
    <PageContainer heading="Top Accounts">
      <BlocksTable />
    </PageContainer>
  );
};

export default Accounts;
