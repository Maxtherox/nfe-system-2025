import { Button } from "../Button";
import { Container, Td, Th } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

export function NfesTable({ nfes, clientes, produtos }) {
  const [mostrarMais, setMostrarMais] = useState(10);
  const navigate = useNavigate();
  const handleMostrarMais = () => {
    setMostrarMais((prev) => prev + 10);
  };

  const getNomeClienteById = (clientId) => {
    const cliente = clientes.find((c) => c.id === clientId);
    return cliente ? cliente.name : "Cliente não encontrado";
  };

  const getNomeProdutoById = (productId) => {
    const produto = produtos.find((p) => p.id === productId);
    return produto ? produto.description : "Produto não encontrado";
  };
  const handleExcluirNfe = async (nfeId) => {

    const confirmacao = window.confirm("Tem certeza que deseja excluir esta nota fiscal?");

    if (confirmacao) {
      try {

        await api.delete(`/nfe/${nfeId}`);
        alert("Nota excluído com sucesso!");
        window.location.reload()

      } catch (error) {
        console.error("Erro ao excluir o produto:", error);
        alert("Erro ao excluir o nota. Verifique o console para mais detalhes.");
      }
    }
  };
  return (
    <Container>
      <thead>
        <tr>
          <Th>ID</Th>
          <Th>Núm. Nota</Th>
          <Th>Cliente</Th>
          <Th>Produto</Th>
          <Th>Ação</Th>
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody>
        {nfes.slice(0, mostrarMais).map((nfe) => (
          <tr key={nfe.id}>
            <Td>{nfe.id}</Td>
            <Td>{nfe.danfe_nfe_number}</Td>
            <Td>{getNomeClienteById(nfe.client_id)}</Td>
            <Td>{getNomeProdutoById(nfe.product_id)}</Td>
            <Td className="editButton">
              <Button
                title="Editar"
                onClick={() => navigate(`/editnfe/${nfe.id}`)}
              />
            </Td>
            <Td className="deleteButton"><Button  title="Excluir" onClick={() => handleExcluirNfe(nfe.id)} /></Td>    
          </tr>
        ))}
      </tbody>
      {nfes.length > mostrarMais && (
        <tfoot>
          <tr>
            <Td colSpan="7" style={{ textAlign: "center" }}>
              <Button onClick={handleMostrarMais} title={"Mostrar Mais"} />
            </Td>
          </tr>
        </tfoot>
      )}
    </Container>
  );
}
