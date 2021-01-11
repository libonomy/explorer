import React from 'react';
import { Card, Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { liboBackground } from 'src/assets/images';

import colors from 'src/vars/colors';

const Wrapper = styled.div`
  padding: 1rem 0 1rem 0;
  background: url(${liboBackground});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  @media (max-width: 991px) {
    height: auto;
  }
`;

const CardWrapper = styled(Card)`
  width: 345px;
  height: 151px;
  margin-left: 2.5rem;
  border-radius: 10px;
  background-color: #ffffff;
  @media (max-width: 991px) {
    margin-left: 0rem;
  }
  @media (max-width: 480px) {
    width: auto;
  }
`;

const Title = styled.h1`
  font-family: PoppinsBold;
  font-size: 30px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: 0.9px;
  text-align: left;
  color: ${colors.white};
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
  @media (max-width: 991px) {
    margin-bottom: 1rem;
  }
`;
const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
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
          <Col lg="5" md="12">
            <CardWrapper></CardWrapper>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Banner;
