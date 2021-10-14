/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const ProgressBar = ({ value, size }) => {
  let height;
  if (size === "large") {
    height = "16px";
  } else if (size === "medium") {
    height = "12px";
  } else {
    height = "8px";
  }
  return (
      <Wrapper size={size}> 
        <Bar role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-valuenow={value} value={value} height={height}/> 
      </Wrapper>
  );
};


let Wrapper = styled.div`
  background-color: ${COLORS.transparentGray15};
  box-shadow: inset 0px 2px 4px rgba(128, 128, 128, 0.35);
  border-radius: 8px;
  padding: ${p => p.size === "large" && "4px"};
`

let Bar = styled.div`
  --border-rad: ${p => p.value > 99 && (p.value - 99) * 4}px;
  height: ${p => p.height};
  background-color: ${COLORS.primary};
  border-radius: 4px var(--border-rad) var(--border-rad) 4px;

  width: ${p => p.value}%;
`

export default ProgressBar;
