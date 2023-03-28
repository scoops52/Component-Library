import React from 'react';
import { SubmitButtonStyles } from './SubmitButton.styles';

const SubmitButton = ({backgrondColor, color, label, ...props}) => {
  return (
    <SubmitButtonStyles backgrondColor={backgrondColor} color={color} {...props}>{label}</SubmitButtonStyles>
  )
}

export default SubmitButton