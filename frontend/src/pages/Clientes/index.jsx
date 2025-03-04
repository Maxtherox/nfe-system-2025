import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ClientesTable } from "../../components/ClientesTable";
import { useEffect, useState } from "react";
import { ButtonBack } from "../../components/ButtonBack";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { api } from "../../services/api";


export function Clients(){
    const [clientes, setClientes] = useState([]);

    useEffect(() => {
      // Função assíncrona para buscar os produtos
      async function fetchClientes() {
        try {
          const response = await api.get("/clients");
          // Atualiza o estado 'clientes' com os produtos recebidos
          setClientes(response.data.clients);
        } catch (error) {
          console.error("Erro ao buscar clientes:", error.message);
        }
      }
  
      // Chama a função para buscar os produtos
      fetchClientes();
    }, []); // O array vazio como segundo parâmetro garante que o useEffect seja executado apenas uma vez
    if (clientes === null) {
      return <p>Carregando...</p>;
    }
    return(
        <Container>
                <Header/>
                <main>
                    <span>
                        <ButtonBack/>
                        <h2>Tabela de Clientes</h2> 
                        <Link to={"/newclients"}>
                             <Button title="CRIAR CLIENTE"/>
                        </Link>                       
                    </span>
                    
                <div>                
                {clientes.length > 0 ? (
            <ClientesTable clientes={clientes} />
          ) : (
            <p>Carregando...</p>
          )}
                    </div>
                </main>
        </Container>
    )
}