import React, { useState } from 'react';
import { logo, search } from 'src/assets/images';
import { Link } from 'react-router-dom';
import {
  Container,
  InputGroup,
  InputGroupAddon,
  InputGroupButtonDropdown,
  Input,
  Button,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  @media (max-width: 576px) {
    display: block;
  }
`;

const RightSection = styled.div`
  flex: 1;
`;
const LeftSection = styled.div`
  flex: 1;
`;

const Logo = styled.img`
  width: 158px;
  height: 18px;
  object-fit: contain;
`;

const VerticalLine = styled.span`
  height: 25px;
  border: solid black 1px;
  opacity: 0.3;
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0px;
`;
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const DropdownMenuExp = styled(DropdownMenu)`
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: none;
    background-color: #fff;
    color: #000;
    border: none;
  }
`;
const SearchBox = styled(InputGroup)`
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  margin: 0 12px;
  @media (max-width: 576px) {
    margin: 1.5rem 0px 0px 0px;
  }
  input.form-control {
    padding-left: 20px !important;
  }
  .form-control {
    padding: 0;
    border-left: 2px solid #fff !important;
    font-family: PoppinsRegular;
    opacity: 0.5;
    border: none;
    font-size: 11px;
    margin-top: 6px;
    box-shadow: none;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #000;
    background-color: #fff;
    border-color: #fff;
  }
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: none !important;
    color: #000 !important;
  }
  ..btn-secondary.dropdown-toggle:hover,
  .btn-secondary:hover {
    color: #000;
    background-color: #fff;
    border-color: #fff;
  }
  .btn-secondary {
    color: #000;
    background-color: #fff;
    border-color: #fff;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    box-shadow: none !important;
  }
`;
const DropDownButton = styled(Button)`
  font-family: PoppinsRegular;
  text-align: left;
  border: none;
  box-shadow: none;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: #ffffff !important;
  font-size: 12px;
  line-height: 1.29;
  letter-spacing: 0.63px;
  color: #000000;
  border: none;
  .btn:focus,
  .btn.focus {
    outline: 0 !important;
    box-shadow: none !important;
  }
  .btn-secondary:focus,
  .btn:hover {
    color: #000 !important;
    text-decoration: none !important;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    box-shadow: none;
  }
`;
const IconButton = styled(Button)`
  background-color: #28a0b0 !important;
  font-size: 18px;
  line-height: 1.27;
  letter-spacing: 0.66px;
  color: #ffffff;
  box-shadow: none;
  border: none;
  text-align: center;
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
`;
const Header = (props) => {
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  return (
    <Container>
      <Wrapper light expand="lg">
        <RightSection>
          <Link to="/">
            <Logo src={logo} alt="logo" />
          </Link>
        </RightSection>
        <LeftSection>
          <SearchBox>
            <InputGroupButtonDropdown
              addonType="prepend"
              isOpen={splitButtonOpen}
              toggle={toggleSplit}>
              <DropdownToggle split>
                <DropDownButton>All Filter</DropDownButton>
              </DropdownToggle>
              <DropdownMenuExp>
                <DropdownItem>Blockchain</DropdownItem>
                <DropdownItem>Token</DropdownItem>
                <DropdownItem>Resources</DropdownItem>
                {/* <DropdownItem divider /> */}
                <DropdownItem>Other Action</DropdownItem>
              </DropdownMenuExp>
            </InputGroupButtonDropdown>
            <VerticalLine />
            <Input placeholder="Search by Address / Txn Hash / Block / Token / Ens" />
            <InputGroupAddon addonType="append">
              <IconButton>
                <SearchIcon src={search} alt="search-logo" />
              </IconButton>
            </InputGroupAddon>
          </SearchBox>
        </LeftSection>
      </Wrapper>
    </Container>
  );
};

export default Header;
