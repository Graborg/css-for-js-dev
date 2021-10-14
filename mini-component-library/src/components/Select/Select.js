import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper> 
      <HiddenSelect value={value} onChange={onChange}>
        {children}
      </HiddenSelect>
      <VisualSelect>
        <Value> { displayedValue }</Value>
        <ChevronDown strokeWidth="2" size="22" id="chevron-down" />
      </VisualSelect>
    </Wrapper>
  );
};

let ChevronDown = styled(Icon)`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
`
let Value = styled.p`
  width: fit-content;
  font-size: 16px;
  line-height:19px;
`

let HiddenSelect = styled.select`
  border: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`
let VisualSelect = styled.div`
  position: relative; 
  padding: 12px;
  padding-right: 52px;
  pointer-events: none;
  color: ${COLORS.gray700}; 
  background-color: ${COLORS.transparentGray15};
  border-radius: 8px;

  ${HiddenSelect}:hover + & {
    color: black;
  }

  ${HiddenSelect}:focus + & {
    outline: 2px solid #4374CB;
    border-radius: 3px;
  }
`

let Wrapper = styled.div`
  position: relative;
  width: fit-content;
`

export default Select;
