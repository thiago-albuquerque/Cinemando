import './favoritos.css';

import { useState, useEffect } from 'react';
import { MdDeleteForever } from 'react-icons/md';

import { toast } from 'react-toastify';

export default function Salvos(){
    const [favoritos, setFavoritos] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w500';

    useEffect( () => {
        
        const meusFavotitos = localStorage.getItem('favorito');
        setFavoritos(JSON.parse(meusFavotitos) || []);
        
    }, [] );

    function deletarFavorito(id){        
        let filtroFilmes = favoritos.filter( (item) => {
            return (item.id !== id);
        } )
        
        setFavoritos(filtroFilmes);
        localStorage.setItem('favorito', JSON.stringify(filtroFilmes));
        toast.error('Favorito deletado! 😔');
    }

    return(
        <section className='favoritosContainer'>
            <h1>Meus Favoritos:</h1>

            {favoritos.length === 0 && <h3>Você ainda não salvou nenhum filme. 😅</h3>}

            <ul>
                {favoritos.map( (item) => {
                    return(
                        <li key={item.id}>
                            <span>
                                <img src={imgUrl + item.poster_path} alt=''/>
                                
                                <h3>{item.title}</h3>
                            </span>
                            <MdDeleteForever className='iconDelete' onClick={ () => deletarFavorito(item.id)}/>                             
                        </li>
                    )
                } )}
            </ul>
        </section>
    )
}