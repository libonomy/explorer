import React, { Fragment, useState } from 'react';
import { PageContainer } from 'src/components';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { AddressInfo, TabsSection } from './components';
import { copyIcon } from 'src/assets/images';

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
`;
const Icon = styled.img``;

const ViewBlock = () => {
  return (
    <PageContainer bg="transparent" heading="Address" style={containerStyles}>
      <SubHeading>
        0x97bb222FC501a01FFDBC52c8C1652981408a6A68 <Icon src={copyIcon} />
      </SubHeading>
      <AddressInfo />
      <TabsSection />
    </PageContainer>
  );
};

export default ViewBlock;
