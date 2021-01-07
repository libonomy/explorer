import React from 'react';
import { PageContainer } from 'src/components';
import BlocksTable from './components/Table';

const ForkedBlocks = () => {
  return (
    <PageContainer heading="Forked Blocks">
      <BlocksTable />
    </PageContainer>
  );
};

export default ForkedBlocks;
