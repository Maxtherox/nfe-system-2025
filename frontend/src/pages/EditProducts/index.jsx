import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export function EditProducts(){
    const [cod, setCod] = useState("");
    const [description, setDescription] = useState("");
    const [un, setUn] = useState("");
    const [price, setPrice] = useState("");
    const [ncm, setNcm] = useState("");
    const [cest, setCest] = useState("");

    const navigate = useNavigate();
    const params = useParams();


    useEffect(() => {
        async function fetchProduct() {
            try {
                const response = await api.get(`/products/${params.id}`);
                const productData = response.data.product; // Assume que a resposta contém os dados do produto
                // Define os estados com base nos dados recebidos
                setCod(productData.cod || "");
                setDescription(productData.description || "");
                setUn(productData.un || "");
                setPrice(productData.price || "");
                setNcm(productData.ncm || "");
                setCest(productData.cest || "");
            } catch (error) {
                console.error("Erro ao buscar produto:", error.message);
            }
        }

        fetchProduct();
    }, []); // Certifique-se de passar as dependências corretas ou remova-as conforme necessário

    async function handleEditProduct() {
         
            const requestData = {
                cod,
                description,
                un,
                price,
                ncm,
                cest,
            };

            await api
            .put(`/products/${params.id}`, requestData)
            .then(() => {
                alert("Cliente editado com sucesso!");
                navigate(-1);
            })
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro: Não foi possível editar o cliente!");
                }
            });  
        
        
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
                                <Input type="number" name="barcode" id="barcode" class="barcode" placeholder="Digite seu nome aqui" value={cod} onChange={e => setCod(e.target.value)}/>
                            </div>
                                
                            <div>
                                <label htmlFor="description">Descrição</label>
                                <Input type="text" name="description" id="description" class="description" placeholder="Exemplo: exemplo@exemplo.com.br" value={description} onChange={e => setDescription(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="un">UN</label>
                                <Input type="number" name="un" id="un" class="un" placeholder="Exemplo: 12345678901" value={un} onChange={e => setUn(e.target.value)}/>
                            </div>

                            <div>    
                                <label htmlFor="price">PREÇO</label>
                                <Input type="number" name="price" id="price" class="price" placeholder="Mínimo de 14 dígitos" value={price} onChange={e => setPrice(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="ncm">NCM</label>
                                <Input type="number" name="ncm" id="ncm" class="ncm" placeholder="Digite seu telefone aqui" value={ncm} onChange={e => setNcm(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="cest">Cest</label>
                                <Input type="number" name="cest" id="cest" class="cest" placeholder="Digite seu telefone aqui" value={cest} onChange={e => setCest(e.target.value)}/>
                            </div>
                        </section>
                    </fieldset>

                    <Button title="CRIAR PRODUTO" onClick={handleEditProduct}/>
                </form>
            </main>
        </Container>
    )
}
