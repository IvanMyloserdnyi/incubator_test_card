import {createGlobalStyle} from "styled-components";


const GlobalStyles = createGlobalStyle`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    
    body {
        background-color: rgb(245, 245, 245);
    }
`
export default GlobalStyles