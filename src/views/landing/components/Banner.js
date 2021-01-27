import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import styled from 'styled-components';
import { liboBackground, slide1 } from 'src/assets/images';

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

// const CardWrapper = styled(Card)`
//   width: 345px;
//   height: 151px;
//   margin-left: 2.5rem;
//   border-radius: 10px;
//   background-color: #ffffff;
//   @media (max-width: 991px) {
//     margin-left: 0rem;
//   }
//   @media (max-width: 480px) {
//     width: auto;
//   }
// `;

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

const Image = styled.img`
  max-width: 100%;
`;
const Banner = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <Col lg="7" md="12">
            <Title>Libonomy Explorer</Title>
            <Paragraph>
              Libonomy is an interoperable, scalable and AI based blockchain
              technology allowing communities and companies to create faster,
              secure and cross chain solutions - digital asset lending and
              borrowing, virtual storage, hedging and even power-sharing between
              units. All users need to do is connect to our decentralized
              application of their choice and they can utilize complex smart
              contracts, trace packages and use our aphelion protocol to develop
              their own crypto-currencies or blockchains on top of libonomy.
            </Paragraph>
          </Col>
          <Col lg="5" md="12">
            <a href="https://libonomy.com/" target="_blank" rel="noreferrer">
              <Image src={slide1} />
            </a>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
};

export default Banner;
