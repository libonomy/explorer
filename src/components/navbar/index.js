import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav as NavBt,
  NavItem,
  NavLink,
  Container,
  InputGroupButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import colors from 'src/vars/colors';
import { Link } from 'react-router-dom';
import { menuIcon } from 'src/assets/images';
const bgColor = colors.primary;
const Wrapper = styled.div``;

const NavbarExp = styled(Navbar)`
  background-color: ${bgColor};
`;
const Nav = styled(NavBt)`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    margin-left: -10px;
  }
  @media (max-width: 576px) {
    margin-left: -5px;
  }
`;
const NavbarTogglers = styled(NavbarToggler)`
  border: none;
  outline: none !important;
  z-index: 1;
  color: #fff;
  span.navbar-toggler-icon {
    outline: none;
    background-image: url(${menuIcon});
  }

  @media (max-width: 768px) {
    padding: 0 12px;
  }
  @media (max-width: 576px) {
    padding: 0;
  }
`;
const NavLinkExp = styled(NavLink)`
  font-family: PoppinsRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.42px;
  text-align: left;
  color: ${colors.white};
  &:hover {
    color: ${colors.white};
    background-color: rgba(0, 0, 0, 0.04);
    border-radius: 6px;
}
  }
  // padding: 0.5rem 1rem;

  // @media (max-width: 768px) {
  //   padding: 0.5rem 1rem;
  //   :first-child {
  //     padding-left: 1.3rem;
  // }
  // @media (max-width: 576px) {
  //   padding: 0.5rem 1rem;
  //   :first-child {
  //     padding-left: 0.3rem;
  // }
`;

const NavContainer = styled(Container)`
  padding: 0rem;
`;
const LinkExp = styled(Link)`
  font-family: PoppinsRegular;
  color: ${colors.black} !important;
  &:hover {
    color: ${colors.black} !important;
    text-decoration: none;
  }
`;
const DropdownToggleExp = styled(DropdownToggle)`
  font-family: PoppinsRegular;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.36px;
  text-align: left;
  padding: 0px;
  color: ${colors.white};
`;

const DropdownItemExp = styled(DropdownItem)`
  font-size: 14px;
  font-family: PoppinsRegular;
  padding: 0.5rem 1.75rem;
`;
const DropdownMenuExp = styled(DropdownMenu)`
  width: 200px;
  margin: 8px 0px 0px -12px;
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: none;
    background-color: ${colors.white};
    color: ${colors.black};
    border: none;
  }
  .dropdown-item.active,
  .dropdown-item:active {
    color: #000;
    text-decoration: none;
    background-color: #f8f9fa;
    outline: none;
  }
`;
const NavBar = () => {
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);
  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Wrapper>
      <NavbarExp light expand="md" id="navbar">
        <Container>
          <NavbarTogglers onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <NavContainer>
              <Nav>
                {/* <NavItem>
                  <LinkExp to="/blocks">Blocks</LinkExp>
                </NavItem>
                <NavItem>
                  <LinkExp to="/txs">Transactions</LinkExp>
                </NavItem> */}
                <NavItem>
                  <InputGroupButtonDropdown
                    addonType="prepend"
                    isOpen={splitButtonOpen}
                    toggle={toggleSplit}>
                    <DropdownToggleExp tag="span" caret>
                      Blockchain
                    </DropdownToggleExp>
                    <DropdownMenuExp>
                      <LinkExp to="/blocks">
                        <DropdownItemExp>Blocks</DropdownItemExp>
                      </LinkExp>
                      <LinkExp to="/txs">
                        <DropdownItemExp>Transactions</DropdownItemExp>
                      </LinkExp>
                      <LinkExp to="/addresses/address">
                        <DropdownItemExp>Addresses</DropdownItemExp>
                      </LinkExp>
                    </DropdownMenuExp>
                  </InputGroupButtonDropdown>
                </NavItem>
              </Nav>
            </NavContainer>
          </Collapse>
        </Container>
      </NavbarExp>
    </Wrapper>
  );
};

export default NavBar;
