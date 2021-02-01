import React, { useEffect, useState } from 'react';
import { copyIcon } from 'src/assets/images';
import styled from 'styled-components';
import { UncontrolledTooltip } from 'reactstrap';
import copy from 'copy-to-clipboard';

const Icon = styled.img`
  cursor: pointer;
`;
const Wrapper = styled.div`
  margin-left: 4px;
`;
const CopyText = styled.span`
font-family: PoppinsMedium;
font-size: 12px;
font-weight: 500;
font-stretch: normal;
position: absolute;
font-style: normal;
line-height: 2;
letter-spacing: 0.36px;
text-align: left;
margin: -6px 8px 0px 20px;
} 
  
`;

const Copy = ({ id, value }) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    show &&
      setTimeout(() => {
        setShow(false);
      }, 1000);
  }, [show]);

  return (
    <Wrapper onClick={() => copy(value)}>
      <Icon onClick={() => setShow(true)} id={id} src={copyIcon} alt="icon" />{' '}
      {show && <CopyText>Copied</CopyText>}
      <UncontrolledTooltip placement="bottom" target={id}>
        Copy to clipboard
      </UncontrolledTooltip>
    </Wrapper>
  );
};

export default Copy;
