import styled from "styled-components";

export const Container = styled.button`
    width: 15.2rem;
    height: 4.3rem;
    background: none;
    border-radius: 6px;
    color: ${({theme}) => theme.COLORS.BLUE_500};
    font-family: 'Poppins', sans-serif ;
    font-weight: bold;
    transition: 500ms;
    border: 1px solid ${({theme}) => theme.COLORS.BLUE_500};;
    &:hover{
        background-color: ${({theme}) => theme.COLORS.BLUE_500};
        color: ${({theme}) => theme.COLORS.WHITE_100};
        border: none;
    }
`