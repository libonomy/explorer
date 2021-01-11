import React, { useState } from 'react';
import { Alert } from 'reactstrap';
import styled from 'styled-components';

const List = styled.ul``;

const CustomAlert = styled(Alert)`
  margin-bottom: 0;
`;

const Heading = styled.h6`
  font-family: PoppinsMedium;
  font-size: 15px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  letter-spacing: 0.54px;
  padding: 5px 0px;
`;
const ListItem = styled.li`
  font-family: PoppinsRegular;
  font-size: 12px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
`;
const Notification = () => {
  const [visible, setVisible] = useState(true);
  console.log(visible);
  const onDismiss = () => setVisible(false);
  return (
    <CustomAlert color="info" isOpen={visible} toggle={() => onDismiss()}>
      <Heading className="alert-heading">Information !</Heading>
      <List>
        <ListItem>
          Please be informed that Libocoin (LBY) is in the public offering stage
          at the moment. As there are not many blockchain transactions during
          the offering stage, there will be less activity on Libonomy Explorer.
          The explorer will go through many improvements, to stay up to date,
          subscribe to our newsletter:{' '}
          <a href="https://libonomy.com/overview#news-subscription">
            Subscribe Now{' '}
          </a>
        </ListItem>
        <ListItem>
          The explorer is currently under heavy improvements; in case of any
          issues feel free to contact us on our{' '}
          <a href="https://discord.gg/6P9SX5c">Community Group</a>
        </ListItem>
      </List>
    </CustomAlert>
  );
};

export default Notification;
