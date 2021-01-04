import React, { useState } from 'react';
import styled from 'styled-components';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import colors from 'src/vars/colors';

const bgColor = colors.primary;
const Wrapper = styled.div``;
const NavbarExp = styled(Navbar)`
  background-color: ${bgColor};
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
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Wrapper>
      <NavbarExp light expand="md">
        <Container>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
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
          </Collapse>
        </Container>
      </NavbarExp>
    </Wrapper>
  );
};

export default NavBar;
