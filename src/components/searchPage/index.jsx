import React from 'react';
import Search from '../search';
import {Cards} from '../cards';
import {ErrorBoundary} from 'react-error-boundary';
import {GetMoviesList} from '../../api.service';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
            searchByValue: props.match.params.searchBy || 'title',
            sortByValue: props.match.params.sortBy || 'vote_average',
            query: props.match.params.query || ''
        };
    }

    async componentDidMount() {
        if (this.state.query !== '') {
            this.getMoviesList({
                query: this.state.query,
                searchByValue: this.state.searchByValue,
                sortByValue: this.state.sortByValue
            });
        }
    }

    async getMoviesList({searchByValue, sortByValue, query}) {
        if (query !== '') {
            const cards = await GetMoviesList({
                query,
                searchByValue,
                sortByValue
            });
            this.setState({cards: cards.data});
        }
    }

    submitHandler({searchByValue, sortByValue, query}) {
        this.props.history.push(`/search/${searchByValue}/${sortByValue}/${query}`);
        this.getMoviesList({searchByValue, sortByValue, query});
    }


    render() {
        let {cards} = this.state;
        return <ErrorBoundary>
            <div className="header">
                <Search cardsLength={cards.length}
                    submit={this.submitHandler.bind(this)}
                />
            </div>
            <Cards cards={cards}/>
        </ErrorBoundary>;
    }
}

export default withRouter(SearchPage);

SearchPage.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
};
