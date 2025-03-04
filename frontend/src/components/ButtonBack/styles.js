import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
        display: flex;
        font-size: 24px;
        text-align: center;
        align-items: center;
        max-width: 14.5rem;
        color: ${({theme}) => theme.COLORS.BLUE_500};

        &:hover{
        filter: opacity(0.7);
        transform: scale(1.1);
    }
`