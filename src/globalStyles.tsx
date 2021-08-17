import { createGlobalStyle } from 'styled-components';

const vh = window.innerHeight / 100;

window.addEventListener('orientationchange', () => {
    window.location.reload();
})

const GlobalStyle = createGlobalStyle`
    :root {
        --primary-color: #72d583;
        /* --primary-color: #66CC66; */
        --white-shade: #f5f5f5;
        --white-shade: #f0f0f0;
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
        background-color: var(--white-shade);
    }

`;

export default GlobalStyle;