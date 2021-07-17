import React, { Fragment, useEffect } from 'react';
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Col,
  Row
  // Button
} from 'reactstrap';
import {
  latestblockheight,
  transaction,
  averageblock,
  marketcap,
  accounts,
  difficulty
  // toggler
} from 'src/assets/images';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import colors from 'src/vars/colors';
import NumberFormat from 'react-number-format';
import { SCALE } from 'src/vars/scale';
import { SYMBOL_REGEX } from 'src/vars/regex';
import { getLandingPageData } from 'src/redux/socket/actions';
const Wrapper = styled.div``;

// const ButtonExp = styled.div`
//   padding: 10.5px 16px;
//   .btn-secondary:hover {
//     color: #fff;
//     background-color: #40B1BE !important;
//     border-color: #40b1be;
//   }
//   .btn-secondary:focus,
//   .btn-secondary.focus {
//     color: #fff;
//     background-color: #40b1be !important;
//     border-color: #40b1be !important;
//     box-shadow: none !important;
//   }
//   .btn-secondary:not(:disabled):not(.disabled):active,
//   .btn-secondary:not(:disabled):not(.disabled).active,
//   .show > .btn-secondary.dropdown-toggle {
//     color: #fff;
//     background-color: #40b1be;
//     border-color: #40b1be;
//   }
//   .btn-secondary {
//     color: #fff;
//     background-color: #40b1be;
//     border-color: #40b1be;
// `;

// const CardButton = styled(Button)`
//   width: auto;
//   height: 28px;
//   border-radius: 3px;
//   box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.16);
//   background-color: #40b1be;
//   display: flex;
//   align-items: center;
//   box-shadow: none;
//   font-family: PoppinsRegular;
//   font-size: 11px;
//   .btn-secondary:hover {
//     color: #fff;
//     background-color: ##40b1be !important;
//     border-color: ##40b1be !important;
//   }
//   .btn-secondary:focus,
//   .btn-secondary.focus {
//     color: #fff;
//     background-color: #40b1be !important;
//     border-color: #40b1be !important;
//     box-shadow: none !important;
//   }
//   .btn-secondary:not(:disabled):not(.disabled):active,
//   .btn-secondary:not(:disabled):not(.disabled).active,
//   .show > .btn-secondary.dropdown-toggle {
//     color: #fff;
//     background-color: #40b1be;
//     border-color: #40b1be;
//   }
// `;
const CardExp = styled(Card)`
  padding: 1rem;
  display: flex;
  min-height: 76px;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 8px;
  background-color: ${colors.white};
  margin-bottom: 1rem;
  box-shadow: ${colors.shaddow};
  border: none;
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
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0px;
`;

const InnerBody = styled.div`
  display: flex;
  flex-direction: Column;
  align-items: flex-start;
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-right: 8px;
`;
const Title = styled(CardTitle)`
  font-family: PoppinsRegular;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.26;
  letter-spacing: 0.29px;
  text-align: left;
  color: ${colors.black};
`;
const Text = styled(CardText)`
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
const TextExp = styled.span`
  font-family: PoppinsBold;
  font-size: 13px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.1;
  letter-spacing: 0.3px;
  text-align: left;
  color: ${colors.black};
  text-transform: uppercase;
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

const Statistics = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getLandingPageData());
  }, []);

  const { nodeInfo, nodeInfoLoading } = useSelector((state) => state.info);
  const { name } = useSelector((state) => state.blockchain);
  const { totalSupply, totalSupplyLoading } = useSelector(
    (state) => state.supply
  );
  const { coinPrice, coinPriceLoading } = useSelector((state) => state.price);

  const { latestBlocks } = useSelector((state) => state.blocks);

  return (
    <Wrapper>
      <Row>
        <Col lg="6" md="6" sm="6">
          <CardExp loading={+nodeInfoLoading}>
            <CardContent>
              <Icon src={latestblockheight} alt="latestblockheight" />
              <InnerBody>
                <Title>Network</Title>
                <Text>{nodeInfo && nodeInfo.node_info.network}</Text>
              </InnerBody>
            </CardContent>
            <CardContent>
              <Icon src={latestblockheight} alt="latestblockheight" />
              <InnerBody>
                <Title>Version</Title>
                <Text>{nodeInfo && nodeInfo.node_info.version}</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp loading={+totalSupplyLoading}>
            <CardContent>
              <Icon src={transaction} alt="transaction" />
              <InnerBody>
                <Title>Latest Block</Title>
                <Text>
                  {/* {totalSupply && (
                    <TextFormat
                      value={totalSupply.height}
                      displayType={'text'}
                      thousandSeparator={true}
                    />
                  )} */}
                  {latestBlocks && latestBlocks[0].block_meta.header.height}
                </Text>
              </InnerBody>
            </CardContent>
            <CardContent>
              <Icon src={transaction} alt="transaction" />
              <InnerBody>
                <Title>Protocol Version</Title>
                <Text>
                  {nodeInfo && nodeInfo.node_info.protocol_version.p2p}
                </Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp loading={+totalSupplyLoading}>
            <CardContent>
              <Icon src={marketcap} alt="marketcap" />
              <InnerBody>
                <Title>Inflation</Title>
                <Text>
                  {name === 'v2f'
                    ? 'N/A'
                    : totalSupply && (
                        <Fragment>
                          <TextFormat
                            value={(
                              totalSupply.result[0].amount / SCALE -
                              70000000
                            ).toFixed(6)}
                            displayType={'text'}
                          />{' '}
                          <TextExp>
                            {' '}
                            {totalSupply.result[0].denom.replace(
                              SYMBOL_REGEX,
                              ''
                            )}
                          </TextExp>
                        </Fragment>
                      )}
                </Text>
              </InnerBody>
            </CardContent>
            <CardContent></CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp loading={+totalSupplyLoading}>
            <CardContent>
              <Icon src={marketcap} alt="marketcap" />
              <InnerBody>
                <Title>Current Supply</Title>
                <Text>
                  {totalSupply && (
                    <Fragment>
                      {name === 'v2f' ? '333,333,333' : '70,000,000'}
                      <TextExp>
                        {' '}
                        {name === 'v2f'
                          ? 'V2F'
                          : totalSupply.result[0].denom.replace(
                              SYMBOL_REGEX,
                              ''
                            )}
                      </TextExp>
                    </Fragment>
                  )}
                </Text>
              </InnerBody>
            </CardContent>
            <CardContent>
              <Icon src={averageblock} alt="averageblock" />
              <InnerBody>
                <Title>Peer Speed</Title>
                <Text>Not Loaded</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp loading={+coinPriceLoading}>
            <CardContent>
              <Icon src={accounts} alt="accounts" />
              <InnerBody>
                <Title>Accounts</Title>
                <Text>Not Loaded</Text>
              </InnerBody>
            </CardContent>
            <CardContent>
              <Icon src={latestblockheight} alt="latestblockheight" />
              <InnerBody>
                <Title>LBY Price</Title>
                <Text>
                  {coinPrice && coinPrice} &nbsp;
                  <TextExp>USD</TextExp>
                </Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={difficulty} alt="difficulty" />
              <InnerBody>
                <Title>Difficulty</Title>
                <Text>Not Loaded</Text>
              </InnerBody>
            </CardContent>
            <CardContent>
              <Icon src={difficulty} />
              <InnerBody>
                <Title>Hash Rate</Title>
                <Text>Not Loaded</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        {/* <ButtonExp>
          <CardButton>Click To See More</CardButton>
        </ButtonExp> */}
      </Row>
    </Wrapper>
  );
};

export default Statistics;
