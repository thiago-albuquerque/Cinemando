import './maisVotados.css';

import { useState, useEffect } from 'react';
import api, { Key } from '../../Services/api';

export default function MaisVotados(){
    const [filmes, setFilmes] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w200';

    useEffect( () => {
        async function loadMaisVotados(){
            const response = await api.get(`movie/top_rated?api_key=${Key}&language=pt-BR&page=1`);
            setFilmes(response.data.results);
            console.log(response.data.results);
        }

        loadMaisVotados();
    }, [] );

    return(
        <section className='maisVotadosContainer'>
            <h1>Mais Votados:</h1>
            <span className='gridContainer'>

                {filmes.map( (filme) => {
                    return(

                        <span className='item' key={filme.id}>
                                <div className='glassContainer'>
                                    <img src={imgUrl + filme.poster_path} alt=''/>
                                    <h1>{filme.title}</h1>
                                </div>
                                <div>
                                    <a href={`movie/${filme.id}`} >Acessar</a>
                                </div>
                            </span>

                    )
                } )}
            </span>
        </section>
    )
}