import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import { Logo } from 'src/assets/images';
import styled from 'styled-components';
const FooterWrapper = styled.div`
  padding: 2rem;
  padding-bottom: 0rem;
`;
const Logoo = styled.img`
  width: 158px;
  height: 18px;
  object-fit: contain;
  margin: 10px -4px 22px -4px;
`;
const UnorderList = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 0;
`;
const FooterList = styled.li`
  padding: 8px !important;
  margin-left: 18px !important;
  @media (max-width: 991px) {
    margin-left: 8px !important;
  }
  a {
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
  line-height: 1;
  letter-spacing: normal;
  text-align: left;
  color: #092326;
`;
const FooterTail = styled.div`
  margin: 3px 0 0;
  background-color: #40b1be;
  color: #fff;
  padding: 15px;
`;
const FooterSocialIcon = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  margin-left: 10px;
`;
const FooterLists = styled.li`
  padding-left: 15px;

  :first-child {
    padding-left: 0px;
  }
  a {
    color: #fff;
  }
`;
const CopyRight = styled.div`
  padding-left: 15px;

  li:first-child {
    padding-left: 6px;
  }
  a {
    color: #fff;
  }
`;
const FooterColumn = styled(Col)`
  display: flex;
  display: flex;
  justify-content: space-between;
`;
class Footer extends Component {
  render() {
    return (
      <>
        <FooterWrapper>
          <Container>
            <Row>
              <Col lg="6" md="12" xs="12">
                <Col lg="12" md="12" xs="12">
                  <UnorderList>
                    <Link href="#">
                      <Logoo
                        src={Logo}
                        alt="logo-proper-six"
                        class="img-footer"
                      />
                    </Link>

                    <Paragraph>
                      Libonomy LTD | 483 Green Lanes, N13 4BS | London United
                      Kingdom
                    </Paragraph>
                    <Paragraph>info@libonomy.com</Paragraph>
                    <Paragraph>+44 742 458 6677</Paragraph>
                  </UnorderList>
                </Col>
              </Col>
              <Col lg="2" md="4" xs="12">
                <UnorderList>
                  <FooterList>
                    <Link to="#">About Us</Link>
                  </FooterList>
                  <FooterList>
                    <Link to="#">Advertise</Link>
                  </FooterList>
                  <FooterList>
                    <Link to="#">Terms & Conditions</Link>
                  </FooterList>
                </UnorderList>
              </Col>
              <Col lg="2" md="4" xs="12">
                <UnorderList>
                  <FooterList>
                    <Link to="#">Developers API</Link>
                  </FooterList>
                  <FooterList>
                    <Link href="#">Information Center</Link>
                  </FooterList>
                  <FooterList>
                    <Link to="#">Newsletter</Link>
                  </FooterList>
                </UnorderList>
              </Col>
              <Col lg="2" md="4" xs="12">
                <UnorderList>
                  <FooterList>
                    <Link to="#">Blockchain</Link>
                  </FooterList>
                  <FooterList>
                    <Link to="#">Wallet</Link>
                  </FooterList>

                  <FooterList>
                    <Link to="#">Exchange</Link>
                  </FooterList>
                </UnorderList>
              </Col>
            </Row>
          </Container>
        </FooterWrapper>
        <FooterTail>
          <Container>
            <Row>
              <FooterColumn>
                <FooterSocialIcon>
                  <FooterLists>
                    <Link
                      href="#"
                      target="_blank"
                      rel="follow"
                      title="Pinterest">
                      <i class="fab fa-pinterest-p"></i>
                    </Link>
                  </FooterLists>
                  <FooterLists>
                    <Link
                      href="#"
                      target="_blank"
                      rel="follow"
                      title="Instagram">
                      <i class="fab fa-instagram"></i>
                    </Link>
                  </FooterLists>

                  <FooterLists>
                    <Link href="#" target="_blank" rel="follow" title="Twitter">
                      <i class="fab fa-twitter"></i>
                    </Link>
                  </FooterLists>
                  <FooterLists>
                    <Link
                      href="#"
                      target="_blank"
                      rel="follow"
                      title="Facebook">
                      <i class="fab fa-facebook"></i>
                    </Link>
                  </FooterLists>
                </FooterSocialIcon>
                <CopyRight>
                  &copy; Libonomy (2020). All rights reserved.
                </CopyRight>
              </FooterColumn>
            </Row>
          </Container>
        </FooterTail>
      </>
    );
  }
}

export default Footer;
