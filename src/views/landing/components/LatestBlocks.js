import React, { useEffect } from 'react';
import { Table } from 'reactstrap';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { useDispatch, useSelector } from 'react-redux';
import { getAllBlocks, getAllTransactions } from 'src/redux/actions';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { blockIcon } from 'src/assets/images';
import { IconText } from 'src/components';

const Wrapper = styled.div`
  overflow-y: auto;
  background: ${colors.white};
  border-radius: 10px;
  box-shadow: ${colors.shaddow};
  @media (max-width: 768px) {
    margin-bottom: 2rem;
  }
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
  padding: 5px 0px;
`;

const Icon = styled.img`
  margin-right: 5px;
`;

const LatestBlocks = () => {
  const dispatch = useDispatch();

  const { latestBlocks, latestBlocksLoading } = useSelector(
    (state) => state.blocks
  );

  useEffect(() => {
    dispatch(getAllBlocks(218172, 218176));
  }, []);

  return (
    <Wrapper>
      <Header>Latest Blocks</Header>
      <Table hover>
        <TableHeader>
          <TableRow>
            <TableHeading>Height</TableHeading>
            <TableHeading>Age</TableHeading>
            <TableHeading>Txs</TableHeading>
            <TableHeading>Miner</TableHeading>
            <TableHeading>Reward</TableHeading>
          </TableRow>
        </TableHeader>
        <TableBody>
          {latestBlocks &&
            latestBlocks.result.block_metas.map((item, index) => (
              <TableRow key={index}>
                <TableCol>
                  <IconText>
                    <Icon src={blockIcon} />
                    <Link to={`/blocks/${item.header.height}`}>
                      {item.header.height}
                    </Link>
                  </IconText>
                </TableCol>
                <TableCol>
                  {moment(item.header.time, 'YYYYMMDD').fromNow()}
                </TableCol>
                <TableCol>{item.header.num_txs}</TableCol>
                <TableCol>{item.header.num_txs}</TableCol>
                <TableCol>{item.header.num_txs}</TableCol>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

export default LatestBlocks;
