import { Button } from "../Button";
import { Container, Td, Th } from "./styles";
import { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../hooks/auth";
import { api } from "../../services/api";

export function ProductsTable ({products}){
  const [mostrarMais, setMostrarMais] = useState(10);
  const {user} = useAuth();

  const navigate = useNavigate();

  const handleMostrarMais = () => {
    setMostrarMais((prev) => prev + 10);
  };
  const handleExcluirProduto = async (productId) => {
    // Alerta de confirmação
    const confirmacao = window.confirm("Tem certeza que deseja excluir este produto?");

    if (confirmacao) {
      try {
        // Chame a função de exclusão do serviço/API passando o productId
        await api.delete(`/products/${productId}`);
        alert("Produto excluído com sucesso!");
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
          <Th>CÓD. DE BARRAS</Th>
          <Th>DESCRIÇÃO</Th>
          <Th>UN</Th>
          <Th>PREÇO</Th>
          <Th>NCM</Th>
          <Th>Cest</Th>
          <Th>Ação</Th>
          <Th>Ação</Th>
        </tr>
      </thead>
      <tbody>
        {products.slice(0, mostrarMais).map((product) => (
          <tr key={product.id}>
            <Td>{product.id}</Td>
            <Td>{product.cod}</Td>
            <Td>{product.description}</Td>
            <Td>{product.un}</Td>
            <Td>{product.price}</Td>
            <Td>{product.ncm}</Td>
            <Td>{product.cest}</Td>
            <Td className="editButton"><Button title="Editar" onClick={() => navigate(`/editproducts/${product.id}`)}/></Td>
            <Td className="deleteButton"><Button  title="Excluir" onClick={() => handleExcluirProduto(product.id)} /></Td>      
          </tr>
        ))}
      </tbody>
      {products.length > mostrarMais && (
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