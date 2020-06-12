import React from 'react';
import Search from '../search';
import {Cards} from '../cards';
import {ErrorBoundary} from 'react-error-boundary';

export class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };

        this.gotMoviesListHandler = (event) => {
            this.setState({
                cards: event.detail.data
            });
        };

        document.body.addEventListener('gotMoviesList', this.gotMoviesListHandler);
    }

    componentWillUnmount() {
        document.body.removeEventListener('gotMoviesList', this.gotMoviesListHandler);
    }

    render() {
        return <ErrorBoundary>
            <div className="header">
                <Search cardsLength={this.state.cards.length}/>
            </div>
            <Cards cards={this.state.cards}/>
        </ErrorBoundary>;
    }
}

