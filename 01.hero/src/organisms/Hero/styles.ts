import styled from "styled-components";
import { BiRightArrowAlt } from 'react-icons/bi';

export const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center ;

justify-content: space-between;
padding-top: 150px;
`
export const Input = styled.input`
    border: 0;
    outline: none ;

`

export const ContainerInput = styled.div`
border: solid lightgray .5px;
padding: 10px 15px;   
border-radius: 5px;

&:hover{
    border: solid red .5px;
    
}
`