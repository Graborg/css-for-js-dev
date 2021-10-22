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
    <Wrapper> 
      <WrappedIcon id={icon} strokeWidth={borderSize} size={iconSize} />
      <Label for="IconInputId">{ label }</Label>
      <Input 
        borderSize={borderSize} 
        width={width} 
        height={height} 
        style={{'--font-size': (fontSize / 16) + "rem"}} 
        id="IconInputId" 
        iconSize={iconSize} 
        placeholder={placeholder}/>
    </Wrapper>
  )
};

let Label = styled.label`
  display: none;
`

let WrappedIcon = styled(Icon)`
  display: inline-block;
  bottom: 0;
  top: 0;
  margin: auto;
` 

let Input = styled.input`
  padding-left: calc(${p => p.iconSize}px / 0.7);
  height: ${p => p.height}px;
  width: ${p => p.width}px;
  border: none;
  border-bottom: ${p => p.borderSize}px solid black; 
  outline-offset: 2px;
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;
  background-color: transparent; 

  &::placeholder {
    font-weight: 400;
  }
`

let Wrapper = styled.div`
  position: relative;
  display: block;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black}
  }
`

export default IconInput;
