import React, { useState } from 'react';
import { PageContainer } from 'src/components';
import classnames from 'classnames';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import Overview from './components/Overview';
// import Comments from './components/Comments';

const NavLinkExp = styled(NavLink)`
  font-family: PoppinsMedium;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.36px;
  text-align: left;
  color: #000000;
  border-bottom: 2px solid transparent !important;
  &.active {
    border-bottom-color: ${colors.primary} !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }
  &:hover {
    border-bottom-color: ${colors.primary} !important;
    border-left-color: transparent !important;
    border-right-color: transparent !important;
    border-top-color: transparent !important;
  }
  &:hover {
    color: #40b1be;
    text-decoration: none;
  }
`;

const ViewBlock = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <PageContainer heading="Block Details">
      <Nav tabs>
        <NavItem>
          <NavLinkExp
            className={classnames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}>
            Overview
          </NavLinkExp>
        </NavItem>
        {/* <NavItem>
          <NavLinkExp
            className={classnames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}>
            Comments
          </NavLinkExp>
        </NavItem> */}
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Overview />
        </TabPane>
        {/* <TabPane tabId="2">
          <Comments />
        </TabPane> */}
      </TabContent>
    </PageContainer>
  );
};

export default ViewBlock;
