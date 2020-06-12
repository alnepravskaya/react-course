import React from 'react';
import Search from '../search';
import {Cards} from '../cards';
import {ErrorBoundary} from 'react-error-boundary';

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {cards: [], cardsLength: 0};
    }

    render() {
        return <ErrorBoundary>
            <div className="header">
                <Search cardsLength={this.state.cardsLength}/>
                <Cards cards={this.state.cards}/>
            </div>
        </ErrorBoundary>;
    }
}

