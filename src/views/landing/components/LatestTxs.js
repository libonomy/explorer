import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import { successIcon, failIcon, txIcon } from 'src/assets/images';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'src/redux/actions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { IconText } from 'src/components/typography';

const Wrapper = styled.div`
  overflow-y: auto;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: ${colors.shaddow};
`;

const TableCol = styled.td`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1;
  letter-spacing: 0.36px;
  text-align: left;
  max-width: 80px;
  overflow: hidden;
  text-overflow: ellipsis;
`;
const TableHeading = styled.th`
  font-family: PoppinsBold;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: 0.36px;
  text-align: left;
  color: #000000;
  border-bottom: 0px !important;
`;
const TableHeader = styled.thead`
  border: solid 0.5px rgba(0, 0, 0, 0.1) 0;
  background-color: rgba(240, 249, 250, 0.8);
`;
const TableRow = styled.tr``;
const TableBody = styled.tbody``;

const Header = styled.div`
  font-family: PoppinsMedium;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 2.5;
  letter-spacing: 0.54px;
  margin-left: 10px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const LatestTxs = () => {
  const dispatch = useDispatch();

  const { latestTxs, latestTxsLoading } = useSelector((state) => state.txs);

  useEffect(() => {
    const filter = {
      'tx.minheight': 1,
      'tx.maxheight': 1000000,
      page: 1,
      limit: 5
    };
    dispatch(getAllTransactions(filter));
  }, []);
  return (
    <Wrapper>
      <Header>Latest Transactions</Header>
      <Table hover>
        <TableHeader>
          <TableRow>
            <TableHeading>Txn Hash</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>To</TableHeading>
            <TableHeading>From</TableHeading>
            {/* <TableHeading>Amount</TableHeading> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {latestTxs &&
            latestTxs.txs.map((item, index) => (
              <TableRow key={index}>
                <TableCol icon>
                  <IconText>
                    <Icon src={txIcon} />
                    <Link to={`/blocks/${item.txhash}`}>{item.txhash}</Link>
                  </IconText>
                </TableCol>
                <TableCol>
                  {moment(item.timestamp, 'YYYYMMDD').fromNow()}
                </TableCol>
                <TableCol>
                  <Link disabled>
                    {item.tx.value.msg[0].value.from_address}
                  </Link>
                </TableCol>
                <TableCol>
                  <Link disabled>{item.tx.value.msg[0].value.to_address}</Link>
                </TableCol>
                {/* <TableCol>
                  {item.tx.value.msg[0].value.amount[0].denom}
                  <NumberFormat
                    value={item.tx.value.msg[0].value.amount[0].amount}
                    displayType={'text'}
                    thousandSeparator={true}
                  />
                </TableCol> */}
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default LatestTxs;
