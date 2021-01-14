import React from 'react';
import { Card, CardBody, CardTitle, CardText, Container } from 'reactstrap';
import colors from 'src/vars/colors';
import { channelIcon } from 'src/assets/images';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 2rem;
  @media (max-width: 767px) {
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CardExp = styled(Card)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  box-shadow: ${colors.shaddow};
  border: 1px solid #fff;
  justify-content: space-between;
  width: 300px;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  background-color: ${colors.white};
  @media (max-width: 991px) {
    width: 220px;
  }
  @media (max-width: 776px) {
    width: 350px;
    margin-bottom: 10px;
  }
`;
const CardContent = styled(CardBody)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0px;
`;

const InnerBody = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: center;
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 1rem;
`;
const Title = styled(CardTitle)`
  font-family: PoppinsRegular;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.29px;
  text-align: center;
  color: #000000;
`;
const Text = styled(CardText)`
  font-family: PoppinsBold;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 0.3px;
  text-align: center;
  color: #000000;
`;

const Cards = () => {
  return (
    <Container>
      {' '}
      <Wrapper>
        <CardExp>
          <CardContent>
            <Icon src={channelIcon} alt="icon" />
            <InnerBody>
              <Title>Channel</Title>
              <Text>2,052,591</Text>
            </InnerBody>
          </CardContent>
        </CardExp>

        <CardExp>
          <CardContent>
            <Icon src={channelIcon} alt="icon" />
            <InnerBody>
              <Title>Pooling State</Title>
              <Text>0</Text>
            </InnerBody>
          </CardContent>
        </CardExp>
        <CardExp>
          <CardContent>
            <Icon src={channelIcon} alt="icon" />
            <InnerBody>
              <Title>Pooling State</Title>
              <Text>0</Text>
            </InnerBody>
          </CardContent>
        </CardExp>
      </Wrapper>
    </Container>
  );
};

export default Cards;
