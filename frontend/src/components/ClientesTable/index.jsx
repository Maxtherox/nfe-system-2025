import { Button } from "../Button";
import { Container, Td, Th } from "./styles";
import { useState, useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

export function ClientesTable ({clientes}){
  const {user} = useAuth();
  const navigate = useNavigate();

  const [mostrarMais, setMostrarMais] = useState(10);

  const handleMostrarMais = () => {
    setMostrarMais((prev) => prev + 10);
  };

  const handleExcluirCliente = async (clientId) => {

    const confirmacao = window.confirm("Tem certeza que deseja excluir este produto?");

    if (confirmacao) {
      try {

        await api.delete(`/clients/${clientId}`);
        alert("Produto excluído com sucesso!");
        window.location.reload()

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
          <Th>NOME</Th>
          <Th>Email</Th>
          <Th>CIDADE</Th>
          <Th>ENDEREÇO</Th>
          <Th>FONE</Th>
          <Th>Ação</Th>
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody>
        {clientes.slice(0, mostrarMais).map((cliente) => (
          <tr key={cliente.id}>
            <Td>{cliente.id}</Td>
            <Td>{cliente.name}</Td>
            <Td>{cliente.email}</Td>
            <Td>{cliente.city}</Td>
            <Td>{cliente.address}</Td>
            <Td>{cliente.phone}</Td>
            <Td className="editButton"><Button title="Editar" onClick={() => navigate(`/editclients/${cliente.id}`)} /></Td>
            <Td className="deleteButton"><Button  title="Excluir" onClick={() => handleExcluirCliente(cliente.id)} /></Td>    
          </tr>
        ))}
      </tbody>
      {clientes.length > mostrarMais && (
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