import React, { useState } from 'react';
import { Card, Col, Container } from 'reactstrap';
import {
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
import { LiboBackground, Search } from 'src/assets/images';
const Wrapper = styled.div`
  background: url(${LiboBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 275px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;

  @media (max-width: 991px) {
    height: auto;
  }
`;
const Content = styled.div`
  display: flex;
  justify-content: space-evenly;

  flex-wrap: wrap;
`;

const CardWrapper = styled(Card)`
  width: 345px;
  height: 151px;
  border-radius: 10px;
  background-color: #ffffff;
  @media (max-width: 991px) {
    margin-top: 20px;
  }
`;
const CardColumn = styled(Col)`
  display: flex;
  justify-content: center;
`;
const Title = styled.h1`
  font-family: PoppinsRegular;
  font-size: 30px;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.9px;
  text-align: left;
  color: #fff5f5;
`;
const Paragraph = styled.p`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #ffffff;
`;
const SearchLogo = styled.img`
  width: 20px;
  height: 20px;
`;
const FluidContainer = styled.div`
  background: white;
  border-radius: 6px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  margin: 0 12px;

  .input-group {
    .dropdown-menu.show {
      border-radius: 0.25rem;
      outline: none;
      .dropdown-item:hover {
        background-color: #f8f9fa;
      }
      button:focus {
        outline: none;
      }
      .dropdown-item:active {
        background-color: #ffffff;
        border: 0px !important;
        color: black;
        border-radius: 0;
      }
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

    .input-group-prepend,
    .input-group-append {
      .btn:focus {
        outline: none !important;
        outline-offset: none !important;
        box-shadow: none;
      }
      .btn-secondary {
        font-family: PoppinsRegular;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        text-align: left;
        border: none;
        box-shadow: none;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
    .input-group-prepend {
      .btn-secondary {
        background-color: #ffffff !important;
        font-size: 12px;
        line-height: 1.29;
        letter-spacing: 0.63px;
        color: #000000;
      }
    }
    .input-group-append {
      .btn-secondary {
        background-color: #28a0b0 !important;
        font-size: 18px;
        line-height: 1.27;
        letter-spacing: 0.66px;
        color: #ffffff;
        box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.1);
        width: 80px;
        text-align: center;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }
    }
  }
`;
const VerticalSpan = styled.span`
  height: 25px;
  border: solid black 1px;
  opacity: 0.3;
  display: inline-block;
  vertical-align: middle;
  margin: 8px 0px;
`;
const SearchColumn = styled(Col)`
  padding: 40px 0px 0px 0px;
  @media (max-width: 991px) {
    padding: 30px 0px;
  }
`;
function Banner() {
  const [splitButtonOpen, setSplitButtonOpen] = useState(false);

  const toggleSplit = () => setSplitButtonOpen(!splitButtonOpen);
  return (
    <Wrapper>
      <Container>
        <Content>
          <Col lg="7" md="12">
            <Title>Libonomy Explorer</Title>
            <Paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum
            </Paragraph>
          </Col>
          <CardColumn lg="5" md="12">
            <CardWrapper></CardWrapper>
          </CardColumn>
          <SearchColumn md="12">
            <FluidContainer>
              <InputGroup>
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
                <VerticalSpan></VerticalSpan>
                <Input placeholder="Search by Address / Txn Hash / Block / Token / Ens" />
                <InputGroupAddon addonType="append">
                  <Button>
                    <SearchLogo src={Search} alt="search-logo" />
                  </Button>
                </InputGroupAddon>
              </InputGroup>
            </FluidContainer>
          </SearchColumn>
        </Content>
      </Container>
    </Wrapper>
  );
}

export default Banner;
