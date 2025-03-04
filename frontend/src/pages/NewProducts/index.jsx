import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { api } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export function NewProducts(){
  
    const [loading, setLoading] = useState(false);
    const [cod, setCod] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    const [cest, setCest] = useState("");
    const [un, setUn] = useState("");
    const [ncm, setNcm] = useState("");

    const navigate = useNavigate();
    

    async function handleNewProduct() {
        
        if (!cod) {
            return alert("Erro: Insira um código");
        }

        if (!price) {
            return alert("Erro: informe um preço para o seu prato!");
        }

        if (!description) {
            return alert("Erro: É necessário informar uma descrição para o seu prato!");
        }

        

        
        const requestData = {
            cod,
            description,
            cest,
            price,
            ncm,
            un,
        };
        setLoading(true);
        await api
            .post("/products", requestData)
            .then(alert("Cliente adicionado com sucesso!"), navigate("/"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro: Não foi possível criar o seu prato!");
                }
            });  

        setLoading(false);
    }
    return(
        <Container>
            <Header/>
            <main>
                <ButtonBack/>
                <form action="">
                    <fieldset>
                    <h2>Informações do produto</h2>
                        <section>                           
                            <div>
                                <label htmlFor="barcode">Cód. de barras</label>
                                <Input type="number" name="barcode" id="barcode" class="barcode" placeholder="Digite seu nome aqui" onChange={e => setCod(e.target.value)}/>
                            </div>
                                
                            <div>
                                <label htmlFor="description">Descrição</label>
                                <Input type="text" name="description" id="description"class="description" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setDescription(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="un">UN</label>
                                <Input type="number" name="un" id="un"class="un" placeholder="Exemplo: 12345678901" onChange={e => setUn(e.target.value)}/>
                            </div>

                            <div>    
                                <label htmlFor="price">PREÇO</label>
                                <Input type="number" name="price" id="price"class="price" placeholder="Mínimo de 14 dígitos 
                            " onChange={e => setPrice(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="ncm">NCM</label>
                                <Input type="number" name="ncm" id="ncm"class="ncm" placeholder="Digite seu telefone aqui" onChange={e => setNcm(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="cest">Cest</label>
                                <Input type="number" name="cest" id="cest"class="cest" placeholder="Digite seu telefone aqui" onChange={e => setCest(e.target.value)}/>
                            </div>
                        
                        </section>
                    </fieldset>

                    <Button title="CRIAR PRODUTO" onClick={handleNewProduct} />
                </form>
            </main>
        </Container>
    )
}