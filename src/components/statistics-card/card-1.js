import React from 'react';
import Data from './data';
import { Card, CardBody, CardTitle, CardText } from 'reactstrap';
import LatestBlock from 'src/assets/images/latest-block.png';
import styled from 'styled-components';
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  padding: 12px 16px;
  border-radius: 8px;
  box-shadow: 0 0 10px 0 rgba(18, 38, 63, 0.01);
  background-color: #ffffff;
  @media (max-width: 991px) {
    flex-wrap: wrap;
  }
`;

const CardExp = styled(Card)`
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border: 0 solid #fff;
`;
const CardBodyContent = styled(CardBody)`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  padding: 0px;
`;
const InnerBody = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: flex-start;
`;
const BlockExp = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
  margin-top: -22px;
`;
const Title = styled(CardTitle)`
  font-family: PoppinsRegular;
  font-size: 9.5px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: 0.29px;
  text-align: center;
  color: #000000;
`;
const Text = styled(CardText)`
  font-family: PoppinsRegular;
  font-size: 10px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 0.3px;
  text-align: left;
  color: #000000;
`;

const CardExplorer = ({ title, title1, text, text2, text1 }) => {
  return (
    <Wrapper>
      <CardExp>
        <CardBodyContent>
          <BlockExp src={LatestBlock} />{' '}
          <InnerBody>
            <Title>{title}</Title>
            <Text>{text}</Text>
            <Text>{text2}</Text>
          </InnerBody>
        </CardBodyContent>
        <CardBodyContent>
          <BlockExp src={LatestBlock} />{' '}
          <InnerBody>
            <Title>{title1}</Title>
            <Text>{text1}</Text>
          </InnerBody>
        </CardBodyContent>
      </CardExp>
    </Wrapper>
  );
};

export default CardExplorer;
