import React from 'react';
import styled from 'styled-components';
import { PageContainer } from 'src/components';
import BlocksTable from './components/Table';

const Blocks = () => {
  return (
    <PageContainer heading="All Blocks">
      <BlocksTable />
    </PageContainer>
  );
};

export default Blocks;
