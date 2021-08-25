import React, { useEffect, Fragment } from 'react';
import { Table, Button, UncontrolledTooltip } from 'reactstrap';
import { txIcon } from 'src/assets/images';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { IconText } from 'src/components/typography';
import { TableLoader } from 'src/components';
import { NoData } from 'src/components';
import { getLandingPageData } from 'src/redux/socket/actions';

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
  background-color: #f0f4ff;
`;
const LinkExp = styled(Link)`
  text-decoration: none;
  &:hover {
    color: #fff;
    text-decoration: none;
`;
const TableRow = styled.tr`
  display: table;
  width: 100%;
  table-layout: fixed;
`;
const TableBody = styled.tbody`
  display: table;
  width: 100%;
  table-layout: fixed;
  min-height: 185px;
  // align-items: flex-end;
`;

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
    background-color: #1f4bb1 !important;
    border-color: #1f4bb1;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    color: #fff;
    background-color: #1f4bb1 !important;
    border-color: #1f4bb1 !important;
    box-shadow: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #1f4bb1;
    border-color: #1f4bb1;
  }
  .btn-secondary {
    color: #fff;
    background-color: #1f4bb1;
    border-color: #1f4bb1;
`;

const Tooltip = styled(UncontrolledTooltip)`
  .tooltip-inner {
    font-size: 12px !important;
    font-family: PoppinsRegular;
    background-color: #000;
  }
`;

const TableButton = styled(Button)`
  width: auto;
  height: 28px;
  border-radius: 3px;
  box-shadow: ${colors.shaddow};
  background-color: #1f4bb1;
  display: flex;
  align-items: center;
  box-shadow: none;
  font-family: PoppinsRegular;
  font-size: 11px;
  .btn-secondary:hover {
    color: #fff;
    background-color: ##1f4bb1 !important;
    border-color: ##1f4bb1 !important;
  }
  .btn-secondary:focus,
  .btn-secondary.focus {
    color: #fff;
    background-color: #1f4bb1 !important;
    border-color: #1f4bb1 !important;
    box-shadow: none !important;
  }
  .btn-secondary:not(:disabled):not(.disabled):active,
  .btn-secondary:not(:disabled):not(.disabled).active,
  .show > .btn-secondary.dropdown-toggle {
    color: #fff;
    background-color: #1f4bb1;
    border-color: #1f4bb1;
  }
`;
const LatestTxs = () => {
  const dispatch = useDispatch();

  const { latestTxs, latestTxsLoading } = useSelector((state) => state.txs);

  useEffect(() => {
    // dispatch(getLandingPageData());
  }, []);
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
          </TableRow>
        </TableHeader>
        <TableBody>
          {latestTxs &&
            !latestTxsLoading &&
            latestTxs.map((item, i) => (
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
                  {item.tx.value.msg[0].value.from_address ? (
                    <Fragment>
                      <Link
                        to={`/addresses/${item.tx.value.msg[0].value.from_address}`}
                        id={`from_address_alpha${i}`}>
                        {item.tx.value.msg[0].value.from_address}
                      </Link>
                      <Tooltip
                        placement="right"
                        target={`from_address_alpha${i}`}>
                        {item.tx.value.msg[0].value.from_address}
                      </Tooltip>
                    </Fragment>
                  ) : (
                    'N/A'
                  )}
                </TableCol>
                <TableCol>
                  {item.tx.value.msg[0].value.to_address ? (
                    <Fragment>
                      <Link
                        to={`/addresses/${item.tx.value.msg[0].value.to_address}`}
                        id={`to_address_alpha${i}`}>
                        {item.tx.value.msg[0].value.to_address}
                      </Link>
                      <Tooltip
                        placement="right"
                        target={`to_address_alpha${i}`}>
                        {item.tx.value.msg[0].value.to_address}
                      </Tooltip>
                    </Fragment>
                  ) : (
                    'N/A'
                  )}
                </TableCol>
              </TableRow>
            ))}
          {!latestTxsLoading && !latestTxs && (
            <NoData colSpan={4} height={160} width={510} />
          )}
          {latestTxsLoading && (
            <TableLoader colSpan={4} height={160} width={510} />
          )}
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
