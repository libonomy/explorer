import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import LatestBlocks from './LatestBlocks';
import LatestTxs from './LatestTxs';
import Statistics from './Statistics';
import ConsensusState from './ConsensusState';
import styled from 'styled-components';
const Wrapper = styled.div`
  margin: 2rem 0rem;
`;
const Main = () => {
  return (
    <Container>
      <Wrapper>
        <Row>
          <Col lg="7">
            <Statistics />
          </Col>
          <Col lg="5">
            <ConsensusState />
          </Col>
        </Row>
      </Wrapper>
      <Row>
        <Col>
          <LatestBlocks />
        </Col>
        <Col>
          <LatestTxs />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
