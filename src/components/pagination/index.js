import React, { useState } from 'react';
import { Fragment } from 'react';
import {
  Pagination as RsPagination,
  PaginationItem,
  PaginationLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import colors from 'src/vars/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
`;
const Dots = styled.span`
  margin-right: 7px;
`;
const Link = styled(PaginationLink)`
  padding: 8px 9.2px 8.4px 10px;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(18, 38, 63, 0.1);
  border: none;
  font-family: PoppinsRegular;
  font-size: 10px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.22;
  letter-spacing: 0.27px;
  &:focus {
    z-index: 3;
    outline: 0;
    box-shadow: none;
  }
`;

const Item = styled(PaginationItem)`
  margin-right: 7px;
  &.active .page-link {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }
`;

const DropdownExp = styled(Dropdown)`
  box-shadow: 0 0 4px 0 rgba(18, 38, 63, 0.1);
`;

const DropdownItemExp = styled(DropdownItem)`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.27px;
  text-align: left;
`;

const DropdownToggleExp = styled(DropdownToggle)`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.27px;
  text-align: left;
  background: none !important;
  line-height: 1.3;
  border: none;
  color: ${colors.black} !important;
  &:focus {
    outline: 0;
    box-shadow: none !important;
  }
  &:hover {
    background: none;
  }
`;

const Pagination = ({
  count = 100,
  page = 1,
  limit = 10,
  handleClick,
  currentPage = 1
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const toggle = () => setDropdownOpen((prevState) => !prevState);
  const pagesCount = Math.ceil(count / limit);
  return (
    <Wrapper>
      <RsPagination aria-label="Page navigation ">
        <Item disabled={currentPage <= 1}>
          <Link
            onClick={(e) => handleClick(e, currentPage - 1)}
            previous
            href="#"
          />
        </Item>
        {[...Array(pagesCount)].slice(0, 5).map((page, i) => (
          <Item active={i === currentPage - 1} key={i}>
            <Link onClick={(e) => handleClick(e, i + 1)} href="#">
              {i + 1}
            </Link>
          </Item>
        ))}
        {pagesCount > 5 && (
          <Fragment>
            <Dots>...</Dots>
            <Item active={currentPage === pagesCount}>
              <Link onClick={(e) => handleClick(e, pagesCount)} href="#">
                {pagesCount}
              </Link>
            </Item>
          </Fragment>
        )}
        <Item disabled={currentPage >= pagesCount}>
          <Link
            onClick={(e) => handleClick(e, currentPage + 1)}
            next
            href="#"
          />
        </Item>
      </RsPagination>

      <DropdownExp isOpen={dropdownOpen} toggle={toggle}>
        <DropdownToggleExp caret>{limit}/Page</DropdownToggleExp>
        <DropdownMenu>
          {[10, 20, 30, 40, 50].map((item, i) => (
            <DropdownItemExp
            // active={item === state.limit}
            // onClick={() => setState({ ...state, limit: item })}
            >
              {item}/pages
            </DropdownItemExp>
          ))}
        </DropdownMenu>
      </DropdownExp>
    </Wrapper>
  );
};

export default Pagination;
