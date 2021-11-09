import React, { useEffect } from 'react';
// import { Card, CardBody, CardTitle, Col, Row } from 'reactstrap';
import colors from 'src/vars/colors';
// import {
//   channelIcon,
//   peerIcon,
//   layerIcon,
//   poolingIcon
// } from 'src/assets/images';
import styled from 'styled-components';
import moment from 'moment';
import {
  AreaChart,
  Area,
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { useDispatch, useSelector } from 'react-redux';
import { getLandingPageData } from 'src/redux/socket/actions';
const Wrapper = styled.div`
  padding: 1rem;
  border-radius: 10px;
  min-height: 230px;
  box-shadow: ${colors.shaddow};
  background-color: ${colors.white};
  height: calc(100% - 16px);
  @media (max-width: 991px) {
    // height: auto;
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
const Graph = styled.div`
  width: 100%;
  height: 80%;
  tspan {
    font-family: PoppinsRegular;
    font-size: 12px;
  }
`;
// const CardExp = styled(Card)`
//   padding: 1rem;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
//   align-items: center;
//   text-align: center;
//   border-radius: 8px;
//   background-color: ${colors.white};
//   margin-bottom: 1rem;
// `;
// const CardContent = styled(CardBody)`
//   display: flex;
//   flex-direction: row;
//   justify-content: flex-start;
//   align-items: center;
//   padding: 0px;
// `;

// const InnerBody = styled.div`
//   display: flex;
//   flex-direction: Column;
//   align-items: center;
// `;
// const Icon = styled.img`
//   width: 32px;
//   height: 32px;
//   margin-right: 1rem;
// `;
// const Title = styled(CardTitle)`
//   font-family: PoppinsRegular;
//   font-size: 3px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   letter-spacing: 0.29px;
//   text-align: center;
//   color: #000000;
// `;
// const Text = styled(CardText)`
//   font-family: PoppinsBold;
//   font-size: 13px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.1;
//   letter-spacing: 0.3px;
//   text-align: center;
//   color: #000000;
// `;

const Heading = styled.h1`
  font-family: PoppinsMedium;
  font-size: 15px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.17;
  letter-spacing: 0.36px;
  margin-bottom: 1.5rem;
`;

const ConsensusState = () => {
  const dispatch = useDispatch();
  const { coinData, coinDataLoading } = useSelector((state) => state.graph);
  const arr = [];
  coinData &&
    coinData.map((item) =>
      arr.push({
        price: item.price,
        time: item.time
      })
    );
  let totalLength = arr.length;
  let x = totalLength / 60;
  x = Math.floor(x);
  let arr1 = [];
  let arrValue = 0;
  for (let i = 0; i < x; i++) {
    arr1.push(arr[arrValue]);
    arrValue = arrValue + 60;
  }
  const arr2 = [];
  arr1.map((item) =>
    arr2.push({ Price: item.price, Time: moment(item.time).format('hh A') })
  );
  arr2.reverse();

  useEffect(() => {
    // dispatch(getLandingPageData());
  }, []);

  return (
    <Wrapper loading={+coinDataLoading}>
      <Heading>LBY Price Graph Of Last 24 Hour</Heading>
      {/* <Row>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={channelIcon} alt="channel" />
              <InnerBody>
                <Title>Channel</Title>
                <Text>2,052,591</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={poolingIcon} alt="pooling" />
              <InnerBody>
                <Title>Pooling State</Title>
                <Text>0</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={layerIcon} alt="layer" />
              <InnerBody>
                <Title>Layer level</Title>
                <Text>1</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
        <Col lg="6" md="6" sm="6">
          <CardExp>
            <CardContent>
              <Icon src={peerIcon} alt="peer" />
              <InnerBody>
                <Title>Peer</Title>
                <Text>23</Text>
              </InnerBody>
            </CardContent>
          </CardExp>
        </Col>
      </Row> */}
      {/* <ResponsiveContainer>
        <LineChart width={300} height={100} data={arr2}>
          <Tooltip />
          <Line
            type="monotone"
            dataKey="Price"
            stroke="#8884d8"
            strokeWidth={2}
          />
        </LineChart>
      </ResponsiveContainer> */}
      <Graph>
        <ResponsiveContainer>
          <LineChart
            data={arr2}
            margin={{
              top: 10,
              right: 30,
              left: 0,
              bottom: 0
            }}>
            <XAxis style={{ fontSize: '14px' }} dataKey="Time" />
            <YAxis
              style={{ fontSize: '14px' }}
              domain={['auto', 'auto']}
              interval={1}
            />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="Price"
              stroke="#40b1be"
              fill="#40b1be"
            />
          </LineChart>
        </ResponsiveContainer>
      </Graph>
    </Wrapper>
  );
};

export default ConsensusState;
