import React, { useState, useEffect } from 'react';
import { logo, search, filter } from 'src/assets/images';
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
import Select from 'react-select';
import { useDispatch, useSelector } from 'react-redux';
import { setActiveBlockchain } from 'src/redux/actions';

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
  flex: 2;
`;

const LeftSection = styled.div`
  flex: 3;
  display: flex;
  flex-direction: row;
  @media (max-width: 991px) {
    margin: 1.5rem 0px 0px 0px;
  }

  @media (max-width: 412px) {
    display: block;
  }
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
  flex: 3;
  background: white;
  border-radius: 6px;
  border: solid 1px ${colors.borderGrey};

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
  z-index: 0;
  background-color: #1f4bb1 !important;
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

const SelectExp = styled(Select)``;

const SelectWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const SelectBoxWrapper = styled.div`
  width: 100px;
  // background-color: pink;
`;

const BlockchainSelect = styled(Select)`
  border: solid 1px rgba(90, 90, 90, 0.5);
  border-radius: 6px;
  margin-right: 10px;
  flex-basis: 130px;
  @media (max-width: 412px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const FilterIcon = styled.img`
  height: 20px;
`;

const style = {
  control: (base) => ({
    ...base,
    border: 0,
    boxShadow: 'none',
    borderRadius: '7px',
    marginTop: ' 2px !important',
    cursor: 'pointer'
  }),
  option: (styles, { isFocused, isSelected, isActive }) => {
    return {
      ...styles,

      backgroundColor: isFocused
        ? '#dbeef1 !important'
        : isSelected
        ? 'none !important'
        : isActive
        ? '95e7ec'
        : null,
      color: '#333333'
    };
  }
};

const Header = (props) => {
  const [state, setState] = useState({ filterName: 'Filter', keyword: '' });

  const { name } = useSelector((state) => state.blockchain);

  const [blockchain, setBlockChain] = useState(name);

  const dispatch = useDispatch();

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
    setState({ ...state, filterName: e.value });
  };

  const hanldeSelectBlockchain = (e) => {
    setBlockChain(e.value);
    dispatch(setActiveBlockchain(e.value));
    refreshPage();
  };

  const handleChange = (e) => {
    setState({ ...state, keyword: e.target.value });
  };

  const refreshPage = () => {
    window.location.reload(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && state.keyword !== '') {
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
            <BlockchainSelect
              styles={style}
              options={BlockchainOptions}
              placeholder="Blockchain"
              onChange={hanldeSelectBlockchain}
              value={BlockchainOptions.filter(
                (option) => option.value === blockchain
              )}
            />
            <SearchBox>
              {/* <VerticalLine /> */}
              <Input
                placeholder="Search by Address / Txn Hash / Block / Token / Ens"
                type="text"
                value={state.keyword}
                name="Txs"
                onChange={handleChange}
                onKeyDown={handleKeyDown}
              />
              <SelectWrapper>
                <FilterIcon src={filter} alt="filter" />
                <SelectBoxWrapper>
                  <SelectExp
                    styles={style}
                    options={Options}
                    name="filter"
                    placeholder="Filter"
                    onChange={hanldeDropDown}
                    components={{
                      IndicatorSeparator: () => null
                    }}
                  />
                </SelectBoxWrapper>
              </SelectWrapper>
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

const Options = [
  {
    value: 'Txs',
    label: 'Txs'
  },
  {
    value: 'Address',
    label: 'Address'
  }
];

const BlockchainOptions = [
  {
    value: 'libonomy',
    label: 'Libonomy'
  },
  {
    value: 'v2f',
    label: 'V2F'
  }
];
