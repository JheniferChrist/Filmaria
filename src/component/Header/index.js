import './styles.css';
import { Link } from 'react-router-dom';
import filmaria from './image/filmaria.JPG';

export default function Header(){
    return(
        <header className="header">
            <Link className='logo' to='/'> <img src={filmaria}/> </Link>
            <Link className='favoritos' to='/favoritos'>Salvos</Link>
        </header>
    );
}