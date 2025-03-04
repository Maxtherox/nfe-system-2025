import styled from "styled-components";

export const Container = styled.table`
  width: 100%;
  max-height: 80rem;
  border-collapse: collapse;
  margin-top: 1rem;
  margin-bottom: 10rem;

  overflow-y: auto;
  background-color: ${({theme}) => theme.COLORS.FORM_BACKGROUND_100};
  .editButton{
    button {
        width: 100%;
        color: white;
        background-color: #41D07B;
        border: 1px #41D07B solid;
        
        &:hover {
            background-color: none;
        }
      }
  }
  .deleteButton{
    button {
        width: 100%;
        color: white;
        background-color: #ad3131;
        border: 1px #ad3131 solid;
        
        &:hover {
            background-color: none;
        }
      }
    }
  filter: drop-shadow(0 1px 2px #0000004f);
  tbody tr:nth-child(even) {
    background-color: #f2f2f2;
  }
  > thead {
    background-color: ${({theme}) => theme.COLORS.BLUE_500};
    color: ${({theme}) => theme.COLORS.WHITE_100};
    
  }

`;

export const Th = styled.th`
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
  border: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
  max-width: 20rem; // Largura máxima para as células do cabeçalho
  white-space: nowrap; // Impede que o texto quebre para a próxima linha
  overflow: hidden; // Esconde o conteúdo que ultrapassar a largura máxima
  text-overflow: ellipsis; // Adiciona reticências (...) ao texto que ultrapassar a largura máxima
  &:first-child {
    border: none;
    border-top-left-radius: 8px;  // Borda superior esquerda arredondada
  }

  &:last-child {
    border: none;
    border-top-right-radius: 8px; // Borda superior direita arredondada
  }
`;

export const Td = styled.td`
  border-top: 1px solid #dddddd;
  border-bottom: 1px solid #dddddd;
  padding: 8px;
  text-align: left;
  max-width: 100px; // Largura máxima para as células de dados
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

`;
