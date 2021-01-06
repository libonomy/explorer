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
import colors from 'src/vars/colors';
import { channelIcon } from 'src/assets/images';
import styled from 'styled-components';
const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 10px;

  background-color: ${colors.white};
  @media (max-width: 991px) {
    height: auto;
  }
`;

const CardHeading = styled.h1`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.36px;
  text-align: left;
  color: ${colors.black};
`;
const CardExp = styled(Card)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  background-color: ${colors.white};
  margin-bottom: 1rem;
`;
const CardContent = styled(CardBody)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
`;

const InnerBody = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: flex-start;
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 1rem;
`;
const Title = styled(CardTitle)`
  font-family: PoppinsRegular;
  font-size: 9.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: 0.29px;
  text-align: center;
  color: #000000;
`;
const Text = styled(CardText)`
  font-family: PoppinsBold;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 0.3px;
  text-align: left;
  color: #000000;
`;

const Heading = styled.div`
  font-family: PoppinsMedium;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.36px;
  margin-bottom: 1rem;
`;

const ConsensusState = () => {
  return (
    <Wrapper>
      <Heading>Consensus State</Heading>
      <Row>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={channelIcon} />
              <InnerBody>
                <Title>Latest Block Height</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={channelIcon} />
              <InnerBody>
                <Title>Latest Block Height</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={channelIcon} />
              <InnerBody>
                <Title>Latest Block Height</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={channelIcon} />
              <InnerBody>
                <Title>Latest Block Height</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ConsensusState;
