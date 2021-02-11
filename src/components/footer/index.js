import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'reactstrap';
import {
  logo,
  // instagram,
  twitter,
  // facebook,
  telegram,
  discord
} from 'src/assets/images';
import styled from 'styled-components';

const Wrapper = styled.div``;
const FooterTop = styled.div`
  padding: 2rem 0;
  margin-top: 2.5rem;
  background: #fff;
`;
const Logo = styled.img`
  width: 158px;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
`;
const Icon = styled.img`
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
  margin-bottom: 1rem;
`;

const ListTag = styled.a`
  color: #092326;
  text-decoration: none;
  font-family: PoppinsRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  font-weight: 400;
  &:hover {
    color: #092326;
    text-decoration:none;
`;
const SocialLink = styled.a`
  color: #092326;
  text-decoration: none;
  font-family: PoppinsRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2;
  letter-spacing: normal;
  font-weight: 400;
  &:hover {
    color: #092326;
    text-decoration:none;
`;
const Paragraph = styled.p`
  font-family: PoppinsRegular;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.14;
  letter-spacing: normal;
  text-align: left;
`;
const FooterTail = styled.div`
  background-color: #40b1be;
  color: #fff;
  padding: 0.7rem 0;
`;
const IconSection = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
`;
const ContentSection = styled.div``;

const ListItems = styled.li`
  padding-left: 15px;

  :first-child {
    padding-left: 0px;
  }
  a {
    color: #fff;
  }
`;
const Text = styled.p`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.64;
  letter-spacing: 0.42px;
  text-align: right;
  padding-left: 15px;

  li:first-child {
    padding-left: 6px;
  }
  a {
    color: #fff;
  }
`;
const Footer = () => {
  return (
    <Wrapper>
      <FooterTop>
        <Container>
          <Row>
            <Col lg="6" md="12" xs="12">
              <List>
                <Link to="/">
                  <Logo src={logo} alt="logo-proper-six" />
                </Link>

                <Paragraph>
                  Libonomy LTD | 483 Green Lanes, N13 4BS | London United
                  Kingdom
                </Paragraph>
                <Paragraph>info@libonomy.com</Paragraph>
                <Paragraph>+44 742 458 6677</Paragraph>
              </List>
            </Col>
            <Col lg="2" md="4" xs="6">
              <List>
                <ListItem>
                  <ListTag
                    href="https://libonomy.com/about-us"
                    target="_blank"
                    rel="follow">
                    About Us
                  </ListTag>
                </ListItem>
                <ListItem>
                  <ListTag>Advertise</ListTag>
                </ListItem>
                <ListItem>
                  <ListTag>Terms & Conditions</ListTag>
                </ListItem>
              </List>
            </Col>
            <Col lg="2" md="4" xs="6">
              <List>
                <ListItem>
                  <ListTag>Developers API</ListTag>
                </ListItem>
                <ListItem>
                  <ListTag>Information Center</ListTag>
                </ListItem>
                <ListItem>
                  <ListTag>Newsletter</ListTag>
                </ListItem>
              </List>
            </Col>
            <Col lg="2" md="4" xs="6">
              <List>
                <ListItem>
                  <ListTag
                    href="https://libonomy.com/"
                    target="_blank"
                    rel="follow">
                    Blockchain
                  </ListTag>
                </ListItem>
                <ListItem>
                  <ListTag>Wallet</ListTag>
                </ListItem>

                <ListItem>
                  <ListTag
                    href=" https://liboex.trade/"
                    target="_blank"
                    rel="follow">
                    Exchange
                  </ListTag>
                </ListItem>
              </List>
            </Col>
          </Row>
        </Container>
      </FooterTop>
      <FooterTail>
        <Container>
          <Row>
            <Col>
              <IconSection>
                <ListItems>
                  <SocialLink
                    href="https://twitter.com/libonomy"
                    target="_blank"
                    rel="follow"
                    title="Twitter">
                    <Icon src={twitter} alt="logo-proper-six" />
                  </SocialLink>
                </ListItems>
                <ListItems>
                  <SocialLink
                    href="https://t.me/libonomyblockchain"
                    target="_blank"
                    rel="follow"
                    title="Telegram">
                    <Icon src={telegram} alt="logo-proper-six" />
                  </SocialLink>
                </ListItems>
                <ListItems>
                  <SocialLink
                    href="https://discord.com/invite/6P9SX5c"
                    target="_blank"
                    rel="follow"
                    title="Discord">
                    <Icon src={discord} alt="logo-proper-six" />
                  </SocialLink>
                </ListItems>
              </IconSection>
            </Col>
            <Col>
              <ContentSection>
                <Text>&copy; Libonomy (2020). All rights reserved.</Text>
              </ContentSection>
            </Col>
          </Row>
        </Container>
      </FooterTail>
    </Wrapper>
  );
};

export default Footer;
