import styled from "styled-components";

export const Container = styled.div`
    height: 100vh;
    overflow-y: hidden;
    
    > main {
        height: 100vh;
        max-width: 1057px;
        max-height: 100vh;
        overflow-y: scroll;
        margin: 0 auto;
        padding-bottom: 20px;
        padding: 0 20px;
        
        > span {

            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-top: 30px;
        }

    }
`