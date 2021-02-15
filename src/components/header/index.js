import React, { useState } from 'react';
import { logo, search } from 'src/assets/images';
import { Link } from 'react-router-dom';
import {
  Container,
  InputGroup,
  InputGroupAddon,
  Input,
  Button
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
  @media (max-width: 991px) {
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
  border: 0.5px solid black;
  opacity: 0.3;
  display: inline-block;
  vertical-align: middle;
  color: ${colors.black};
  margin: 8px 4px;
  @media (max-width: 500px) {
    display: none;
  }
`;
const SearchIcon = styled.img`
  width: 20px;
  height: 20px;
`;
const SearchBox = styled(InputGroup)`
  background: white;
  border-radius: 6px;
  border: solid 1px ${colors.borderGrey};

  @media (max-width: 991px) {
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
const InputExp = styled(Input)`
  max-width: 20% !important ;
  opacity: 1 !important;
  font-family: 'PoppinsRegular' !important;
  font-size: 14px !important;
  padding: 0 8px !important;
  color: #495057;
  background-color: #fff;
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  margin-top: 4px !important;
  display: flex;
  text-align: justify;
  cursor: pointer;
  @media (max-width: 991px) {
    max-width: 20% !important;
  }
  &:focus {
    color: #000;
    background-color: #fff;
    border-color: #f1f1f1;
    outline: none;
    box-shadow: none;
  }
`;
const OptionExp = styled.option`
  font-family: PoppinsRegular;
  font-size: 13px;
  font-weight: 400;
  line-height: 1.5;

  cursor: pointer !important;
  &:hover {
    color: #000;
    background-color: ${colors.primary};
  }
`;
const OptionExps = styled.option`
  color: ${colors.white};
  font-size: 0rem;
  opacity: 1;
  cursor: pointer !important;
  &:hover {
    color: transparent !important ;
    background-color: ${colors.primary};
  }
`;
const Header = (props) => {
  const [state, setState] = useState({ filterName: 'Filter', keyword: '' });

  const handleSearch = (e) => {
    if (state.keyword !== '') {
      if (state.filterName === 'Txs') history.push(`/txs/${state.keyword}`);
      else if (state.filterName === 'Address')
        history.push(`/addresses/${state.keyword}`);
      else {
        if (state.keyword.includes('libonomy'))
          history.push(`/addresses/${state.keyword}`);
        else history.push(`/txs/${state.keyword}`);
      }
      setState({ ...state, keyword: '' });
    }
  };

  const hanldeDropDown = (e) => {
    setState({ ...state, filterName: e.target.value });
  };

  const handleChange = (e) => {
    // console.log('eeee', e.target);
    setState({ ...state, keyword: e.target.value });
  };
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && state.keyword !== '') {
      // console.log('state.keyword', state.keyword.includes('libonomy'));
      if (state.filterName === 'Txs') history.push(`/txs/${state.keyword}`);
      else if (state.filterName === 'Address')
        history.push(`/addresses/${state.keyword}`);
      else {
        if (state.keyword.includes('libonomy'))
          history.push(`/addresses/${state.keyword}`);
        else history.push(`/txs/${state.keyword}`);
      }
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
              <InputExp
                type="select"
                name={state.filterName}
                value={state.filterName}
                id="exampleSelect"
                onChange={(value) => hanldeDropDown(value)}>
                <OptionExp>Filter</OptionExp>
                <OptionExp>Txs</OptionExp>
                <OptionExp>Address</OptionExp>
              </InputExp>
              <VerticalLine />
              <Input
                placeholder="Search by Address / Txn Hash / Block / Token / Ens"
                type="text"
                value={state.keyword}
                name="Txs"
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
