import React from 'react'
import { UnderlineLinkStyled, UnderlineNavLinkStyled } from './UnderlineLink.styles'

export const UnderlineLink = ({ label, isActive, as }) => {
  return (
    <>
      {as !== 'NavLink' && <UnderlineLinkStyled as={as} >{label}</UnderlineLinkStyled>}
      {as === 'NavLink' && <UnderlineNavLinkStyled as={as} activeClassName={isActive ? 'active' : ''}>{label}</UnderlineNavLinkStyled>}
    </>
  )
}
