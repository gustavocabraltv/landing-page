import {createGlobalStyle} from "styled-components"

const globalStyle = createGlobalStyle`

*{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;

}
html, body, #root { 
    height: 100%;
}
body { 
    background-color: #F8FDFF;
}
button {
    background: none;
    border:none;
    outline:none;

}

a { 
    text-decoration: none;
    outline: none;
}




h1 { 
    font-size:42px ;
    text-align: center;
}
p {
    text-align: center;
    font-weight:300 ;
    color: gray;
}

`

export default globalStyle;