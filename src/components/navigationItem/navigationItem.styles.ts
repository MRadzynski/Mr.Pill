import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavigationItemContainer = styled.div`
    width: 17%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
    background-color:var(--white-shade);
    aspect-ratio: 1 / 1;
    box-shadow: 0 4px 8px rgba(0,0,0,.25);
    -webkit-tap-highlight-color: transparent;
`;

export const NavigationItemLink = styled(Link)`
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
    justify-content:center;
    border-radius: 50%;
    background-color:var(--white-shade);

    &:hover{
        background-color: rgba(255,255,255,0.9);
    }
`;