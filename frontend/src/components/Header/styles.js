import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/DEVICE_BREAKPOINTS.js";

export const Container = styled.header`
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    background-color: ${({theme}) => theme.COLORS.BLUE_500};
    filter: drop-shadow(0 1px 2px #00000094);
>div {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    height: 8.5rem;
    margin: 0 auto;
    max-width: 100.7rem;
    @media (max-width:${DEVICE_BREAKPOINTS.LG}) {
        padding: 0 5.6rem;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.MD}) {
        padding: 0 7.6rem;
    }
    @media (max-width:${DEVICE_BREAKPOINTS.SM}) {
        padding: 0 2.3rem;
    }

    > small {
        > span{
            color: red;
        }
    }
    }   
   
`

export const Info = styled.div`

    display: flex;
    flex-direction: row;
    > button {
            background-color: transparent;
            border: none;
            color: ${({ theme }) => theme.COLORS.WHITE_200};    
            margin-left: 15px;   
         }
`


export const User = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    color: ${({ theme }) => theme.COLORS.WHITE_100};
    > small {
        color: ${({ theme }) => theme.COLORS.WHITE_200};
        font-size: 14px;

        display: flex;
        align-items: center;

        

        > svg {
            margin-right: 5px;
            border: ${({ theme }) => theme.COLORS.WHITE_200};
        }
    }
  
`
