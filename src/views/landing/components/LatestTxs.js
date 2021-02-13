import React, { useEffect } from 'react';
import { Table, Button, UncontrolledTooltip } from 'reactstrap';
import { txIcon } from 'src/assets/images';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTransactions } from 'src/redux/actions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { IconText } from 'src/components/typography';
import { TableLoader } from 'src/components';
import { NoData } from 'src/components';

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
const LinkExp = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #fff;
    text-decoration: none;
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
  padding: 5px 0px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;
const ButtonExp = styled.div`
border-top: 1px solid #dee2e6;
margin-top: -1rem;
padding: 1rem;
display: flex;
justify-content: center;

  .btn-secondary:hover {
    color: #fff;
    background-color: #40B1BE !important;
    border-color: #40b1be;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    color: #fff;
    background-color: #40b1be !important;
    border-color: #40b1be !important;
    box-shadow: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #40b1be;
    border-color: #40b1be;
  }
  .btn-secondary {
    color: #fff;
    background-color: #40b1be;
    border-color: #40b1be;
`;

const Tooltip = styled(UncontrolledTooltip)`
  font-size: 10px;
  font-family: PoppinsRegular;
`;

const TableButton = styled(Button)`
  width: auto;
  height: 28px;
  border-radius: 3px;
  box-shadow: ${colors.shaddow};
  background-color: #40b1be;
  display: flex;
  align-items: center;
  box-shadow: none;
  font-family: PoppinsRegular;
  font-size: 11px;
  .btn-secondary:hover {
    color: #fff;
    background-color: ##40b1be !important;
    border-color: ##40b1be !important;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    color: #fff;
    background-color: #40b1be !important;
    border-color: #40b1be !important;
    box-shadow: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #40b1be;
    border-color: #40b1be;
  }
`;
const LatestTxs = () => {
  const dispatch = useDispatch();

  const { latestTxs, latestTxsLoading } = useSelector((state) => state.txs);

  useEffect(() => {
    const filter = {
      page: 0,
      limit: 5
    };
    dispatch(getAllTransactions(filter));
  }, []);

  let txs = latestTxs && latestTxs.data.txs;
  return (
    <Wrapper>
      <Header>Latest Transactions</Header>
      <Table hover>
        <TableHeader>
          <TableRow>
            <TableHeading>Tx Hash</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>From</TableHeading>
            <TableHeading>To</TableHeading>
            {/* <TableHeading>Amount</TableHeading> */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {txs &&
            !latestTxsLoading &&
            txs.map((item, i) => (
              <TableRow key={i}>
                <TableCol icon>
                  <IconText>
                    <Icon src={txIcon} />
                    <Link
                      to={`/txs/${item.txhash}`}
                      id={`txhash_exp_alpha${i}`}>
                      {item.txhash}
                    </Link>
                    <Tooltip placement="right" target={`txhash_exp_alpha${i}`}>
                      view tx by hash!
                    </Tooltip>
                  </IconText>
                </TableCol>
                <TableCol>{moment(item.timestamp).fromNow()}</TableCol>

                <TableCol>
                  <Link
                    to={`/addresses/${item.tx.value.msg[0].value.from_address}`}
                    id={`from_address_alpha${i}`}>
                    {item.tx.value.msg[0].value.from_address}
                  </Link>
                  <Tooltip placement="right" target={`from_address_alpha${i}`}>
                    view details
                  </Tooltip>
                </TableCol>
                <TableCol>
                  <Link
                    to={`/addresses/${item.tx.value.msg[0].value.to_address}`}
                    id={`to_address_alpha${i}`}>
                    {item.tx.value.msg[0].value.to_address}
                  </Link>
                  <Tooltip placement="right" target={`to_address_alpha${i}`}>
                    view details
                  </Tooltip>
                </TableCol>
              </TableRow>
            ))}
          {!latestTxsLoading && !latestTxs && (
            <NoData colSpan={6} height={160} />
          )}
          {latestTxsLoading && <TableLoader colSpan={6} height={160} />}
        </TableBody>
      </Table>
      <LinkExp to="/txs">
        <ButtonExp>
          <TableButton> Show More Transaction</TableButton>
        </ButtonExp>
      </LinkExp>
    </Wrapper>
  );
};

export default LatestTxs;
