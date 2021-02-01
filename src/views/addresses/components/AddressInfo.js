import React, { Fragment, useEffect } from 'react';
import { Card, CardBody, CardTitle, CardText, Row, Col } from 'reactstrap';
import colors from 'src/vars/colors';
import { balance, home } from 'src/assets/images';
import styled from 'styled-components';
import { Input } from 'reactstrap';
import SelectBox from './CustomSelect';
import { useDispatch, useSelector } from 'react-redux';
import NumberFormat from 'react-number-format';
import { SCALE } from 'src/vars/scale';
import { SYMBOL_REGEX } from 'src/vars/regex';
const Wrapper = styled.div`
  margin-bottom: 2rem;
`;
const TextFormat = styled(NumberFormat)`
  font-family: PoppinsBold;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 0.3px;
  text-align: left;
  color: ${colors.black};
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
  ${({ loading }) =>
    loading &&
    `
position:relative;
&:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  background: rgba(255,255,255,.8);
  width: 100%;
  height: 100%;
  border-radius: .28571429rem;
  z-index: 100;
  }
&:after {
  position: absolute;
  content: '';
  top: 50%;
  left: 50%;
  margin: -1.3em 0 0 -1.3em;
  width: 2.5em;
  height: 2.5em;
  -webkit-animation: segment-spin .6s linear;
  animation: segment-spin .6s linear;
  -webkit-animation-iteration-count: infinite;
  animation-iteration-count: infinite;
  border-radius: 500rem;
  border-color: ${colors.primary} rgba(0,0,0,.1) rgba(0,0,0,.1) rgba(0,0,0,.1);
  border-style: solid;
  border-width: .2em;
  -webkit-box-shadow: 0 0 0 1px transparent;
  box-shadow: 0 0 0 1px transparent;
  visibility: visible;
  z-index: 101;
  }
`};
  @-webkit-keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes segment-spin {
    from {
      -webkit-transform: rotate(0);
      transform: rotate(0);
    }
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`;
const CardContent = styled(CardBody)`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0px 25px;
  height: 50px;
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
  ${({ uppercase }) => uppercase && `text-transform: uppercase `}
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

const AddressInfo = (props) => {
  const { details, detailsLoading } = useSelector((state) => state.addresses);
  return (
    <Wrapper>
      <Row>
        <Col>
          <CardExp loading={detailsLoading}>
            <CardContent>
              <InnerBody>
                <Title>Balance</Title>
                <Text uppercase>
                  {details || details ? (
                    <Fragment>
                      <TextFormat
                        value={details.result.value.coins[0].amount / SCALE}
                        displayType={'text'}
                        thousandSeparator={true}
                      />{' '}
                      {details.result.value.coins[0].denom.replace(
                        SYMBOL_REGEX,
                        ''
                      )}
                    </Fragment>
                  ) : (
                    0
                  )}
                </Text>
              </InnerBody>

              <IconExp src={balance} alt="icon" />
            </CardContent>
          </CardExp>
        </Col>
        <Col>
          <CardExp>
            <CardContent>
              <InnerBody>
                <Title>LBY Value</Title>
                <Text>$8.30</Text>
              </InnerBody>

              <IconExp src={home} alt="icon" />
            </CardContent>
          </CardExp>
        </Col>
        <Col>
          <CardExp>
            <CardContent>
              <InnerBody>
                <Title>Other Assets</Title>
                <Text>0</Text>
              </InnerBody>

              {/* <InputExp type="select" name="select" id="exampleSelect">
                <OptionExp>1</OptionExp>
                <OptionExp>2</OptionExp>
                <OptionExp>3</OptionExp>
                <OptionExp>4</OptionExp>
                <OptionExp>5</OptionExp>
              </InputExp> */}
              {/* <SelectBox
                items={[
                  { value: 'United States', id: 1 },
                  { value: 'Canada', id: 2 },
                  { value: 'Mexico', id: 3 },
                  { value: 'Japan', id: 4 }
                ]}
              /> */}
            </CardContent>
          </CardExp>
        </Col>
      </Row>
    </Wrapper>
  );
};

export default AddressInfo;
