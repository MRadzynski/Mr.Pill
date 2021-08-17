import styled from 'styled-components';

export const FooterContainer = styled.footer`
    width: 100%;
    height: calc(var(--vh, 1vh) * 10);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    bottom: 0;
    background-color: var(--primary-color);
    box-shadow: 2px 0px 4px rgba(0,0,0,0.8);
`;