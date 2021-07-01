import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #72d583;
    }
    
    *{
        margin:0;
        padding:0;
    }

    html{
        box-sizing: border-box;
    }

    body{
        background-color: var(--primary-color);
    }

`;

export default GlobalStyle;