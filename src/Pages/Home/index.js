import './home.css';

import { useState, useEffect } from 'react';
import api, { Key } from '../../Services/api.js';

function Home(){
const [filmes, setFilmes] = useState([]);
const imgUrl = 'https://image.tmdb.org/t/p/w200';

useEffect( () => {
    async function loadApi(){
        const response = await api.get(`movie/now_playing?api_key=${Key}&language=pt-BR&page=1`);
        setFilmes(response.data.results);
    }

    loadApi();
}, [] )


    return(
        <section className='inicioContainer'>
            <video autoPlay muted loop src={require('../../Assets/banner.mp4')}/>

            <h1>Lançamentos:</h1>

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
export default Home;