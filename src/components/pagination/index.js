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
  margin-right: 5px;
`;
const Link = styled(PaginationLink)`
  padding: 8px 9.2px 8.4px 10px;
  border-radius: 2px;
  box-shadow: 0 0 4px 0 rgba(18, 38, 63, 0.1);
  font-family: PoppinsRegular;
  font-size: 9px;
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
  margin-right: 5px;
  &.active .page-link {
    background-color: ${colors.primary};
    border-color: ${colors.primary};
  }
`;

const DropdownExp = styled(Dropdown)`
  box-shadow: 0 0 4px 0 rgba(18, 38, 63, 0.1);
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
        <DropdownToggle caret>Dropdown</DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Header</DropdownItem>
          <DropdownItem>Some Action</DropdownItem>
          <DropdownItem text>Dropdown Item Text</DropdownItem>
          <DropdownItem disabled>Action (disabled)</DropdownItem>
          <DropdownItem divider />
          <DropdownItem>Foo Action</DropdownItem>
          <DropdownItem>Bar Action</DropdownItem>
          <DropdownItem>Quo Action</DropdownItem>
        </DropdownMenu>
      </DropdownExp>
    </Wrapper>
  );
};

export default Pagination;
