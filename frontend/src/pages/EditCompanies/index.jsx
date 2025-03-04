import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { api } from '../../services/api'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


export function EditCompanies(){
  
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
    const [data, setData] = useState({});

    const navigate = useNavigate();
    const params = useParams();

    async function HandleNewCompanie() {
        
        if (!cnpj) {
            return alert("Erro: Insira um cnpj");
        }

        if (!auth) {
            return alert("Erro: informe um preço para o seu prato!");
        }

        if (!cpf) {
            return alert("Erro: É necessário informar cpf para a empresa!");
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
            .put("/companies", requestData)
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

    useEffect(() => {
        async function FetchCompanie() {
            try {
                const response = await api.get(`/companies/${params.id}`);
                console.log('Params ID:', params.id);
                setData(response.data.companie);
                console.log(response.data)
    
                // Verifica se response.data é verdadeiro antes de desestruturar
                if (response.data) {
                    const {cpf, cnpj, cep, uf, city, address, district, phone, auth } = response.data.companie;
                    setCnpj(cnpj || "");
                    setCpf(cpf || "");
                    setCep(cep || "");
                    setUf(uf || "");
                    setCity(city || "");
                    setAddress(address || "");
                    setDistrict(district || "");
                    setPhone(phone || "");
                    setAuth(auth || "");

                }
            } catch (error) {
                console.error("Erro ao buscar cliente:", error.message);
            }
        }
    
        FetchCompanie();
    }, [params.id]);
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
                                <Input type="number" name="barcode" id="barcode" class="barcode" value={cnpj} placeholder="Digite seu nome aqui" onChange={e => setCnpj(e.target.value)}/>
                            </div>
                                
                            <div>
                                <label htmlFor="description">CPF</label>
                                <Input type="number" name="description" id="description"class="description" value={cpf} placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setCpf(e.target.value)}/>
                            </div>

                            <div>
                                <label htmlFor="un">UF</label>
                                <Input type="text" name="un" id="un"class="un" placeholder="Exemplo: 12345678901" value={uf} onChange={e => setUf(e.target.value)}/>
                            </div>

                            <div>    
                                <label htmlFor="price">Autorização</label>
                                <Input type="text" name="price" id="price"class="price" placeholder="Mínimo de 14 dígitos 
                            " value={auth} onChange={e => setAuth(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="ncm">Endereço</label>
                                <Input type="text" name="ncm" id="ncm"class="ncm" placeholder="Digite seu telefone aqui" value={address} onChange={e => setAddress(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="cest">Cidade</label>
                                <Input type="text" name="cest" id="cest"class="cest" placeholder="Digite seu telefone aqui" value={city} onChange={e => setCity(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="district">Bairro</label>
                                <Input type="text" name="district" id="district"class="district" placeholder="Digite seu telefone aqui" value={district} onChange={e => setDistrict(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="cep">CEP</label>
                                <Input type="number" name="cep" id="cep"class="cep" placeholder="Digite seu telefone aqui" value={cep} onChange={e => setCep(e.target.value)}/>
                            </div>
                            <div>
                                <label htmlFor="phone">Telefone</label>
                                <Input type="number" name="phone" id="phone"class="phone" placeholder="Digite seu telefone aqui" value={phone} onChange={e => setPhone(e.target.value)}/>
                            </div>
                        
                        </section>
                    </fieldset>

                    <Button title="CRIAR EMPRESA" onClick={HandleNewCompanie} />
                </form>
            </main>
        </Container>
    )
}