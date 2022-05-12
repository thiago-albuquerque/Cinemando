// import { Link } from 'react-router-dom';
import './header.css';

import { useState } from 'react';
import { withRouter} from 'react-router-dom';

import { BsSearch } from 'react-icons/bs';

function Header(props){
    const [search, setSearch] = useState('');

    function handleSearch(event){
        setSearch(event.target.value);
    }

    function buscar(){
        props.history.push('/busca');
    }

    return(
        <header>
            <form className='inputContainer' onSubmit={buscar}>
                <input type='text' name='query' id='search' onChange={handleSearch}/>
                <button type='submit'>
                    <BsSearch className='iconSearch'/>
                </button>
             </form>

            <span>
                <a href='/'>Home</a>
                <a href='/populares'>Populares</a>
                <a href='/maisvotados'>Mais votados</a>
                <a href='/favoritos'>Favoritos</a>
            </span>            
        </header>
    )
}

export default withRouter(Header);