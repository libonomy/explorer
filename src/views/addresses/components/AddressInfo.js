import React from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import colors from 'src/vars/colors';
import { balance, home } from 'src/assets/images';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import SelectBox from './CustomSelect';
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const CardExp = styled(Card)`
  padding: 1rem;
  display: flex;
  flex-direction: row;
  box-shadow: ${colors.shaddow};
  border: 1px solid #fff;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  border-radius: 8px;
  background-color: ${colors.white};
  @media (max-width: 991px) {
    width: 320px;
    margin-bottom: 10px;
  }
  @media (max-width: 767px) {
    width: auto;
    margin-bottom: 10px;
  }
`;
const CardContent = styled(CardBody)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0px;
`;

const InnerBody = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: left;
`;
const Icon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 1rem;
`;
const IconExp = styled.img`
  width: 40px;
  height: 40px;
  margin-left: 3rem;
`;
const Title = styled(CardTitle)`
  font-family: PoppinsBold;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.29px;
  text-align: left;
  color: #000000;
`;
const Text = styled(CardText)`
  font-family: PoppinsRegular;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 0.3px;
  text-align: left;
  color: #000000;
`;
const InputExp = styled(Input)`
  display: block;
  width: 60%;
  height: 32px;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;

  &:focus {
    color: #000;
    background-color: #fff;
    border-color: #f1f1f1;
    outline: none;
    box-shadow: none;
  }
`;
const OptionExp = styled.option`
  font-family: PoppinsRegular;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;

  &:hover {
    color: #000;
    background-color: ${colors.primary};
  }
`;

const AddressInfo = () => {
  return (
    <Wrapper>
      <Row>
        <Col>
          <CardExp>
            <CardContent>
              <InnerBody>
                <Title>Balance</Title>
                <Text>0.006857 Ether</Text>
              </InnerBody>

              <IconExp src={balance} alt="icon" />
            </CardContent>
          </CardExp>
        </Col>
        <Col>
          <CardExp>
            <CardContent>
              <InnerBody>
                <Title>Ether Value</Title>
                <Text>$8.30(@ $1,210.17/ETH)</Text>
              </InnerBody>

              <IconExp src={home} alt="icon" />
            </CardContent>
          </CardExp>
        </Col>
        <Col>
          <CardExp>
            <CardContent>
              <InnerBody>
                <Title>Token</Title>
                <Text>$3,32154</Text>
              </InnerBody>

              {/* <InputExp type="select" name="select" id="exampleSelect">
                <OptionExp>1</OptionExp>
                <OptionExp>2</OptionExp>
                <OptionExp>3</OptionExp>
                <OptionExp>4</OptionExp>
                <OptionExp>5</OptionExp>
              </InputExp> */}
              <SelectBox
                items={[
                  { value: 'United States', id: 1 },
                  { value: 'Canada', id: 2 },
                  { value: 'Mexico', id: 3 },
                  { value: 'Japan', id: 4 }
                ]}
              />
            </CardContent>
          </CardExp>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default AddressInfo;
