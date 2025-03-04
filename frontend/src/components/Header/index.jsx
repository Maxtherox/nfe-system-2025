import { Container, User, Info } from "./styles";
import { FiUser, FiLogOut } from 'react-icons/fi';
import { Link } from "react-router-dom";
import { USER_ROLE } from "../../utils/roles";
import { useAuth } from '../../hooks/auth';
import { useNavigate } from 'react-router-dom';

export function Header(){
    const {user, signOut} = useAuth();
    const navigation = useNavigate()

    function handleSignOut(){
        navigation("/");
        signOut();
    }

    return(
        <Container>
            <div>
                <h1>MENU</h1>

                <aside>
                    <Info>
                        <User>
                            <span>Olá,<strong> {user.name}</strong></span>
                            <small>
                            <   FiUser /> <span>Perfil de: {user.role}</span>
                            
                            </small>            
                        </User>

                        <button type="button" onClick={handleSignOut}>
                            <FiLogOut size={24} />
                        </button>
                    </Info>  
                </aside>
            </div>


            
        </Container>
    )
}