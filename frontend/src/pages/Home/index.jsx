import { Container } from "./styles";
import { Header } from "../../components/Header";
import { Feature } from '../../components/Feature';
import { FiUsers, FiTag, FiFileText,  FiBriefcase} from 'react-icons/fi';
import { Footer } from "../../components/footer";


export function Home(){
    return(
        <Container>
            <Header/>
            <main>
                <Feature title="Clientes" icon={FiUsers} to="/clients" />
                <Feature title="Produtos" icon={FiTag} to="/products" />
                <Feature title="Empresas" icon={FiBriefcase} to="/companies" />
                <Feature title="Notas fiscais" icon={FiFileText} to="/nfes" />

            </main>
            <Footer/>
        </Container>
    )
}