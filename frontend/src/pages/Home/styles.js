import styled from "styled-components";
import background from "../../assets/backgroud.png"
import { DEVICE_BREAKPOINTS } from "../../styles/DEVICE_BREAKPOINTS.js";

export const Container = styled.div`
    height: 100vh;
    background: rgba(255, 255, 255, 0.5) url(${background}) no-repeat center center fixed; 
    background-size: contain; // ou "contain", dependendo do efeito desejado
    background-position: center; // ou outras posições

    > main {  
        max-width: 100.7rem;
        display: flex;
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        margin: 0 auto;
        margin-top: 20rem;
        overflow-x: auto;
        overflow-y: auto;

        @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
        gap: 1.5rem;
        justify-content: center;
        align-items: center;
        margin: 0 4rem;
        margin-top: 20rem;
        }
        @media (max-width:${DEVICE_BREAKPOINTS.MD}) {  
            display: flex;
            flex-direction: column;
            margin-top: 5rem;
            padding-bottom: 6rem;
        }

    }


`