import React from 'react';
import { PageContainer } from 'src/components';
import { BlocksTable } from './components';
const Blocks = () => {
  return (
    <PageContainer heading="All Blocks">
      <BlocksTable />
    </PageContainer>
  );
};

export default Blocks;
