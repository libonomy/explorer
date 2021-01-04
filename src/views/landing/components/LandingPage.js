import React from 'react';
import { Col, Container, Row } from 'reactstrap';
import CardExplorer from 'src/components/statistics-card/card-1';
import Data from 'src/components/statistics-card/data';
import styled from 'styled-components';
const ColExp = styled(Col)`
  padding: 10.5px 13px;
`;
const RowExp = styled(Row)`
  padding: 10.5px 13px;
`;
const LandingPage = () => {
  return (
    <Container>
      <RowExp>
        <ColExp lg="7">
          <Row>
            {Data.map(({ id, title, title1, text, text1, text2 }) => (
              <ColExp lg="6" md="6" sm="6">
                <CardExplorer
                  key={id}
                  title={title}
                  title1={title1}
                  text={text}
                  text1={text1}
                  text2={text2}
                />
              </ColExp>
            ))}
          </Row>
        </ColExp>
        <Col lg="5" md="12">
          card work
        </Col>
      </RowExp>
    </Container>
  );
};

export default LandingPage;
