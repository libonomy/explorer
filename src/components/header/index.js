import React, { useState } from 'react';
import { Logo } from 'src/assets/images';
import {
  Link
  // , useRouteMatch
} from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  Container
} from 'reactstrap';
import styled from 'styled-components';
const Wrapper = styled(Navbar)`
  .navbar-toggler:focus {
    outline: none;
  }
`;
const Logoo = styled.img`
  width: 158px;
  height: 18px;
  object-fit: contain;
`;
const NavHeading = styled(NavLink)`
  color: #000 !important;
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 3;
  letter-spacing: 0.42px;
  text-align: left;
  &:hover {
    color: #40b1be !important;
  }
`;

const Header = (props) => {
  //   let { path, url } = useRouteMatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Container>
      <Wrapper light expand="lg">
        <Link to="/">
          <Logoo src={Logo} alt="logo" />
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar home>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavHeading href="#">Dashboard</NavHeading>
            </NavItem>
            <NavItem>
              <NavHeading href="#">Blockchain</NavHeading>
            </NavItem>
            <NavItem>
              <NavHeading href="#">Token</NavHeading>
            </NavItem>
            <NavItem>
              <NavHeading href="#">Resources</NavHeading>
            </NavItem>
            <NavItem>
              <NavHeading color href="#">
                More
              </NavHeading>
            </NavItem>
          </Nav>
        </Collapse>
      </Wrapper>
    </Container>
  );
};

export default Header;
