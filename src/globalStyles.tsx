import { createGlobalStyle } from 'styled-components';

const vh = window.innerHeight / 100;

window.addEventListener('orientationchange', () => {
    window.location.reload();
})

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #72d583;
        /* --primary-color: #66CC66; */
        --vh: ${vh}px;
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