import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({theme}) => theme.COLORS.INPUT_GRAY_200};
    color: ${({theme}) => theme.COLORS.BLUE_200};

    border-radius: 8px;

    > input {
        height: 4.8rem;
        width: 100%;
        padding: 1.6rem 1.4rem;

        font-size: 1.6rem;
        background-color: ${({theme}) => theme.COLORS.INPUT_GRAY_200};
        background: transparent;
        border: 0;
        color: ${({theme}) => theme.COLORS.BLUE_200};

        &::placeholder{
            color: ${({theme}) => theme.COLORS.BLUE_100};
        }
    }

`