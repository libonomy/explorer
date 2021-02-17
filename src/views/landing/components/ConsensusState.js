import React from 'react';
import { Card, CardBody, CardTitle, CardText, Col, Row } from 'reactstrap';
import colors from 'src/vars/colors';
import {
  channelIcon,
  peerIcon,
  layerIcon,
  poolingIcon
} from 'src/assets/images';
import styled from 'styled-components';
const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 10px;
  box-shadow: ${colors.shaddow};
  background-color: ${colors.white};
  height: calc(100% - 16px);
  @media (max-width: 991px) {
    height: auto;
  }
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

const Heading = styled.div`
  font-family: PoppinsMedium;
  font-size: 15px;
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
              <Icon src={channelIcon} alt="channel" />
              <InnerBody>
                <Title>Channel</Title>
                {/* <Text>2,052,591</Text> */}
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={poolingIcon} alt="pooling" />
              <InnerBody>
                <Title>Pooling State</Title>
                {/* <Text>0</Text> */}
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={layerIcon} alt="layer" />
              <InnerBody>
                <Title>Layer level</Title>
                {/* <Text>1</Text> */}
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={peerIcon} alt="peer" />
              <InnerBody>
                <Title>Peer</Title>
                {/* <Text>23</Text> */}
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default ConsensusState;
