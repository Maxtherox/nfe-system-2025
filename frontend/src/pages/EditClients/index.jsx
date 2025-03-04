import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link} from 'react-router-dom'
import { useAuth } from "../../hooks/auth";

export function EditClients(){
    
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
    
    const { user } = useAuth()
    const params = useParams();
    const [data, setData] = useState({});
    const navigate = useNavigate();
    

    async function handleUpdateClient() {
        
        if (!name) {
            return alert("Erro: Insira um código");
        }
        if (!email) {
            return alert("Erro: É necessário informar um e-mail!");
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
            .put(`/clients/${params.id}`, requestData)
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

        setLoading(false); 
    }

    useEffect(() => {
        async function fetchClient() {
            try {
                const response = await api.get(`/clients/${params.id}`);
                console.log('Params ID:', params.id);
                setData(response.data.client);
                console.log(response.data)
    
                // Verifica se response.data é verdadeiro antes de desestruturar
                if (response.data) {
                    const { name, email, cpf, cnpj, cep, uf, city, address, district, phone, ibge, nro } = response.data.client;
                    console.log(name)
                    setName(name || "");
                    setEmail(email || "");
                    setCnpj(cnpj || "");
                    setCpf(cpf || "");
                    setCep(cep || "");
                    setUf(uf || "");
                    setCity(city || "");
                    setAddress(address || "");
                    setDistrict(district || "");
                    setPhone(phone || "");
                    setIbge(ibge || "");
                    setNro(nro || "");
                }
            } catch (error) {
                console.error("Erro ao buscar cliente:", error.message);
            }
        }
    
        fetchClient();
    }, [params.id]);

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
                                <Input type="text" name="name" id="name" className="name" placeholder="Digite seu nome aqui" value={name} onChange={e => setName(e.target.value)} />
                            </div>
                                
                            <div>
                                <label htmlFor="email">E-mail</label>
                                <Input type="text" name="email" id="email" className="email" placeholder="Exemplo: exemplo@exemplo.com.br" value={email} onChange={e => setEmail(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="cpf">CPF</label>
                                <Input type="number" name="cpf" id="cpf" className="cpf" placeholder="Exemplo: 12345678901" value={cpf} onChange={e => setCpf(e.target.value)}/>
                            </div>

                            <div>    
                                <label htmlFor="cnpj">CNPJ</label>
                                <Input type="text" name="cnpj" id="cnpj" className="cnpj" placeholder="Mínimo de 14 dígitos" value={cnpj} onChange={e => setCnpj(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="fone">Telefone</label>
                                <Input type="text" name="fone" id="fone" className="fone" placeholder="Digite seu telefone aqui" value={phone} onChange={e => setPhone(e.target.value)}/>
                            </div>
                        </section>
                        <h2>Endereço</h2>
                        <section>
                            <div> 
                                <label htmlFor="cep">CEP</label>
                                <Input type="number" name="cep" id="cep" className="cep" placeholder="12345678" value={cep} onChange={e => setCep(e.target.value)}/>
                            </div>   
                            <div>
                                <label htmlFor="endereco">Endereço</label>
                                <Input type="text" name="endereco" id="endereco" className="endereco" placeholder="Digite seu endereço aqui" value={address} onChange={e => setAddress(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="bairro">Bairro</label>
                                <Input type="text" name="bairro" id="bairro" className="bairro" placeholder="Digite seu bairro aqui" value={district} onChange={e => setDistrict(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="numero">Número</label>
                                <Input type="text" name="numero" id="numero" className="numero" placeholder="00000" value={nro} onChange={e => setNro(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="cidade">Cidade</label>
                                <Input type="text" name="cidade" id="cidade" className="cidade" placeholder="Exemplo: São Paulo" value={city} onChange={e => setCity(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="uf">UF</label>
                                <Input type="text" name="uf" id="uf" className="uf" placeholder="Exemplo: SP" value={uf} onChange={e => setUf(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="ibge">IBGE</label>
                                <Input type="text" name="ibge" id="ibge" className="ibge" placeholder="00000" value={ibge} onChange={e => setIbge(e.target.value)}/>
                            </div>
                        </section>
                    </fieldset>

                    <Button title="CRIAR CLIENTE" onClick={handleUpdateClient} />
                </form>
            </main>
        </Container>
    )
}
