import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './Components/Header';
import Home from './Pages/Home';
import Populares from './Pages/Populares';
import MaisVotados from './Pages/MaisVotados';
import Favoritos from './Pages/Favoritos';
import Busca from './Pages/Busca';
import Detalhes from './Pages/Detalhes';
import ScrollTop from './Components/ScrollTop';
import Footer from './Components/Footer';
import Error from './Pages/Error';

const Rotas = () => {
    return(
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/populares' component={Populares}/>
                <Route exact path='/maisvotados' component={MaisVotados}/>
                <Route exact path='/favoritos' component={Favoritos}/>
                <Route exact path='/busca' component={Busca}/>                
                <Route exact path='/movie/:id' component={Detalhes}/>                
                <Route path='*' component={Error}/>                
            </Switch>
            <ScrollTop/>
            <Footer/>
        </BrowserRouter>
    )
}

export default Rotas;