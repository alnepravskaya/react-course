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

export const App = () =>  {
    return <Router basename="/calendar">
        <Switch>
            <Route path="/movie/:id">
                <MoviePage/>
            </Route>
            <Route path="/search/:searchBy/:sortBy/:query" >
                <SearchPage/>
            </Route>
            <Route path="" >
                <SearchPage/>
            </Route>
        </Switch>
        <Footer/>
    </Router>;
};

ReactDOM.render(<App/>, document.getElementById('root'));

