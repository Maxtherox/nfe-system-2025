import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Button } from "../../components/Button";
import { ButtonBack } from "../../components/ButtonBack";
import { Input } from "../../components/Input";
import { Select } from "../../components/Select";
import { useState, useEffect } from "react";
import React from "react";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function NewNfe() {
    const [issuerInscription, setIssuerInscription] = useState("");
    const [issuerCnpj, setIssuerCnpj] = useState("");
    const [issuerAuth, setIssuerAuth] = useState("");
    const [issuerCity, setIssuerCity] = useState("");
    const [issuerUf, setIssuerUf] = useState("");
    const [issuerAddress, setIssuerAddress] = useState("");
    const [issuerCep, setIssuerCep] = useState("");
    const [issuerPhone, setIssuerPhone] = useState("");
    const [danfeOperation, setDanfeOperation] = useState("default");
    const [danfeNfeNumber, setDanfeNfeNumber] = useState("");
    const [clientId, setClientId] = useState("");
    const [productId, setProductId] = useState("");
    const [baseIcms, setBaseIcms] = useState("");
    const [valorIcms, setValorIcms] = useState("");
    const [baseTribu, setBaseTribu] = useState("");
    const [valorTribu, setValorTribu] = useState("");
    const [serviceValor, setServiceValor] = useState("");
    const [valorTotalProducts, setValorTotalProducts] = useState("");
    const [valorFrete, setValorFrete] = useState("");
    const [discount, setDiscount] = useState("");
    const [other, setOther] = useState("");
    const [valorIpi, setValorIpi] = useState("");
    const [valorApproximateTaxes, setValorApproximateTaxes] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const defaultOptions = [
      { value: "default", label: "Selecione a categoria", disabled: true },
      { value: "1", label: "Saída" },
      { value: "0", label: "Entrada" },
    ];
  
    const navigate = useNavigate();

    const handleOperationChange = (event) => {
      setDanfeOperation(event.target.value);
    };
  
    const handleNewNfe = async () => {
        if (!selectedClientId) {
            return alert("Erro: selecione um cliente!");
        }
        
        if (!selectedProductId) {
            return alert("Erro: selecione um produto!");
        }
        
        if (!danfeOperation) {
            return alert("Erro: É necessário selecionar o tipo de operação de Danfe!");
        }
        setIsLoading(true);

        const nfeData = {
          issuer_inscription: parseInt(issuerInscription),
          issuer_cnpj: parseInt(issuerCnpj),
          issuer_auth: parseInt(issuerAuth),
          issuer_city: issuerCity,
          issuer_uf: issuerUf,
          issuer_address: issuerAddress,
          issuer_cep: parseInt(issuerCep),
          issuer_phone: parseInt(issuerPhone),
          danfe_operation: danfeOperation,
          danfe_nfe_number: parseInt(danfeNfeNumber),
          client_id: parseInt(selectedClientId),
          product_id: parseInt(selectedProductId),
          base_icms: parseFloat(baseIcms),
          valor_icms: parseFloat(valorIcms),
          base_tribu: parseFloat(baseTribu),
          valor_tribu: parseFloat(valorTribu),
          service_valor: parseFloat(serviceValor),
          valor_total_products: parseFloat(valorTotalProducts),
          valor_frete: parseFloat(valorFrete),
          discount: parseFloat(discount),
          other: parseFloat(other),
          valor_ipi: parseFloat(valorIpi),
          valor_approximate_taxes: parseFloat(valorApproximateTaxes),
        };
  
        const response = await api.post("/nfe", nfeData)
        .then(alert("Nota fiscal adicionada com sucesso!"), navigate(-1))
            .catch((error) => {
                if (error.response) {
                    alert(error.response.data.message);
                } else {
                    alert("Erro: Não foi possível criar o seu prato!");
                }
            });  

            setIsLoading(false); 
    };
  
    const [clients, setClients] = useState([]);
    
    useEffect(() => {
      async function loadClients() {
        try {
          const response = await api.get("/clients");
          setClients(response.data.clients);
        } catch (error) {
          console.error("Error loading users", error);
        }
      }
  
      loadClients();
    }, []);
    const [selectedClientId, setSelectedClientId] = useState(null);
    const [selectedClient, setSelectedClient] = useState(null);

    const handleClientChange = (event) => {
      const clientId = event.target.value;
      setSelectedClientId(clientId);
      const selected = clients.find((client) => client.id === parseInt(clientId, 10));
      
      setSelectedClient(selected);
    };

    const [companies, setCompanies] = useState([]);
    
    useEffect(() => {
      async function loadCompanies() {
        try {
          const response = await api.get("/companies");
          setCompanies(response.data.companie);
        } catch (error) {
          console.error("Error loading users", error);
        }
      }
  
      loadCompanies();
    }, []);
    const [selectedCompanieId, setSelectedCompanieId] = useState(null);
    const [selectedCompanie, setSelectedCompanie] = useState(null);

    const handleCompanieChange = (event) => {
      const companieId = event.target.value;
      setSelectedCompanieId(companieId);
      const selected = companies.find((companie) => companie.id === parseInt(companieId, 10));
      
      setSelectedCompanie(selected);
    };

     
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
      async function loadProducts() {
        try {
          const response = await api.get("/products");
          setProducts(response.data.products);
        } catch (error) {
          console.error("Error loading users", error);
        }
      }
  
      loadProducts();
    }, []);

    const [selectedProductId, setSelectedProductId] = useState(null);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductChange = (event) => {
      const productId = event.target.value;
      setSelectedProductId(productId);
      const selected = products.find((product) => product.id === parseInt(productId, 10));
      
      setSelectedProduct(selected);
    };
  return (
    <Container>
      <Header />
      <main>
        <ButtonBack />
        <form action="">
          <fieldset>
            <h2>Dados do Emissor</h2>
            <section>
              <select
                    name="companie_cnpj"
                    id="companie_cnpj"
                    value={selectedCompanie ? selectedCompanie.id : ""}
                    onChange={handleCompanieChange}
                >
                <option value="" disabled selected>
                    Selecione a empresa
                </option>
                {companies.map((companie) => (
                    <option key={companie.id} value={companie.id}>
                    {companie.cnpj}
                    </option>
              ))}
            </select>
              <div>
                <label htmlFor="issuer_cnpj">CNPJ</label>
                <Input type="number" name="issuer_cnpj" id="issuer_cnpj" placeholder="CPF ou CNPJ do emissor" value={selectedCompanie ? selectedCompanie.cpf : ""}  onChange={e => setIssuerCnpj(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="issuer_auth">Autorização de uso</label>
                <Input type="number" name="issuer_auth" id="issuer_auth" placeholder="Autorização do emissor" value={selectedCompanie ? selectedCompanie.auth : ""}  onChange={e => setIssuerAuth(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="issuer_city">Cidade</label>
                <Input type="text" name="issuer_city" id="issuer_city" placeholder="Cidade do emissor" value={selectedCompanie ? selectedCompanie.city : ""}  onChange={e => setIssuerCity(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="issuer_uf">UF</label>
                <Input type="text" name="issuer_uf" id="issuer_uf" placeholder="UF do emissor" value={selectedCompanie ? selectedCompanie.uf : ""} onChange={e => setIssuerUf(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="issuer_address">Endereço</label>
                <Input type="text" name="issuer_address" id="issuer_address" placeholder="Endereço do emissor" value={selectedCompanie ? selectedCompanie.address : ""} onChange={e => setIssuerAddress(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="issuer_cep">CEP</label>
                <Input type="number" name="issuer_cep" id="issuer_cep" placeholder="CEP do emissor" value={selectedCompanie ? selectedCompanie.cep : ""} onChange={e => setIssuerCep(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="issuer_phone">Telefone</label>
                <Input type="number" name="issuer_phone" id="issuer_phone" placeholder="Telefone do emissor" value={selectedCompanie ? selectedCompanie.phone : ""} dsabled onChange={e => setIssuerPhone(e.target.value)}/>
              </div>
            </section>

            <h2>Danfe</h2>
            <section>
              <div class="operationType">
                <label htmlFor="danfe_operation">Tipo de operação</label>
                <Select
                    name="danfe_operation"
                    id="danfe_operation"
                    options={defaultOptions}
                    value={danfeOperation}
                    onChange={handleOperationChange}
                    required
                />
              </div>
              <div>
                <label htmlFor="danfe_nfe_number">Nota fiscal</label>
                <Input type="number" name="danfe_nfe_number" id="danfe_nfe_number" placeholder="Número de NF" onChange={e => setDanfeNfeNumber(e.target.value)}/>
              </div>
            </section>

            <h2>Destinatário</h2>
            <section>
              <div>
              <label htmlFor="client_name">Nome/razão social</label>
              <select
                    name="client_name"
                    id="client_name"
                    value={selectedClient ? selectedClient.id : ""}
                    onChange={handleClientChange}
                >
                <option value="" disabled selected>
                    Selecione o cliente
                </option>
                {clients.map((client) => (
                    <option key={client.id} value={client.id}>
                    {client.name}
                    </option>
              ))}
            </select>
              </div>
              <div>
                <label htmlFor="client_id">id do cliente</label>
                <Input type="number" name="client_id" id="client_id" placeholder="client_id" value={selectedClient ? selectedClient.id : ""} disabled />
              </div>
              <div>
                <label htmlFor="client_document">CPF/CNPJ</label>
                <Input type="number" name="client_document" id="client_document" placeholder="Documento do cliente" value={selectedClient ? selectedClient.cpf || selectedClient.cpnj: ""} />
              </div>
              <div>
                <label htmlFor="client_address">Endereço</label>
                <Input type="text" name="client_address" id="client_address" placeholder="Endereço do cliente" value={selectedClient ? selectedClient.address : ""} />
              </div>
              <div>
                <label htmlFor="client_number">Telefone</label>
                <Input type="number" name="client_number" id="client_number" placeholder="Número do cliente"  value={selectedClient ? selectedClient.phone : ""} />
              </div>
              <div>
                <label htmlFor="client_neighborhood">Bairro</label>
                <Input type="text" name="client_neighborhood" id="client_neighborhood" placeholder="Bairro do cliente" value={selectedClient ? selectedClient.district : ""} />
              </div>
              <div>
                <label htmlFor="client_city">Cidade</label>
                <Input type="text" name="client_city" id="client_city" placeholder="Cidade do cliente" value={selectedClient ? selectedClient.city : ""} />
              </div>
              <div>
                <label htmlFor="client_uf">UF</label>
                <Input type="text" name="client_uf" id="client_uf" placeholder="UF do cliente" value={selectedClient ? selectedClient.uf : ""} />
              </div>
              <div>
                <label htmlFor="client_ie">Inscrição estadual</label>
                <Input type="number" name="client_ie" id="client_ie" placeholder="Inscrição estadual do cliente" value="isento" />
              </div>
            </section>
{ /* 
            <h2>Cálculo de Imposto</h2>
            <section>
              <div>
                <label htmlFor="base_icms">Base de cálculo do ICMS</label>
                <Input type="number" name="base_icms" id="base_icms" placeholder="0,00" value="0" onChange={e => setBaseIcms(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="valor_icms">Valor do ICMS</label>
                <Input type="number" name="valor_icms" id="valor_icms" placeholder="0,00"  value="0" onChange={e => setValorIcms(e.target.value)} />
              </div>
              <div>
                <label htmlFor="base_tribu">Base calc. subst. tributária</label>
                <Input type="number" name="base_tribu" id="base_tribu" placeholder="0,00"  value="0" onChange={e => setBaseTribu(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="valor_tribu">Valor substituição tributária</label>
                <Input type="number" name="valor_tribu" id="valor_tribu" placeholder="0,00" value="0"  onChange={e => setValorTribu(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="service_valor">Valor total dos serviços</label>
                <Input type="number" name="service_valor" id="service_valor" placeholder="0,00"  value="0" onChange={e => setServiceValor(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="valor_total_products">Valor total dos produtos</label>
                <Input type="number" name="valor_total_products" id="valor_total_products" placeholder="0,00"  value="0" onChange={e => setValorTotalProducts(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="valor_frete">Valor do frete</label>
                <Input type="number" name="valor_frete" id="valor_frete" placeholder="0,00"  value="0" onChange={e => setValorFrete(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="discount">Desconto</label>
                <Input type="number" name="discount" id="discount" placeholder="0,00" value="0" onChange={e => setDiscount(e.target.value)} />
              </div>
              <div>
                <label htmlFor="other">Outras despesas</label>
                <Input type="number" name="other" id="other" placeholder="0,00"  value="0" onChange={e => setOther(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="valor_ipi">Valor do IPI</label>
                <Input type="number" name="valor_ipi" id="valor_ipi" placeholder="0,00"  value="0" onChange={e => setValorIpi(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="valor_approximate_taxes">Valor aproximado dos tributos</label>
                <Input type="number" name="valor_approximate_taxes" id="valor_approximate_taxes" placeholder="0,00" onChange={e => setValorApproximateTaxes(e.target.value)}/>
              </div>
              <div>
                <label htmlFor="valor_total_note">Valor total da nota</label>
                <Input type="number" name="valor_total_note" id="valor_total_note" placeholder="0,00" disabled />
              </div>
            </section>
*/}
            <h2>Dados dos Produtos/Serviços</h2>
            <section>
              <div class="productDescription">
                <label htmlFor="product_description">Descrição do produto</label>
                <select
                    name="product_description"
                    id="product_description"
                    value={selectedProduct ? selectedProduct.id : ""}
                    onChange={handleProductChange}
                >
                <option value="" disabled selected>
                    Selecione o produto
                </option>
                {products.map((product) => (
                    <option key={product.id} value={product.id}>
                    {product.description}
                    </option>
              ))}
            </select>
              </div>
              <div>
                <label htmlFor="product_code">Código</label>
                <Input type="number" name="product_code" id="product_code" placeholder="123" value={selectedProduct ? selectedProduct.cod : ""}/>

              </div>
              <div>
                <label htmlFor="ncm">NCM</label>
                <Input type="number" name="ncm" id="ncm" placeholder="Código NCM"  value={selectedProduct ? selectedProduct.cod : ""}/>
              </div>
              <div>
                <label htmlFor="cest">CEST</label>
                <Input type="number" name="cest" id="cest" placeholder="Código CEST" value={selectedProduct ? selectedProduct.cest : ""} />
              </div>
              <div>
                <label htmlFor="quantity">Quantidade</label>
                <Input type="number" name="quantity" id="quantity" placeholder="Quantidade do produto" />
              </div>
              <div>
                <label htmlFor="unitary">Unitário</label>
                <Input type="number" name="unitary" id="unitary" placeholder="Valor unitário do produto" value={selectedProduct ? selectedProduct.un : ""}/>
              </div>
              <div>
                <label htmlFor="discount_product">Desconto</label>
                <Input type="number" name="discount_product" id="discount_product" placeholder="Desconto no produto" />
              </div>
              <div>
                <label htmlFor="liquid">Líquido</label>
                <Input type="number" name="liquid" id="liquid" placeholder="Valor líquido do produto" value={selectedProduct ? selectedProduct.price : ""}/>
              </div>
            </section>
          </fieldset>

          <Button title={isLoading ? "CARREGANDO..." : "CRIAR NOTA FISCAL"} onClick={handleNewNfe} disabled={isLoading}/>
        </form>
      </main>
    </Container>
  );
}
