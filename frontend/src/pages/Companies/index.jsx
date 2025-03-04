import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonBack } from "../../components/ButtonBack";
import { CompaniesTable } from "../../components/CompaniesTable";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Companies (){
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar os produtos
    async function fetchCompanies() {
      try {
        const response = await api.get("/companies");
        console.log(response);

        setCompanies(response.data.companie);
      } catch (error) {
        console.error("Erro ao buscar empresa:", error.message);
      }
    }

    // Chama a função para buscar os produtos
    fetchCompanies();
  }, []); // O array vazio como segundo parâmetro garante que o useEffect seja executado apenas uma vez
  console.log("Companies:", companies);

    return(
        <Container>
            <Header/>
            
            <main>
                    <span>
                        <ButtonBack/>
                        <h2>Tabela de empresas</h2> 
                        <Link to={"/newcompanies"}>
                             <Button title="CRIAR EMPRESA"/>
                        </Link>                       
                    </span>
                    
                   <div>
                    {companies !== null ? (
                    companies.length > 0 ? (
                        <CompaniesTable companies={companies} />
                    ) : (
                        <p>Carregando...</p>
                    )
                    ) : (
                    <p>Carregando...</p>
                    )}
                </div>
                </main>
        </Container>
    )
}