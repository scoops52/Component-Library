import React, { useState } from 'react';
import { ArrowLinkStyled } from './ArrowLink.styles';

export const ArrowLink = ({label}) => {
  const [ isActive, setIsActive ] = useState(false);
  return (
    <ArrowLinkStyled>{label}</ArrowLinkStyled>
  )
}

