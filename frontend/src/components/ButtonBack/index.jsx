import { Container } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export function ButtonBack(){
    const navigate = useNavigate();

    function handleBack(){
        navigate(-1)
      }
    
    return(
        <Container onClick={handleBack}>
            <FiArrowLeft/> Voltar
        </Container>
    )
}