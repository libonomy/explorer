import React from 'react';
import styled from 'styled-components';
import { PageContainerTb } from 'src/components';
import BlocksTable from './components/Table';

const Blocks = () => {
  return (
    <PageContainerTb heading="All Blocks">
      <BlocksTable />
    </PageContainerTb>
  );
};

export default Blocks;
