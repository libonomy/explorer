import React, { useState } from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink } from 'reactstrap';
import colors from 'src/vars/colors';
import styled from 'styled-components';
import { RecievedAddressTable, SentAddressTable } from '.';
import classNames from 'classnames';

const Wrapper = styled.div`
  padding: 22px 0 18.9px 0px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
  background-color: ${colors.white};
`;
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
const TabsSection = () => {
  const [activeTab, setActiveTab] = useState('1');

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };
  return (
    <Wrapper>
      <Nav tabs>
        <NavItem>
          <NavLinkExp
            className={classNames({ active: activeTab === '1' })}
            onClick={() => {
              toggle('1');
            }}>
            Recieved Txs
          </NavLinkExp>
        </NavItem>
        <NavItem>
          <NavLinkExp
            className={classNames({ active: activeTab === '2' })}
            onClick={() => {
              toggle('2');
            }}>
            Sent Txs
          </NavLinkExp>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <RecievedAddressTable />
        </TabPane>
        <TabPane tabId="2">
          <SentAddressTable />
        </TabPane>
      </TabContent>
    </Wrapper>
  );
};

export default TabsSection;
