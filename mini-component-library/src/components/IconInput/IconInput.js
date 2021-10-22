import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let fontSize = size === "small" ? "14" : "18"
  let iconSize = size === "small" ? "13" : "20"
  let height = size === "small" ? "24" : "36"
  let borderSize = size === "small" ? "1" : "2"

  return (
  <Wrapper height={height} width={width} borderSize={borderSize}>
    <WrappedIcon id={icon} strokeWidth={borderSize} size={iconSize} />
    <Label for="IconInputId">{ label }</Label>
    <Input style={{'--font-size': fontSize + "px"}} id="IconInputId" iconSize={iconSize} placeholder={placeholder}/>
  </Wrapper>
  )
};

let Label = styled.label`
  display: none;
`

let WrappedIcon = styled(Icon)`
  display: inline-block;
  position:absolute;
  bottom: 0;
  top: 0;
  margin: auto;
  color: ${COLORS.gray700};
` 

let Input = styled.input`
  position: absolute;
  padding-left: calc(${p => p.iconSize}px / 0.7);
  bottom: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border: none;

  font-size: var(--font-size);
  outline: none;
  margin-top: auto;
  margin-bottom: auto;
  color: ${COLORS.gray500};
  background-color: transparent; 
  &:not(:placeholder-shown) {
    font-weight: 700;
  }

  &:not(:placeholder-shown):hover {
    color: ${COLORS.black}
  }
`

let Wrapper = styled.div`
  border-bottom: ${p => p.borderSize}px solid black; 
  position: relative;
  height: ${p => p.height}px;
  width: ${p => p.width}px;
`

export default IconInput;
