import styled from "styled-components";

export const IconContainer = styled.img`
    margin-left: 10px;
    width:30px ;
`
export const ButtonCTA = styled.button`


    background-color: #F43253;
    border-radius: 5px;
    height: 45px;
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
export const InputText = styled.input`

    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: lightgra;
    opacity: 1; /* Firefox */
    }

    outline: none;
    border: none;
    width:220px ;
`

export const InputContainer = styled.div`
   
 
    margin-bottom: 100px;
    width: 467px;
    height:61px ;
    background-color: white;
    padding: 10px 10px 10px 20px;
    border-radius: 5px;
    border: lightgray .5px solid;

    display:flex;
    justify-content: space-between;
    align-items: center;

    &:hover {
        border: gray .5px solid;

    }

    :focus-within {
        border: 1px black solid;
    }

`

