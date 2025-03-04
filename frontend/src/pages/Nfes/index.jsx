import { Container } from "./styles";
import { Header } from "../../components/Header";
import { NfesTable } from "../../components/NfesTable";
import { useEffect, useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { api } from '../../services/api';

export function Nfes() {
  const [nfes, setNfes] = useState([]);
  const [clientes, setClientes] = useState([]);
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const nfeResponse = await api.get("/nfe");
        const clienteResponse = await api.get("/clients");
        const produtoResponse = await api.get("/products");

        setNfes(nfeResponse.data.nfes);
        setClientes(clienteResponse.data.clients);
        setProdutos(produtoResponse.data.products);
      } catch (error) {
        console.error("Erro ao buscar dados:", error.message);
      }
    }

    fetchData();
  }, []);

  if (nfes === null || clientes === null || produtos === null) {
    return <p>Carregando...</p>;
  }

  return (
    <Container>
      <Header />
      <main>
        <span>
          <ButtonBack />
          <h2>Tabela de NFE</h2>
          <Link to={"/newnfe"}>
            <Button title="CRIAR NFE" />
          </Link>
        </span>

        <div>
          { nfes.length > 0 || clientes.length > 0 || produtos.length > 0 ? (
            <NfesTable nfes={nfes} clientes={clientes} produtos={produtos} />
          )
            : (
            <p>Carregando...</p>
          )}
        </div>
      </main>
    </Container>
  );
}
