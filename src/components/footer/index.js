import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { Logo } from 'src/assets/images';
import styled from 'styled-components';
const Logoo = styled.img`
  width: 158px;
  height: 18px;
  object-fit: contain;
`;
const FooterList = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 0;
  li {
    padding: 8px !important;
    margin-left: 18px !important;
  }
  li a {
    color: #092326;
    text-decoration: none;
    font-size: 12px;
    line-height: 28px;
    font-weight: 400;
  }
`;
const Paragraph = styled.p`
  font-family: Poppins;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
  color: #092326;
`;
class Footer extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg="6" md="6" xs="12">
              <Col lg="12" md="12" xs="12">
                <FooterList>
                  <a
                    href="https://www.libonomy.com/"
                    target="_blank"
                    rel="follow">
                    <Logoo
                      src={Logo}
                      alt="logo-proper-six"
                      class="img-footer"
                    />
                  </a>

                  <Paragraph>
                    Libonomy LTD | 483 Green Lanes, N13 4BS | London United
                    Kingdom
                  </Paragraph>
                  <Paragraph>info@libonomy.com</Paragraph>
                  <Paragraph>+44 742 458 6677</Paragraph>
                </FooterList>
              </Col>
            </Col>
            <Col lg="2" md="3" xs="12">
              <FooterList>
                <li>
                  <Link to="#">About Us</Link>
                </li>
                <li>
                  <Link to="#">Advertise</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
              </FooterList>
            </Col>
            <Col lg="2" md="3" xs="12">
              <FooterList>
                <li>
                  <Link to="#">Developers API</Link>
                </li>
                <li>
                  <Link href="#">Information Center</Link>
                </li>
                <li>
                  <Link to="#">Newsletter</Link>
                </li>
              </FooterList>
            </Col>
            <Col lg="2" md="3" xs="12">
              <FooterList>
                <li>
                  <Link to="#">Blockchain</Link>
                </li>
                <li>
                  <Link to="#">Wallet</Link>
                </li>

                <li>
                  <a href="https://liboex.trade" target="_blank">
                    Exchange
                  </a>
                </li>
              </FooterList>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default Footer;
