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
`;

const RightSection = styled.div`
  width: 158px;
  height: 18px;
  object-fit: contain;
`;
const LeftSection = styled.div``;

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

const SearchBox = styled(InputGroup)``;
const IconButton = styled(Button)``;
const Header = (props) => {
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  return (
    <Container>
      <Wrapper>
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
                <Button>All Filter</Button>
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem>Blockchain</DropdownItem>
                <DropdownItem>Token</DropdownItem>
                <DropdownItem>Resources</DropdownItem>
                {/* <DropdownItem divider /> */}
                <DropdownItem>Other Action</DropdownItem>
              </DropdownMenu>
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
