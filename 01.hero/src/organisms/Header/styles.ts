import styled from "styled-components";
import { BiRightArrowAlt } from 'react-icons/bi';

export const IconContainer = styled.img`
    margin-left: 10px ;
`

export const IconButton = styled(BiRightArrowAlt)`
    color: white;
    margin-left:5px;
    width:32px ;
    height: 32px ;
    background-color: #AD1642;
    border-radius:3px ;
`

export const Box = styled.header`
    margin-top:30px;
    height: 42px;
    display:flex;
    flex-direction: row ;
    justify-content: space-between ;
`

export const ButtonCTA = styled.button`
    background-color: #F43253;
    border-radius: 5px;
    height: 56px;
    padding-left:25px;
    padding-right: 8px;
    color: white;
    cursor: pointer;
    font-size:16px;

    display: inline-flex;
    align-items:  center;
    overflow: hidden;

    &:hover {
        background-color: #E41F41;
    }

`
