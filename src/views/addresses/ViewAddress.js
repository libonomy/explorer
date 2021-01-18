import React, { Fragment, useState } from 'react';
import { PageContainer } from 'src/components';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { AddressInfo, TabsSection } from './components';
import copy from 'copy-to-clipboard';
import { ToolTipExp } from 'src/components';
const containerStyles = { paddingTop: 0, boxShadow: 'none' };
const SubHeading = styled.h6`
  color: ${colors.black10Alpha};
  font-family: PoppinsMedium;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.33;
  margin-bottom: 10px;
  display: flex;
`;

const CopyIcon = styled.div`
  margin-top: -2px;
`;
const ViewBlock = () => {
  return (
    <PageContainer bg="transparent" heading="Address" style={containerStyles}>
      <SubHeading>
        {/* 0x97bb222FC501a01FFDBC52c8C1652981408a6A68 <Icon src={copyIcon} /> */}
        0x97bb222FC501a01FFDBC52c8C1652981408a6A68
        <CopyIcon
          onClick={() => copy('0x97bb222fc501a01ffdbc52c8c1652981408a6a68')}>
          <ToolTipExp />
        </CopyIcon>
      </SubHeading>
      <AddressInfo />
      <TabsSection />
    </PageContainer>
  );
};

export default ViewBlock;
