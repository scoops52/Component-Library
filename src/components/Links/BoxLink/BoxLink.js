import React from 'react'
import { BoxInnerContainer, BoxStyledLink, BoxStyledNavLink } from './BoxLink.styles'

const BoxLink = ({label, as, active }) => {
  return (
    <BoxInnerContainer>
      {as === 'NavLink' && <BoxStyledNavLink as={as} className={active ? 'active' : ''}>{label}</BoxStyledNavLink> }
        {as !== 'NavLink' && <BoxStyledLink as={as}>{label}</BoxStyledLink>}
    </BoxInnerContainer>
  )
}

export default BoxLink

