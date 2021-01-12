import React from 'react';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { fourOFour, wireBreak } from 'src/assets/images';
import colors from 'src/vars/colors';
const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 5rem 0;
`;
const FourOFour = styled.img``;
const WireBreak = styled.img`
  max-width: 100%;
`;
const Content = styled.p`
  font-size: 24px;
  color: ${colors.primary};
  line-height: 4;
  font-family: PoppinsBold;
`;
const NotFound = () => {
  return (
    <Container>
      <Wrapper>
        <FourOFour src={fourOFour} />
        <Content>Whoops ... page not found :(</Content>
        <WireBreak src={wireBreak} />
      </Wrapper>
    </Container>
  );
};

export default NotFound;
