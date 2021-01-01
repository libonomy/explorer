import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 22px 0 18.9px 0px;
  border-radius: 8px;
  box-shadow: 0 0.75rem 1.5rem rgba(18, 38, 63, 0.03);
  background-color: #ffffff;
`;
const Heading = styled.h1`
  font-size: 20px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.45;
  letter-spacing: 0.6px;
  text-align: left;
  color: black;
  margin: 2rem 0 1rem 0px;
  font-family: PoppinsMedium;
`;

const PageContainerTb = ({ heading, children }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Wrapper>{children}</Wrapper>
    </Container>
  );
};

export default PageContainerTb;
