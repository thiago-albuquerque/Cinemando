import './detalhes.css';

import { useParams, useHistory } from 'react-router-dom';
import { useEffect, useState } from 'react';

import { FaStarHalfAlt } from 'react-icons/fa';
import { MdFavorite } from 'react-icons/md';

import ReactPlayer from 'react-player';
import movieTrailer from 'movie-trailer';

import api, { Key } from '../../Services/api.js';

import { toast } from 'react-toastify';

export default function Detalhes(){
    const { id } = useParams();
    const history = useHistory();

    const [detalhes, setDetalhes] = useState([]);
    const [loading, setLoading] = useState(true);    

    const imgUrl = 'https://image.tmdb.org/t/p/w500';
    const imgBgUrl = 'https://image.tmdb.org/t/p/original';
    const [trailer, setTrailer] = useState('');

    useEffect( () => {
        async function loadDetalhes(){
            const response = await api.get(`movie/${id}?api_key=${Key}&language=pt-BR&page=1`);

            if(response.data.length === 0){
                history.replace('/');
                return;
            }

            setDetalhes(response.data);
            setLoading(false);
            console.log(response.data);
        }

        loadDetalhes();
    }, [history, id] );

    function favoritar(){
        const meusFavoritos = localStorage.getItem('favorito');
        let filmesSalvos = JSON.parse(meusFavoritos) || [];

        const has = filmesSalvos.some( (favoritoSalvo) => favoritoSalvo.id === detalhes.id);

        if(has){
            toast.warn('Este filme já foi salvo. 😉');
            return;
        }

        filmesSalvos.push(detalhes);
        localStorage.setItem('favorito', JSON.stringify(filmesSalvos));
        toast.success('Filme salvo com sucesso! 😄');
    }

    function handleTrailer (){        
        movieTrailer(detalhes.title)
        .then( (url) => {
            setTrailer(url);
        } )
        .catch( (error) => {
            console.log('Error trailer: ', error );
        } );       
    }

    if(loading){
        return(
            <div>
               <h1>Carregando os detalhes...</h1> 
            </div>
        )
    }

    return(
        <section className='detalhesContainer' style={{ backgroundImage: `url(${imgBgUrl}${detalhes.backdrop_path})`}}>
            <span className='itemContainer' >
            
                    <div className='item' >
                            
                        <img src={imgUrl + detalhes.poster_path}/>

                        <span>                            
                            <div className='infoContainer'>
                                <div className='votoContainer'>
                                    <FaStarHalfAlt id='iconStar'/>
                                    <h6 id='votos'>{detalhes.vote_average}</h6>
                                </div>
                                <h6 className='genero'>Gênero: {detalhes.genres.map(genero=>{return genero.name + ' | '})}</h6>

                                <MdFavorite className='iconFavorito' onClick={favoritar}/>
                            </div>
                            
                            <div className='overviewContainer'>
                                <div>
                                    <h1>{detalhes.title}</h1>
                                    <h4>{detalhes.tagline}</h4>
                                    <p>{detalhes.overview}</p>
                                </div>
                                <button onClick={handleTrailer}>Trailer</button>                       
                                
                                <ReactPlayer id='video' url={trailer} width='100%' height={400}/>                                
                            </div>
                        </span>                    
                    </div>                
            </span>
        </section>
    )
}