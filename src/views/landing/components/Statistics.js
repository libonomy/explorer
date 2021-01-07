import React from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row,
  Button
} from 'reactstrap';
import {
  latestblockheight,
  transaction,
  averageblock,
  marketcap,
  accounts,
  difficulty,
  toggler
} from 'src/assets/images';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { Link } from 'react-router-dom';
const Wrapper = styled.div``;

const ButtonExp = styled.div`
  padding: 10.5px 16px;
  .btn-secondary:hover {
    color: #fff;
    background-color: #40B1BE !important;
    border-color: #40b1be;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    color: #fff;
    background-color: #40b1be !important;
    border-color: #40b1be !important;
    box-shadow: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #40b1be;
    border-color: #40b1be;
  }
  .btn-secondary {
    color: #fff;
    background-color: #40b1be;
    border-color: #40b1be;
`;

const CardButton = styled(Button)`
  width: auto;
  height: 28px;
  border-radius: 3px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
  background-color: #40b1be;
  display: flex;
  align-items: center;
  box-shadow: none;
  font-family: PoppinsRegular;
  font-size: 11px;
  .btn-secondary:hover {
    color: #fff;
    background-color: ##40b1be !important;
    border-color: ##40b1be !important;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    color: #fff;
    background-color: #40b1be !important;
    border-color: #40b1be !important;
    box-shadow: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #40b1be;
    border-color: #40b1be;
  }
`;
const CardExp = styled(Card)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${colors.white};
  margin-bottom: 1rem;
  box-shadow: ${colors.shaddow};
  border: none;
`;
const CardContent = styled(CardBody)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
`;

const InnerBody = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: flex-start;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;
const Title = styled(CardTitle)`
  font-family: PoppinsRegular;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: 0.29px;
  text-align: left;
  color: ${colors.black};
`;
const Text = styled(CardText)`
  font-family: PoppinsBold;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 0.3px;
  text-align: left;
  color: ${colors.black};
`;
const ToggleCard = styled.div`
  width: 18px;
  height: 17px;
  position: absolute;
  background-color: white;
  top: 0;
  right: 0;
`;
const MenuIcon = styled.span`
  position: absolute;
  width: 8px;
  height: 7px;
  top: 6px;
  right: 2px;
`;

const ListWrap = styled.div``;
const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0px;
  margin-top: -5px;
  position: absolute;
  top: 22px;
  right: 2px;
  box-shadow: 0 3px 5px 0 rgba(0, 0, 0, 0.16);
  background-color: #ffffff;
`;
const ListItem = styled.li`
  font-size: 12px;
  letter-spacing: 0.2px;
  padding: 0px 8px;
  font-family: Helvetica;
  margin: 2px auto;
  &:hover {
    background: #d6f7fb;
  }
`;
const LinkList = styled(Link)`
  color: #347f87;
  text-decoration: none;
  background-color: transparent;
`;

const Statistics = () => {
  const [state, setState] = React.useState({
    showPersons: false,
    showInnerDiv: false,
    title: 'See More',
    isOpen: ''
  });

  const showToggleDiv = () => {
    const divShow = state.showInnerDiv;
    setState({ showInnerDiv: !divShow });
  };
  return (
    <Wrapper>
      <Row>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={latestblockheight} alt="latestblockheight" />
              <InnerBody>
                <Title>Latest Block</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
            <CardContent>
              <Icon src={latestblockheight} alt="latestblockheight" />
              <InnerBody>
                <Title>Irreversible Block</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={transaction} alt="transaction" />
              <InnerBody>
                <Title>Transactions</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
            <CardContent>
              <Icon src={transaction} alt="transaction" />
              <InnerBody>
                <Title>Safe Gas Price</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={averageblock} alt="averageblock" />
              <InnerBody>
                <Title>Average Block (1m)</Title>
                <Text>5.83</Text>
              </InnerBody>
            </CardContent>
            <CardContent onClick={showToggleDiv}>
              <InnerBody>
                <ToggleCard className="toggle-btn">
                  <MenuIcon src={toggler} alt="menuicon" />
                </ToggleCard>
                {state.showInnerDiv === true ? (
                  <ListWrap>
                    <List>
                      <ListItem>
                        <LinkList to="#">All Time</LinkList>
                      </ListItem>
                      <ListItem>
                        <LinkList to="#">Last Minute</LinkList>
                      </ListItem>
                      <ListItem>
                        <LinkList to="#">Last Hour</LinkList>
                      </ListItem>
                      <ListItem>
                        <LinkList to="#">Last Day</LinkList>
                      </ListItem>
                    </List>
                  </ListWrap>
                ) : null}
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={marketcap} alt="marketcap" />
              <InnerBody>
                <Title>Market Cap</Title>
                <Text>$18,963,382,439.753</Text>
              </InnerBody>
            </CardContent>
            <CardContent></CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={accounts} alt="accounts" />
              <InnerBody>
                <Title>Accounts</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
            <CardContent></CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={difficulty} alt="difficulty" />
              <InnerBody>
                <Title>Difficulty</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
            <CardContent>
              <Icon src={difficulty} />
              <InnerBody>
                <Title>Hash Rate</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <ButtonExp>
          <CardButton>Click To See More</CardButton>
        </ButtonExp>
      </Row>
    </Wrapper>
  );
};

export default Statistics;
