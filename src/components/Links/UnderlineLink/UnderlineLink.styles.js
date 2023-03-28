import { NavLink } from "react-router-dom";
import styled, {css} from "styled-components";


const sharedStyles = css`
    background-image: linear-gradient(
      to right,
      grey,
      grey 50%,
      black 50%
    );
    background-size: 200% 100%;
    background-position: -100%;
    display: inline-block;
    padding: 0px 0;
    position: relative;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    transition: all 0.3s ease-in-out;
    cursor: pointer;

    &:before{
    content: '';
    background: grey;
    display: block;
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 0;
    height: 1px;
    transition: all 0.3s ease-in-out;
    }

    &:hover {
    background-position: 0;
    }

    &:hover::before{
    width: 100%;
    }
`

const activeStyles = css`
    color: grey;
    text-decoration: underline;
`

export const UnderlineLinkStyled = styled.a`
       ${sharedStyles}
`

export const UnderlineNavLinkStyled = styled(NavLink)`
       ${props => props.activeClassName === 'active' ? activeStyles : sharedStyles}
`

