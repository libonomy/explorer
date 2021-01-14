import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { PopoverBody, Table } from 'reactstrap';
import { failIcon, successIcon, copyIcon } from 'src/assets/images';
import { IconText } from 'src/components';
import { getTransectionByHash } from 'src/redux/actions';
import colors from 'src/vars/colors';
import styled from 'styled-components';
import moment from 'moment';
import NumberFormat from 'react-number-format';
import copy from 'copy-to-clipboard';
import { Tooltip } from 'reactstrap';
import { TableLoader, TooltipContent } from 'src/components';
import { NoData } from 'src/components';
import { SCALE } from 'src/vars/scale';
const TableHeading = styled.th`
  width: 25%;
`;
const HeadingWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const TableCell = styled.td`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.67;
  letter-spacing: 0.36px;
`;
const TableRow = styled.tr``;
const TableBody = styled.tbody``;

const InfoIcon = styled.span`
  background: ${colors.primary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 12px;
  height: 16px;
  width: 16px;
  margin-right: 5px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const Text = styled.span`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.36px;
  text-align: left;
  ${({ success }) =>
    success ? `color:${colors.darkerGreen}` : `color:${colors.red}`}
`;

const Heading = styled.span`
  font-family: PoppinsMedium;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: 0.36px;
  text-align: left;
`;
const TooltipExp = styled(Tooltip)`
  .tooltip-inner {
    // background: ${colors.primary} !important;
    // color: ${colors.white};
    // font-family: PoppinsMedium;
    // font-size: 14px;
    // text-align: center;
    margin-left: 5px;
  }
  .tooltip .arrow::before {
    left: 5px;
    // color: #fff !importtant;
  }
  // .bs-tooltip-right .arrow::before, .bs-tooltip-auto[x-placement]
`;
const Overview = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransectionByHash(hash));
  }, [props.match.params]);

  const { hash } = props.match.params;
  const { tx, txLoading } = useSelector((state) => state.txs);
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <Table responsive>
      {tx && !txLoading && (
        <TableBody>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>Hash</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>
              {tx.txhash}

              <Icon
                id="lol"
                src={copyIcon}
                onClick={() => copy(tx.txhash)}
                alt="icon"
              />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>Height</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>{tx.height}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>Status</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>
              {tx.logs[0].success ? (
                <IconText>
                  <Icon src={successIcon}></Icon>
                  <Text success>success</Text>
                </IconText>
              ) : (
                <IconText>
                  <Icon src={failIcon}></Icon>
                  <Text success={false}>fail</Text>
                </IconText>
              )}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>Timestamp</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>
              {moment(tx.timestamp).fromNow()} (
              {new Date(tx.timestamp).toLocaleTimeString()}{' '}
              {new Date(tx.timestamp).toLocaleDateString()})
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>To</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>
              {tx.tx.value.msg[0].value.to_address}{' '}
              <Icon
                id="lol"
                src={copyIcon}
                onClick={() => copy(tx.tx.value.msg[0].value.to_address)}
                alt="icon"
              />
              <TooltipExp
                placement="right"
                target="lol"
                isOpen={tooltipOpen}
                toggle={toggle}>
                Copy
              </TooltipExp>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>From</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>
              {tx.tx.value.msg[0].value.from_address}{' '}
              <Icon id="lol" src={copyIcon} alt="icon" />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>Value</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>
              <NumberFormat
                value={tx.tx.value.msg[0].value.amount[0].amount / SCALE}
                displayType={'text'}
                thousandSeparator={true}
              />{' '}
              {tx.tx.value.msg[0].value.amount[0].denom}
            </TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>Gas Wanted</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>{tx.gas_wanted}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>Gas Used</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>{tx.gas_used}</TableCell>
          </TableRow>
          <TableRow>
            <TableHeading scope="row">
              <HeadingWraper>
                <InfoIcon>?</InfoIcon>
                <Heading>Memo</Heading>
              </HeadingWraper>
            </TableHeading>
            <TableCell>{tx.memo ? tx.memo : '""'}</TableCell>
          </TableRow>
        </TableBody>
      )}
      {!txLoading && !tx && <NoData colSpan={6} height={300} />}
      {txLoading && <TableLoader colSpan={6} height={300} />}
    </Table>
  );
};

export default withRouter(Overview);
