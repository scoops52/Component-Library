import styled from "styled-components";

export const SubmitButtonStyles = styled.button`
padding: 15px 40px;
    background: ${props => props.backgroundColor || "white"};
    border: 1px solid ${props => props.color|| 'black'};
    color: ${props => props.color|| 'black'};
    text-transform: uppercase;
    font-family: helvetica;
    font-size: 12px;
    letter-spacing: 3px;
    position: relative;
    transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
    display: block;
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, .3) 0px 19px 38px, rgba(0, 0, 0, .22) 0px 15px 12px;


    &:hover {
        padding: 15px 60px 15px 20px;

        &::before {
            opacity: 1;
            right: 15px;
        }
    }

    &::before {
        content: '';
        position: absolute;
        top: 50%;
        right: 0;
        opacity: 0;
        transform: rotate(-135deg) translateX(50%);
        width: 11px;
        height: 11px;
        background: transparent;
        border-left: 1px solid ${props => props.color|| 'black'};
        border-bottom: 1px solid ${props => props.color|| 'black'};
        margin-top: -1px;
        transition: all .4s cubic-bezier(0.645, 0.045, 0.355, 1);
    }

    &::after {
        width: 30px;
        height: 1px;
        background: ${props => props.backgroundColor || "white"};
        transform: translateX(3px);
        margin-top: 0px;
    }
`