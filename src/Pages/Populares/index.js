import './populares.css';

import { useState, useEffect } from 'react';
import api, { Key } from '../../Services/api';

export default function Populares(){
    const [filmes, setFilmes] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w200';

    useEffect( () => {
        async function loadPopulares(){
            const response = await api.get(`movie/popular?api_key=${Key}&language=pt-BR&page=1`);
            setFilmes(response.data.results);
        }

        loadPopulares();
    }, [] )

    return(
        <section className='popularesContainer'>
            <h1>Populares:</h1>
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