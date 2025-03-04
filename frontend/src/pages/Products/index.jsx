import { Container } from "./styles";
import { Header } from "../../components/Header";
import { ButtonBack } from "../../components/ButtonBack";
import { ProductsTable } from "../../components/ProductsTable";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

export function Products (){
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função assíncrona para buscar os produtos
    async function fetchProducts() {
      try {
        const response = await api.get("/products");
        // Atualiza o estado 'clientes' com os produtos recebidos
        setProducts(response.data.products);
      } catch (error) {
        console.error("Erro ao buscar produtos:", error.message);
      }
    }

    // Chama a função para buscar os produtos
    fetchProducts();
  }, []); // O array vazio como segundo parâmetro garante que o useEffect seja executado apenas uma vez



    return(
        <Container>
            <Header/>
            
            <main>
                    <span>
                        <ButtonBack/>
                        <h2>Tabela de Produtos</h2> 
                        <Link to={"/newproducts"}>
                             <Button title="CRIAR PRODUTO"/>
                        </Link>                       
                    </span>
                    
                <div>                
                    {products.length >  0 ? (
                      <ProductsTable products={products} />
                    ) : (
                      <p>Carregando...</p>
                    )}
                    </div>
                </main>
        </Container>
    )
}