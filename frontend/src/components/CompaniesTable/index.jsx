import { Button } from "../Button";
import { Container, Td, Th } from "./styles";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function CompaniesTable ({companies}){
  const [mostrarMais, setMostrarMais] = useState(10);
  const {user} = useAuth();

  const navigate = useNavigate();

  const handleMostrarMais = () => {
    setMostrarMais((prev) => prev + 10);
  };
  const handleExcluirProduto = async (companieId) => {
    // Alerta de confirmação
    const confirmacao = window.confirm("Tem certeza que deseja excluir esta empresa?");

    if (confirmacao) {
      try {
        // Chame a função de exclusão do serviço/API passando o productId
        await api.delete(`/companies/${companieId}`);
        alert("Empresa excluída com sucesso!");
        window.location.reload()
        // Atualize a lista de produtos após a exclusão, se necessário
      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
        alert("Erro ao excluir o produto. Verifique o console para mais detalhes.");
      }
    }
  };
    return(
      <Container>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>CNPJ</Th>
          <Th>CPF</Th>
          <Th>AUTH</Th>
          <Th>CITY</Th>
          <Th>ADDRESS</Th>
          <Th>CEP</Th>
          <Th>Ação</Th>
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody>
        {companies && companies.slice(0, mostrarMais).map((companie) => (
          <tr key={companie.id}>
            <Td>{companie.id}</Td>
            <Td>{companie.cnpj}</Td>
            <Td>{companie.cpf}</Td>
            <Td>{companie.auth}</Td>
            <Td>{companie.city}</Td>
            <Td>{companie.address}</Td>
            <Td>{companie.cep}</Td>
            <Td className="editButton"><Button title="Editar" onClick={() => navigate(`/editcompanies/${companie.id}`)}/></Td>
            <Td className="deleteButton"><Button  title="Excluir" onClick={() => handleExcluirProduto(companie.id)} /></Td>      
          </tr>
        ))}
      </tbody>
      {companies && companies.length > mostrarMais && (
        <tfoot>
          <tr>
            <Td colSpan="7" style={{ textAlign: "center" }}>
            <Button onClick={handleMostrarMais} title={"Mostrar Mais"}></Button>
            </Td>
          </tr>
        </tfoot>
      )}
    </Container>
    )
}