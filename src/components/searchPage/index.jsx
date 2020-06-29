import React from 'react';
import Search from '../search';
import {Cards} from '../cards';
import {ErrorBoundary} from 'react-error-boundary';
import {GetMoviesList} from '../../api.service';
import PropTypes from 'prop-types';

class SearchPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards: [],
        };
    }

    async componentDidMount() {
        if (this.props.match) {
            const {params} = this.props.match;
            this.setState({
                searchByValue: params.searchBy || 'title',
                sortByValue: params.sortBy || 'vote_average',
                query: params.query || ''
            });

            if (this.state.query) {
                await  this.getMoviesList({
                    query: this.state.query,
                    searchByValue: this.state.searchByValue,
                    sortByValue: this.state.sortByValue
                });
            }
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
                <Search cardsLength={cards.length} match={this.props.match}
                    submit={this.submitHandler.bind(this)}
                />
            </div>
            <Cards cards={cards}/>
        </ErrorBoundary>;
    }
}

export default SearchPage;

SearchPage.propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
};
