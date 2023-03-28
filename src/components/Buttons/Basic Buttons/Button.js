import React from 'react';
import { ButtonStyles } from './Button.styles';

const Button = ({backgroundColor, onHoverBackgroundColor, label, ...props }) => {
  return (
    <ButtonStyles backgroundColor={backgroundColor} onHoverBackgroundColor={onHoverBackgroundColor} {...props}>{label}</ButtonStyles>
  )
}

export default Button