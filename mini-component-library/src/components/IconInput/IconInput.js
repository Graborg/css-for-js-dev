import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
  small: {
    fontSize: "14",
    iconSize: "13",
    height: "24",
    borderSize: "1"
  },
  large: {
    fontSize: "18",
    iconSize: "20",
    height: "36",
    borderSize: "2"
  }
}

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let styles = STYLES[size]
  return (
    <Wrapper> 
      <WrappedIcon id={icon} strokeWidth={styles.borderSize} size={styles.iconSize} />
      <VisuallyHidden> {label} </VisuallyHidden>
      <Input 
        placeholder={placeholder}
        style={{
          '--width': width + 'px',
          '--height': styles.height / 16 + 'rem',
          '--font-size': styles.fontSize / 16 + 'rem',
          '--border-size': styles.borderSize + "px",
        }}/>
    </Wrapper>
  )
};

let WrappedIcon = styled(Icon)`
  position: absolute;
  display: inline-block;
  bottom: 0;
  top: 0;
  margin: auto;
` 

let Input = styled.input`
  height: var(--height); 
  width: var(--width); 
  padding-left: var(--height); 
  border: none;
  border-bottom: solid var(--border-size) ${COLORS.black}; 
  outline-offset: 2px;
  font-size: var(--font-size);
  font-weight: 700;
  color: inherit;

  &::placeholder {
    font-weight: 400;
  }
`

let Wrapper = styled.div`
  position: relative;
  color: ${COLORS.gray500};

  &:hover {
    color: ${COLORS.black}
  }
`

export default IconInput;
