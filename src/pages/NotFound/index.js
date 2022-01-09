import { Link } from "react-router-dom";
import './NotFound.css';

export default function NotFound(){
    return(
        <div className="conteiner">>
        <h1> Ops! Página não encontrada! :(</h1>     
        <h2>Deseja navegar para outra página? Que tal essas sugestões?</h2>   
        <div className="conteiner-link">
        <Link className="botao" to={"/"} >Página Inicial</Link>
        <Link className="botao" to={"/Favoritos"} > Favoritos</Link>
        </div>
    
       </div>
    )
}