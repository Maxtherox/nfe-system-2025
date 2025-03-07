import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        

    }

    :root{
        font-size: 62.5%;
    }


    body{
        background-color: ${({theme}) => theme.COLORS.WHITE_100};
        color: ${({theme}) => theme.COLORS.BLUE_500};
        -webkit-font-smoothing: antialiased;
        
    }

    body, a, button {
        font-family: 'Poppins', sans-serif;
        font-size: 1.6rem;
        outline: none;
    }

    label, input, h1, h2, footer{
       font-family: 'Roboto', sans-serif;
    }
    
    a {
        text-decoration: none;
    }

    button, a {
        cursor: pointer;
        transition: filter 0.2s;
    }

    button:hover, a:hover {
        filter: brightness(0.9)
    }
    ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }
  
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: ${({theme}) => theme.COLORS.BLUE_100};
  }
`;