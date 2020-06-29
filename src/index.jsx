import React from 'react';
import ReactDOM from 'react-dom';
import './style.global.less';
import {Footer} from './components/footer';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import MoviePage from './components/moviePage';
import SearchPage from './components/searchPage';

export const App = () => {
    return <Router>
        <Switch>
            <Route path="/movie/:id" component={MoviePage}/>
            <Route path="/search/:searchBy/:sortBy/:query" component={SearchPage}/>
            <Route path="" component={SearchPage}/>
        </Switch>
        <Footer/>
    </Router>;
};

ReactDOM.render(<App/>, document.getElementById('root'));

