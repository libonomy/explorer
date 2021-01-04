import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import {
  LogoExp,
  Pinterest,
  Instagram,
  Twitter,
  Facebook
} from 'src/assets/images';
import styled from 'styled-components';
const Wrapper = styled.div`
padding: 2rem;
padding-bottom: 1rem;
background: #fff;
}
`;
const Logo = styled.img`
  width: 158px;
  height: 18px;
  object-fit: contain;
  margin: 10px -4px 22px -4px;
`;
const ShapeIcon = styled.img`
  width: 13.7px;
  height: 13.7px;
  object-fit: contain;
`;
const List = styled.ul`
  padding: 0;
  list-style: none;
  margin-bottom: 0;
`;
const ListItem = styled.li`
  padding: 8px !important;
  margin-left: 18px !important;
  @media (max-width: 991px) {
    margin-left: 8px !important;
  }
  a {
    color: #092326;
    text-decoration: none;
    font-size: 12px;
    line-height: 2;
    font-weight: 400;
  }
`;
const Paragraph = styled.p`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
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
const ListItems = styled.li`
  padding-left: 15px;

  :first-child {
    padding-left: 0px;
  }
  a {
    color: #fff;
  }
`;
const CopyRight = styled.p`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: 0.42px;
  text-align: left;
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
        <Wrapper>
          <Container>
            <Row>
              <Col lg="6" md="12" xs="12">
                <Col lg="12" md="12" xs="12">
                  <List>
                    <Link href="#">
                      <Logo
                        src={LogoExp}
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
                  </List>
                </Col>
              </Col>
              <Col lg="2" md="4" xs="12">
                <List>
                  <ListItem>
                    <Link to="#">About Us</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Advertise</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Terms & Conditions</Link>
                  </ListItem>
                </List>
              </Col>
              <Col lg="2" md="4" xs="12">
                <List>
                  <ListItem>
                    <Link to="#">Developers API</Link>
                  </ListItem>
                  <ListItem>
                    <Link href="#">Information Center</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Newsletter</Link>
                  </ListItem>
                </List>
              </Col>
              <Col lg="2" md="4" xs="12">
                <List>
                  <ListItem>
                    <Link to="#">Blockchain</Link>
                  </ListItem>
                  <ListItem>
                    <Link to="#">Wallet</Link>
                  </ListItem>

                  <ListItem>
                    <Link to="#">Exchange</Link>
                  </ListItem>
                </List>
              </Col>
            </Row>
          </Container>
        </Wrapper>
        <FooterTail>
          <Container>
            <Row>
              <FooterColumn>
                <FooterSocialIcon>
                  <ListItems>
                    <Link
                      href="#"
                      target="_blank"
                      rel="follow"
                      title="Pinterest">
                      <ShapeIcon
                        src={Pinterest}
                        alt="logo-proper-six"
                        class="img-footer"
                      />
                    </Link>
                  </ListItems>
                  <ListItems>
                    <Link
                      href="#"
                      target="_blank"
                      rel="follow"
                      title="Instagram">
                      <ShapeIcon
                        src={Instagram}
                        alt="logo-proper-six"
                        class="img-footer"
                      />
                    </Link>
                  </ListItems>

                  <ListItems>
                    <Link href="#" target="_blank" rel="follow" title="Twitter">
                      <ShapeIcon
                        src={Twitter}
                        alt="logo-proper-six"
                        class="img-footer"
                      />
                    </Link>
                  </ListItems>
                  <ListItems>
                    <Link
                      href="#"
                      target="_blank"
                      rel="follow"
                      title="Facebook">
                      <ShapeIcon
                        src={Facebook}
                        alt="logo-proper-six"
                        class="img-footer"
                      />
                    </Link>
                  </ListItems>
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
