import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { api } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export function NewCompanies(){
  
    const [loading, setLoading] = useState(false);
    const [cnpj, setCnpj] = useState("");
    const [cpf, setCpf] = useState("");
    const [auth, setAuth] = useState("");
    const [city, setCity] = useState("");
    const [uf, setUf] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [cep, setCep] = useState("");
    const [phone, setPhone] = useState("");

    const navigate = useNavigate();
    

    async function HandleNewCompanie() {
        
        if (!cnpj) {
            return alert("Erro: Insira um cnpj");
        }

        if (!auth) {
            return alert("Erro: informe um preço para o seu prato!");
        }

        if (!cpf) {
            return alert("Erro: É necessário informar uma descrição para o seu prato!");
        }
        
        const requestData = {
            cnpj,
            cpf,
            city,
            auth,
            uf,
            address,
            district,
            cep,
            phone,
        };
        setLoading(true);
        await api
            .post("/companies", requestData)
            .then(alert("Empresa adicionada com sucesso!"), navigate("/"))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro: Não foi possível criar empresa!");
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
                                <label htmlFor="barcode">CNPJ</label>
                                <Input type="number" name="barcode" id="barcode" class="barcode" placeholder="Digite seu nome aqui" onChange={e => setCnpj(e.target.value)}/>
                            </div>
                                
                            <div>
                                <label htmlFor="description">CPF</label>
                                <Input type="number" name="description" id="description"class="description" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setCpf(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="un">UF</label>
                                <Input type="text" name="un" id="un"class="un" placeholder="Exemplo: 12345678901" onChange={e => setUf(e.target.value)}/>
                            </div>

                            <div>    
                                <label htmlFor="price">Autorização</label>
                                <Input type="text" name="price" id="price"class="price" placeholder="Mínimo de 14 dígitos 
                            " onChange={e => setAuth(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="ncm">Endereço</label>
                                <Input type="text" name="ncm" id="ncm"class="ncm" placeholder="Digite seu telefone aqui" onChange={e => setAddress(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="cest">Cidade</label>
                                <Input type="text" name="cest" id="cest"class="cest" placeholder="Digite seu telefone aqui" onChange={e => setCity(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="district">Bairro</label>
                                <Input type="text" name="district" id="district"class="district" placeholder="Digite seu telefone aqui" onChange={e => setDistrict(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="cep">CEP</label>
                                <Input type="number" name="cep" id="cep"class="cep" placeholder="Digite seu telefone aqui" onChange={e => setCep(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="phone">Telefone</label>
                                <Input type="number" name="phone" id="phone"class="phone" placeholder="Digite seu telefone aqui" onChange={e => setPhone(e.target.value)}/>
                            </div>
                        
                        </section>
                    </fieldset>

                    <Button title="CRIAR EMPRESA" onClick={HandleNewCompanie} />
                </form>
            </main>
        </Container>
    )
}