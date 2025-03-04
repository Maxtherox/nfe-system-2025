import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { api } from '../../services/api'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export function NewClients(){
    
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [cnpj, setCnpj] = useState("");
    const [cpf, setCpf] = useState("");
    const [cep, setCep] = useState("");
    const [uf, setUf] = useState("");
    const [city, setCity] = useState("");
    const [address, setAddress] = useState("");
    const [district, setDistrict] = useState("");
    const [phone, setPhone] = useState("");
    const [ibge, setIbge] = useState("");
    const [nro, setNro] = useState("");


    const navigate = useNavigate();
    

    async function handleNewClient() {
        
        if (!name) {
            return alert("Erro: Insira um código");
        }
        if (!email) {
            return alert("Erro: É necessário informar uma descrição para o seu prato!");
        }
        const requestData = {
            name,
            email,
            cpf,
            cnpj,
            cep,
            uf,
            city,
            address,
            district,
            phone,
            ibge,
            nro,
        };
        setLoading(true);
        await api
            .post("/clients", requestData)
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
                    <h2>dados cadastrais</h2>
                        <section>                           
                            <div>
                                <label htmlFor="name">Nome</label>
                                <Input type="text" name="name" id="name" class="name" placeholder="Digite seu nome aqui" onChange={e => setName(e.target.value)}/>
                            </div>
                                
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <Input type="text" name="email" id="email"class="email" placeholder="Exemplo: exemplo@exemplo.com.br"onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="cpf">CPF</label>
                                <Input type="number" name="cpf" id="cpf"class="cpf" placeholder="Exemplo: 12345678901"onChange={e => setCpf(e.target.value)}/>
                            </div>

                            <div>    
                                <label htmlFor="cnpj">CNPJ</label>
                                <Input type="text" name="cnpj" id="cnpj"class="cnpj" placeholder="Mínimo de 14 dígitos"onChange={e => setCnpj(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="fone">Telefone</label>
                                <Input type="text" name="fone" id="fone"class="fone" placeholder="Digite seu telefone aqui"onChange={e => setPhone(e.target.value)}/>
                            </div>
                        </section>
                        <h2>Endereço</h2>
                        <section>
                        <div> 
                            <label htmlFor="cep">CEP</label>
                            <Input type="number" name="cep" id="cep"class="cep" placeholder="12345678"onChange={e => setCep(e.target.value)}/>
                        </div>   
                        <div>
                            <label htmlFor="endereco">Endereço</label>
                            <Input type="text" name="endereco" id="endereco"class="endereco" placeholder="Digite seu endereço aqui"onChange={e => setAddress(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="bairro">Bairro</label>
                            <Input type="text" name="bairro" id="bairro"class="bairro" placeholder="Digite seu bairro aqui"onChange={e => setDistrict(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="numero">Número</label>
                            <Input type="text" name="numero" id="numero"class="numero" placeholder="00000"onChange={e => setNro(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="cidade">Cidade</label>
                            <Input type="text" name="cidade" id="cidade"class="cidade" placeholder="Exemplo: São Paulo"onChange={e => setCity(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="uf">UF</label>
                            <Input type="text" name="uf" id="uf"class="uf" placeholder="Exemplo: SP"onChange={e => setUf(e.target.value)}/>
                        </div>
                        <div>
                            <label htmlFor="ibge">IBGE</label>
                            <Input type="text" name="ibge" id="ibge"class="ibge" placeholder="00000"onChange={e => setIbge(e.target.value)}/>
                        </div>
                        </section>
                    </fieldset>

                    <Button title="CRIAR CLIENTE" onClick={handleNewClient} />
                </form>
            </main>
        </Container>
    )
}