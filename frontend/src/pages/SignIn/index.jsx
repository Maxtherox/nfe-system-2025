import { Container } from "./styles";
import { Footer } from "../../components/footer"
import { useState } from "react";
import { useAuth } from '../../hooks/auth';

export function SignIn(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isLoading, setIsLoading] = useState(false);

    const { signIn } = useAuth();
  
        
    async function handleSignIn() {
        setIsLoading(true);

        try {
        await signIn({ email, password });
        } catch (error) {
        console.error("Erro ao efetuar login:", error);
        } finally {
        setIsLoading(false);
        }
    }
  
    return(
        <Container>
            <div>
                <h1>Login</h1>
                <p>Digite seu e-mail e senha para entrar</p>
                <input type="text" placeholder="Exemplo: exemplo@exemplo.com.br" onChange={e => setEmail(e.target.value)}/>
                <input type="password" placeholder="No mínimo 6 caracteres" onChange={e => setPassword(e.target.value)}/>
                <button onClick={handleSignIn}disabled={isLoading}>
                    {isLoading ? "Carregando..." : "Entrar"}
                </button>
            </div>
            <Footer/>
        </Container>
    )
}