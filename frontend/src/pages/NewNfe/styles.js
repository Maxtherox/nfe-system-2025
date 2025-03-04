import styled from "styled-components";

export const Container = styled.div`

> main {
    width: 100.7rem;
    margin: 0 auto;
    margin-top: 2rem;
   > form {
    position: relative;
    display: flex;
    flex-direction: column;
    padding: 4.8rem;
    margin-top: 2rem;
    border-radius: 10px;
    justify-content: center;
    align-items: flex-end;
    filter: drop-shadow(1px 2px 3px #0000004f);
    background-color: ${({theme}) => theme.COLORS.FORM_BACKGROUND_100};
    > button {
        position: relative;
        width: 419px;
        height: 64px;
    }

    fieldset {
        border: none;

        gap: 3rem;
        select {
                height: 4.8rem;
                width: 100%;
                background-color: ${({theme}) => theme.COLORS.INPUT_GRAY_200};
                color: ${({theme}) => theme.COLORS.BLUE_200};
                border: none;
                border-radius: 8px;
                padding: 1.6rem 1.4rem;
            }
            .productDescription{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
        }
        .operationType{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            
        }

        > h2 {
            margin-bottom: 25px;
            font-size: 32px;
            font-weight: 400;
        }
        > section {
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            gap: 20px;
            margin-bottom: 28px;
             div {

            }
        }
        
    }
    
 } 
}
 
  
 
`