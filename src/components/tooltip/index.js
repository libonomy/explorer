import React, { useEffect, useState } from 'react';
import { copyIcon } from 'src/assets/images';
import styled from 'styled-components';
import { Tooltip } from 'reactstrap';
const Icon = styled.img`
  margin-right: 5px;
`;
const Wrapper = styled.div`
  margin-left: 4px;
`;
const CopyText = styled.span`
  font-family: PoppinsMedium;
  font-size: 12px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.83;
  letter-spacing: 0.36px;
  text-align: left;
`;
const TooltipExp = styled(Tooltip)``;
const TransactionText = styled.div``;
const ToolTipExp = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);
  const [show, setShow] = useState(false);
  const toggle = () => setTooltipOpen(!tooltipOpen);
  useEffect(() => {
    show &&
      setTimeout(() => {
        setShow(false);
      }, 1000);
  }, [show]);
  return (
    <Wrapper>
      <TransactionText>
        <Icon
          onClick={() => setShow(true)}
          id="copy-icon"
          src={copyIcon}
          alt="icon"
        />{' '}
        {show && <CopyText>Copied</CopyText>}
      </TransactionText>

      <TooltipExp
        placement="top"
        target="copy-icon"
        isOpen={tooltipOpen}
        toggle={toggle}>
        Copy
      </TooltipExp>
    </Wrapper>
  );
};

export default ToolTipExp;
