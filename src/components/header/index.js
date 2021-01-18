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
  // DropdownMenu,
  // DropdownItem
} from 'reactstrap';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import history from 'src/utils/history';

const Wrapper = styled.div`
  background-color: ${colors.white};
  padding: 1rem 0 1rem 0rem;
`;
const Section = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: ${colors.white};
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
const DropdownItemExp = styled(DropdownItem)`
  font-size: 13px;
  font-family: PoppinsRegular;
`;
const DropdownMenuExp = styled(DropdownMenu)`
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
const SearchBox = styled(InputGroup)`
  background: white;
  border-radius: 6px;
  border: solid 1px ${colors.borderGrey};

  @media (max-width: 576px) {
    margin: 1.5rem 0px 0px 0px;
  }
  input.form-control {
    padding-left: 20px !important;
  }
  .form-control {
    padding: 0;
    border-left: 2px solid ${colors.white} !important;
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
    color: ${colors.black};
    background-color: ${colors.white};
    border-color: ${colors.white};
  }
  .btn-secondary:not(:disabled):not(.disabled):active:focus,
  .btn-secondary:not(:disabled):not(.disabled).active:focus,
  .show > .btn-secondary.dropdown-toggle:focus {
    box-shadow: none !important;
    color: ${colors.black} !important;
  }
  ..btn-secondary.dropdown-toggle:hover,
  .btn-secondary:hover {
    color: ${colors.black};
    background-color: ${colors.white};
    border-color: ${colors.white};
  }
  .btn-secondary {
    color: ${colors.black};
    background-color: ${colors.white};
    border-color: ${colors.white};
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
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: ${colors.white} !important;
  font-size: 12px;
  line-height: 1.29;
  letter-spacing: 0.63px;
  color: ${colors.black};
  border: none;
  .btn:focus,
  .btn.focus {
    outline: 0 !important;
    box-shadow: none !important;
  }
  .btn-secondary:focus,
  .btn:hover {
    color: ${colors.black} !important;
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
  color: ${colors.white};
  box-shadow: none;
  border: none;
  text-align: center;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
const DropdownToggleBtn = styled(DropdownToggle)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;
const Header = (props) => {
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);
  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);

  const [state, setState] = useState({ keyword: '' });

  const handleSearch = (e) => {
    if (state.keyword !== '') {
      history.push(`/txs/${state.keyword}`);
      setState({ ...state, keyword: '' });
    }
  };
  const handleChange = (e) => {
    setState({ ...state, keyword: e.target.value });
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && state.keyword !== '') {
      history.push(`/txs/${state.keyword}`);
      setState({ ...state, keyword: '' });
    }
  };
  return (
    <Wrapper>
      <Container>
        <Section light expand="lg">
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
                <DropdownToggleBtn split>
                  <DropDownButton>All Filter</DropDownButton>
                </DropdownToggleBtn>
                <DropdownMenuExp>
                  <DropdownItemExp>Txs</DropdownItemExp>
                  <DropdownItemExp>Address</DropdownItemExp>
                </DropdownMenuExp>
              </InputGroupButtonDropdown>
              <VerticalLine />
              <Input
                placeholder="Search by Address / Txn Hash / Block / Token / Ens"
                type="text"
                value={state.keyword}
                name="keyword"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <InputGroupAddon addonType="append" onClick={handleSearch}>
                <IconButton>
                  <SearchIcon src={search} alt="search-logo" />
                </IconButton>
              </InputGroupAddon>
            </SearchBox>
          </LeftSection>
        </Section>
      </Container>
    </Wrapper>
  );
};

export default Header;
