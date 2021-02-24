import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Table } from 'reactstrap';
import { failIcon, successIcon } from 'src/assets/images';
import { IconText } from 'src/components';
import { Link } from 'react-router-dom';
import { getTransectionByHash } from 'src/redux/actions';
import colors from 'src/vars/colors';
import styled from 'styled-components';
import moment from 'moment';
import NumberFormat from 'react-number-format';
// import { Tooltip } from 'reactstrap';
import { TableLoader, Copy } from 'src/components';
import { NoData } from 'src/components';
import { SCALE } from 'src/vars/scale';
import { SYMBOL_REGEX } from 'src/vars/regex';
import { UncontrolledTooltip } from 'reactstrap';
const TableHeading = styled.th`
  width: 25%;
`;
const HeadingWraper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const Tooltip = styled(UncontrolledTooltip)`
  .tooltip-inner {
    font-size: 12px !important;
    font-family: PoppinsRegular;
    background-color: #000;
  }
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
  ${({ uppercase }) => uppercase && `text-transform: uppercase;`};
  ${({ success }) =>
    success && success
      ? `color:${colors.darkerGreen}`
      : success === false
      ? `color:${colors.red}`
      : 'color: default'};
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
const Wrapper = styled.div`
  display: flex;
`;
const TextNumber = styled.span`
  background: ${colors.chipColor};

  border-radius: 5px;
  padding: 4px 11px;
  font-family: PoppinsMedium;
  color: #000;
  &:hover {
    color: #fff;
    background: ${colors.primary};
  }
`;
const LinkExp = styled(Link)`
  text-decoration: none !important;
  color: #212529;
  font-family: PoppinsRegular;
  :hover {
    color: #212529;
  }
`;
const Overview = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTransectionByHash(hash));
  }, [props.match.params]);

  const { hash } = props.match.params;
  const { tx, txLoading } = useSelector((state) => state.txs);
  return (
    <Table responsive>
      <TableBody>
        {tx && tx.data == null ? (
          <NoData colSpan={1} height={425} />
        ) : (
          <>
            {tx && !txLoading && (
              <>
                <TableRow>
                  <TableHeading scope="row">
                    <HeadingWraper>
                      <InfoIcon>?</InfoIcon>
                      <Heading>Hash</Heading>
                    </HeadingWraper>
                  </TableHeading>
                  <TableCell>
                    <Wrapper>
                      {tx.data.txhash}
                      <Copy id="txhash-copy" value={tx.data.txhash} />
                    </Wrapper>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeading scope="row">
                    <HeadingWraper>
                      <InfoIcon>?</InfoIcon>
                      <Heading>Height</Heading>
                    </HeadingWraper>
                  </TableHeading>
                  <TableCell>
                    <LinkExp to={`/blocks/${tx.data.height}`} id={`txheight`}>
                      <TextNumber> {tx.data.height}</TextNumber>
                    </LinkExp>
                  </TableCell>
                  <Tooltip
                    placement="right"
                    target={`txheight`}
                    arrowClassName="disabled">
                    view blocks by height
                  </Tooltip>
                </TableRow>
                <TableRow>
                  <TableHeading scope="row">
                    <HeadingWraper>
                      <InfoIcon>?</InfoIcon>
                      <Heading>Status</Heading>
                    </HeadingWraper>
                  </TableHeading>
                  <TableCell>
                    {tx.data.logs && tx.data.logs[0].success ? (
                      <IconText>
                        <Icon src={successIcon}></Icon>
                        <Text success={true}>success</Text>
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
                    {moment(tx.data.timestamp).fromNow()} (
                    {new Date(tx.data.timestamp).toUTCString()})
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
                    <LinkExp
                      to={`/addresses/${tx.data.tx.value.msg[0].value.from_address}`}>
                      <Wrapper>
                        {tx.data.tx.value.msg[0].value.from_address}{' '}
                        <Copy
                          id="from_address-copy"
                          value={tx.data.tx.value.msg[0].value.from_address}
                        />
                      </Wrapper>
                    </LinkExp>
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
                    <LinkExp
                      to={`/addresses/${tx.data.tx.value.msg[0].value.to_address}`}>
                      <Wrapper>
                        {tx.data.tx.value.msg[0].value.to_address}{' '}
                        <Copy
                          id="to_address-copy"
                          value={tx.data.tx.value.msg[0].value.to_address}
                        />
                      </Wrapper>
                    </LinkExp>
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
                      value={
                        tx.data.tx.value.msg[0].value.amount[0].amount / SCALE
                      }
                      displayType={'text'}
                      thousandSeparator={true}
                    />{' '}
                    <Text uppercase>
                      {tx.data.tx.value.msg[0].value.amount[0].denom.replace(
                        SYMBOL_REGEX,
                        ''
                      )}
                    </Text>
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableHeading scope="row">
                    <HeadingWraper>
                      <InfoIcon>?</InfoIcon>
                      <Heading>Gas Wanted</Heading>
                    </HeadingWraper>
                  </TableHeading>
                  <TableCell>{tx.data.gas_wanted}</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeading scope="row">
                    <HeadingWraper>
                      <InfoIcon>?</InfoIcon>
                      <Heading>Gas Used</Heading>
                    </HeadingWraper>
                  </TableHeading>
                  <TableCell>{tx.data.gas_used}</TableCell>
                </TableRow>
                <TableRow>
                  <TableHeading scope="row">
                    <HeadingWraper>
                      <InfoIcon>?</InfoIcon>
                      <Heading>Memo</Heading>
                    </HeadingWraper>
                  </TableHeading>
                  <TableCell>
                    {tx.data.tx.value.memo ? tx.data.tx.value.memo : '""'}
                  </TableCell>
                </TableRow>
              </>
            )}
            {!txLoading && !tx && <NoData colSpan={6} height={425} />}
            {txLoading && <TableLoader colSpan={6} height={425} />}
          </>
        )}
      </TableBody>
    </Table>
  );
};

export default withRouter(Overview);
