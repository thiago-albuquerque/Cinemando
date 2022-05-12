import './busca.css';

import { useState, useEffect } from 'react';
import api, { Key } from '../../Services/api';

export default function Busca(props){
    const [filmes, setFilmes] = useState([]);
    const imgUrl = 'https://image.tmdb.org/t/p/w200';

    useEffect( () => {
        async function loadBusca(){
            const response = await api.get(
                'search/movie' +
                props.location.search +
                `&api_key=${Key}&language=pt-BR`
            );

            setFilmes(response.data.results);
            console.log(props.location);
        }

        loadBusca();
    }, [] )

    return(
        <section className='buscaContainer'>
            <h1>Resultados:</h1>
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