import styled from "styled-components";

export const ButtonStyles = styled.button`
    color: #fff;
    border-radius: 8px;
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    font-size: 1.2rem;
    font-weight: bold;
    background-color: ${props => props.backgroundColor || '#007bff'};
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
    transition: 0.3s ease-in-out;
    margin: 0.5rem;
  
    &:hover {
      background-color: ${props => props.onHoverBackgroundColor || '#0062cc'};
      transform: scale(1.03);
    }
`