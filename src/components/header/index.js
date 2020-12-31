import React, { useState } from 'react';
import logo from '../../assets/images/logo.png';
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
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import styled from 'styled-components';

const img = styled.img`
  width: 120px;
  height: 50px;
  object-fit: contain;
`;

const Header = (props) => {
  //   let { path, url } = useRouteMatch();

  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="navContainer">
      <Navbar className="Navbar" light expand="lg">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar home>
          <>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/" className="dashboard">
                  {' '}
                  Dashboard
                </NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Blockchain
                </DropdownToggle>
                <DropdownMenu>
                  {/* <DropdownItem tag={Link} to="/homeexplorer">
                      Home Explorer
                    </DropdownItem> */}
                  <DropdownItem devider />
                  <DropdownItem tag={Link} to="/transactions">
                    Transactions
                  </DropdownItem>
                  {/* <DropdownItem tag={Link} to="/transactionpopup">
                      Transactions Detail
                    </DropdownItem> */}
                  <DropdownItem tag={Link} to="/pendingtransaction">
                    Pending Transactions
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/approvals">
                    Approvals
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/blocklist">
                    Blocks
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/sideblocks">
                    Side Blocks
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem tag={Link} to="/minerblock">
                    View Miner Block
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/verifiedcontract">
                    View Verified Contracts
                  </DropdownItem>
                  <DropdownItem tag={Link} to="/contracttx">
                    View Contract Transactions
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Token
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Resources
                </DropdownToggle>
              </UncontrolledDropdown>
            </Nav>
            <NavLink color href="#">
              {' '}
              More
            </NavLink>
          </>
          {/* )} */}
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
