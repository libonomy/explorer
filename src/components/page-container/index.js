import React from 'react';
import { Container } from 'reactstrap';
import colors from 'src/vars/colors';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 22px 0 18.9px 0px;
  border-radius: 8px;
  box-shadow: ${colors.shaddow};
  ${({ bg }) => `
  background-color:${bg ? bg : colors.white};
  min-height: 500px  ;
  `}
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

const PageContainer = ({ heading, children, ...rest }) => {
  return (
    <Container>
      <Heading>{heading}</Heading>
      <Wrapper {...rest}>{children}</Wrapper>
    </Container>
  );
};

export default PageContainer;
