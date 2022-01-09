import { BrowserRouter, Route, Switch}from 'react-router-dom';
import Home from './pages/Home';
import Header from './component/Header';
import Filme from './pages/Filme';
import favoritos from './pages/Favoritos';
import NotFound from './pages/NotFound';

const Routes = () => {
    return(
        <BrowserRouter>
           <Header/>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filmes/:id" component={Filme}/>
                <Route exact path="/favoritos" component={favoritos}/>
                <Route path="*" component={NotFound}/>
           
            </Switch>
        </BrowserRouter>
        
    )

}

export default Routes;