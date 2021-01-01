import React from 'react';
import { Card, CardText, CardTitle, Col, Container } from 'reactstrap';
const LandingPage = () => {
  return (
    <Container>
      <Col lg="6" md="6" sm="6">
        <Card>
          <div className="cards-body">
            <div className="body-content">
              <div className="body-inner-div">
                <span className="img-div">{/* <img src={marketCap} /> */}</span>
                <CardTitle>Circulation Amount</CardTitle>
              </div>
              <div>
                <CardText>N/A</CardText>
              </div>
            </div>
            <div className="body-content">
              <div className="body-inner-div">
                <span className="img-div"></span>
                <CardTitle>Active Amount</CardTitle>
              </div>
              <div>
                <CardText>N/A</CardText>
              </div>
            </div>
          </div>
        </Card>
      </Col>
    </Container>
  );
};

export default LandingPage;
