import { NavLink } from 'react-router-dom';
import styled from 'styled-components';



    

export const ArrowLinkStyled = styled.a`
display: inline-block;
position: relative;
margin-top: 15px;
font-size: 1.25rem;
color: gray;
text-decoration: none;
transform-origin: 50% 50%;
transform: scale(1);
transition: all 0.1s cubic-bezier(0.49, 0.99, 0.54, 0.98);
cursor: pointer;

&:hover {
  color: #70757c;
  transition: all 0.1s cubic-bezier(0.49, 0.99, 0.54, 0.98);
}

&:hover:before {
  opacity: 1;
  transform: translateX(4px);
  transition: all 0.1s cubic-bezier(0.49, 0.99, 0.54, 0.98) 0.1s;
}

&:hover:after {
  transform: scaleX(0);
  transition: all 0.1s cubic-bezier(0.49, 0.99, 0.54, 0.98);
}

&:before {
  display: inline-block;
  content: '\\2192';
  opacity: 0;
  position: absolute;
  top: 5px;
  right: -15px;
  font-size: 14px;
  line-height: 14px;
  border-radius: 50%;
  transition-delay: 0.2s;
  transform: translateX(0);
  transition: all 0.1s cubic-bezier(0.49, 0.99, 0.54, 0.98);
}

&:after {
  background: #8a8f95;
  content: '';
  display: block;
  height: 1px;
  margin-top: -2px;
  width: 100%;
  z-index: 0;
  transform-origin: 100% 0;
  transform: scaleX(1);
  transition: all 0.1s cubic-bezier(0.49, 0.99, 0.54, 0.98) 0.1s;
}
`


