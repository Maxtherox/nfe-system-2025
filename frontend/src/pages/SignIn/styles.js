import styled from "styled-components";

export const Container = styled.div`

    
    > div {
    display: flex;
    flex-direction: column;
    max-width: 42.6rem ;
    gap: 2.4rem;
    justify-content: center;
    margin: 25rem auto;

    > h1 {
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 4.8rem;       
    }

    > p {
        font-family: "Poppins", sans-serif;
        color: ${({theme}) => theme.COLORS.BLUE_100};
        font-weight: 400;
        font-size: 2.0rem;
    }

    > input {
        height: 4.8rem;
        width: 41.6rem;
        border-radius: 8px;
        padding: 1.6rem 1.4rem;
        border: 1px solid ${({theme}) => theme.COLORS.BLUE_500};
        &::placeholder{
            color: ${({theme}) => theme.COLORS.INPUT_GRAY_100};
        }
    }

    > button {
        height: 4.8rem;
        width: 41.6rem;
        background-color: ${({theme}) => theme.COLORS.BLUE_500};
        color: ${({theme}) => theme.COLORS.WHITE_100};
        border: none;
        border-radius: 5px;
        font-size: 14px;

    }
    }
`