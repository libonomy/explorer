import React, { useState, useEffect } from 'react';
import { Tooltip, UncontrolledTooltip } from 'reactstrap';
import { copyIcon } from 'src/assets/images';
import styled from 'styled-components';
const Icon = styled.img`
  margin-right: 5px;
`;
const TooltipContent = () => {
  const [tooltipOpen, setTooltipOpen] = useState(false);

  const toggle = () => setTooltipOpen(!tooltipOpen);
  return (
    <div>
      <Tooltip placement="right" isOpen={tooltipOpen} toggle={toggle}>
        Hello world!
      </Tooltip>
    </div>
  );
};

export default TooltipContent;
