import styled from "styled-components";

export const Container = styled.footer`
display: flex;
justify-content: center;
position: fixed;
z-index: -1;
bottom: 0;
right: 0;
left: 0;
margin-bottom: 2.0rem;
opacity: 30%;
font-family: 'Roboto' sans-serif;
font-size: 14px;
font-weight: bold;

color: ${({theme}) => theme.COLORS.BLUE_100};
`