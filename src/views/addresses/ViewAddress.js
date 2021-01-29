import React, { useEffect } from 'react';
import { PageContainer } from 'src/components';
import styled from 'styled-components';
import colors from 'src/vars/colors';
import { AddressInfo, TabsSection } from './components';
import { Alert } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getAccountDetails } from 'src/redux/actions';
import { Copy } from 'src/components';
import { withRouter } from 'react-router-dom';
const containerStyles = { paddingTop: 0, boxShadow: 'none' };

// const SubHeading = styled.h6`
//   color: ${colors.black10Alpha};
//   font-family: PoppinsMedium;
//   font-size: 15px;
//   font-weight: normal;
//   font-stretch: normal;
//   font-style: normal;
//   line-height: 1.33;
//   margin-bottom: 10px;
//   display: flex;
// `;
const SubHeading = styled(Alert)`
  color: ${colors.black10Alpha};
  border: 1px solid #dddcdc;
  background-color: #dddcdc;
  font-family: PoppinsMedium;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.6;
  display: flex;
  height: 32px;
  width: 420px;
  @media (max-width: 576px) {
    width: auto;
    font-size: 2.5vw;
  }
`;
const ViewAddress = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAccountDetails(address));
  }, [props.location.addresses]);

  const { address } = props.match.params;

  return (
    <PageContainer bg="transparent" heading="Address" style={containerStyles}>
      {/* <SubHeading address>
        0x97bb222FC501a01FFDBC52c8C1652981408a6A68
        <Copy
          id="address-copy"
          value={'0x97bb222fc501a01ffdbc52c8c1652981408a6a68'}
        />
      </SubHeading> */}
      <SubHeading address>
        {address}
        <Copy id="address-copy" value={address} />
      </SubHeading>
      <AddressInfo />
      <TabsSection />
    </PageContainer>
  );
};

export default withRouter(ViewAddress);
