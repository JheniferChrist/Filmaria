import './styles.css';
import {useParams, useHistory} from 'react-router-dom';
import api from '../../services/api';
import { useEffect, useState} from 'react';
import { getAllByLabelText } from '@testing-library/react';
import { toast } from 'react-toastify';

export default function Filme(){
    const { id } = useParams();
    const history = useHistory();
    const [filme, Setfilme] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
    async function loadFilme(){

        const response = await api.get(`r-api/?api=filmes/${id}`)
        if(response.data.length === 0){
            history.replace('/');
            return;
        }
        
        Setfilme(response.data);
        setLoading(false);

        }

        loadFilme();

    }, [history, id]);

    function salvaFilme(){
        const minhaLista = localStorage.getItem('filmes');

        let filmesSalvos = JSON.parse(minhaLista) || [];

        const temFilme = filmesSalvos.some( (filmesSalvos)=> filmesSalvos.id === filme.id )

        if(temFilme){
            toast.error('Você já possui esse filme salvo!!');
            return;
        }

        filmesSalvos.push(filme);
        localStorage.setItem('filmes', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso!!');

    }

    if(loading){
        return(
            <div className='filme-info'>Carregando seu filme...</div>
        );
    }

    return(
        <div className='filme-info'>
            <h1>{filme.nome}</h1>
            <img src={filme.foto} alt={filme.nome}/>
            <h2>Sinopse</h2>
            <p>{filme.sinopse}</p>

            <div className='botoes'> 
                <button onClick={ salvaFilme }>Salvar</button>
                <button><a target='_blank' href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}>Trailer</a></button>
            </div>

        </div>
    )
}