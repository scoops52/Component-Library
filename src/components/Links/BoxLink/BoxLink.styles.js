import { NavLink } from "react-router-dom";
import styled from "styled-components";

const sharedStyles = `
    display: inline-block;
    position: relative;
    text-decoration: none;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 600;
    padding: 10px 20px;
    color: black;
    font-family: 'Source Sans Pro', sans-serif;
    cursor: pointer;

    &::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: black;
        transform: scaleX(0);
        transform-origin: top left;
        transition: transform 0.3s;
    }

    &::after {
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 3px;
        background-color: black;
        transform: scaleX(0);
        transform-origin: bottom right;
        transition: transform 0.3s;
    }



    &:hover:before, &:hover:after {
        transform: scaleX(1);
    }

`

export const BoxInnerContainer = styled.span`
    position: relative;
     display: inline-block;

    &::before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 3px;
        height: 100%;
        background-color: black;
        transform: scaleY(0);
        transform-origin: bottom left;
        transition: transform 0.3s;
    }

    &:after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        width: 3px;
        height: 100%;
        background-color: black;
        transform: scaleY(0);
        transform-origin: top right;
        transition: transform 0.3s;
    }

    &:hover::before, &:hover:after {
        transform: scaleY(1);
    }
`

export const BoxStyledNavLink = styled(NavLink)`
    ${sharedStyles}

    &.active {
        border: solid 3px black;
    }
`

export const BoxStyledLink = styled.a`
    ${sharedStyles}
`