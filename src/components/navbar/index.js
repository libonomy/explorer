import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav as NavBt,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import colors from 'src/vars/colors';
import { menuIcon } from 'src/assets/images';
const bgColor = colors.primary;
const Wrapper = styled.div``;
const NavbarExp = styled(Navbar)`
  background-color: ${bgColor};
  position: absolute;
  top: 76px;
  left: 0px;
  right: 0px;
  z-index: 1;
  @media (max-width: 576px) {
    top: 118px;
  }
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
const Link = styled(NavLink)`
  font-family: PoppinsRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.42px;
  text-align: left;
  color: ${colors.white};
  &:hover {
    color: ${colors.black};
  }
  padding: 0.5rem 1rem;
  :first-child {
    padding-left: 0px;
  }
  @media (max-width: 768px) {
    padding: 0.5rem 1rem;
    :first-child {
      padding-left: 1.3rem;
  }
  @media (max-width: 576px) {
    padding: 0.5rem 1rem;
    :first-child {
      padding-left: 0.3rem;
  }
`;
const NavbarCollapse = styled(Collapse)`
  @media (max-width: 768px) {
    position: absolute;
    background-color: rgb(64, 177, 190);
    left: 0px;
    right: 0px;
    top: 0px;
    padding: 2rem 0rem;
  }
  @media (max-width: 576px) {
    padding: 2rem 1rem;
  } ;
`;
const NavContainer = styled(Container)`
  padding: 0rem;
`;
const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Wrapper>
      <NavbarExp light expand="md" id="navbar">
        <Container>
          <NavbarTogglers onClick={toggle} />
          <NavbarCollapse isOpen={isOpen} navbar>
            <NavContainer>
              <Nav>
                <NavItem>
                  <Link href="#">Dashboard</Link>
                </NavItem>
                <NavItem>
                  <Link href="#">Blockchain</Link>
                </NavItem>
                <NavItem>
                  <Link href="#">Token</Link>
                </NavItem>
                <NavItem>
                  <Link href="#">Resources</Link>
                </NavItem>
              </Nav>
            </NavContainer>
          </NavbarCollapse>
        </Container>
      </NavbarExp>
    </Wrapper>
  );
};

export default NavBar;
