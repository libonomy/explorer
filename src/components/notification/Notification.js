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
const Link = styled.a`
  padding: 0px 6px;
`;
const Notification = () => {
  const [visible, setVisible] = useState(true);
  const onDismiss = () => setVisible(false);
  return (
    <CustomAlert color="info" isOpen={visible} toggle={() => onDismiss()}>
      <Heading className="alert-heading">
        Important: Explorer is currently under maintenance, you might face some
        service issues until our next upgrade is released.
      </Heading>
      <List>
        {/* <ListItem>
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
          The explorer is currently operating with minimal functionalities, new
          features will be made available as soon as they are ready for public
          release. For latest updates join our{' '}
          <a href="https://discord.gg/6P9SX5c">Community Group</a>
        </ListItem> */}
        <ListItem>
          If you have any questions feel free to contact us on our Community
          Group
          <Link href="https://discord.com/invite/6P9SX5c">Community Group</Link>
        </ListItem>
      </List>
    </CustomAlert>
  );
};

export default Notification;
