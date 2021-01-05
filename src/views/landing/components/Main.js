import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import LatestBlocks from './LatestBlocks';
import LatestTxs from './LatestTxs';
const Main = () => {
  return (
    <Container>
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
