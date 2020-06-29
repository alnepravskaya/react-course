import React from 'react';
import style from './style.less';
import cx from 'classnames';
import {Movie} from './components/movie';
import {Cards} from '../cards';
import {getMovieInfo, GetMoviesList} from '../../api.service';
import {ErrorBoundary} from 'react-error-boundary';
import PropTypes from 'prop-types';


class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards:[],
            selectedMovie: {
                id:props.match.params.id,
                genres:''
            }
        };
    }

    componentDidUpdate(prevProps) {
        if (!prevProps || (prevProps && this.props.match.params.id !== prevProps.match.params.id)) {
            this.selectedMovie(this.props.match.params.id);
        }
    }

    componentDidMount(){
        this.selectedMovie();
    }

    async selectedMovie(id){
        const moviesId = id || this.state.selectedMovie.id;
        const selectedMovie = await getMovieInfo(moviesId);
        const cards  = await GetMoviesList({
            genres: selectedMovie.genres
        });
        this.setState({selectedMovie, cards:cards.data});
    }

    render() {
        const {selectedMovie, cards} = this.state;
        return <ErrorBoundary>
            <div className={cx('header', style.movieHeader)}>
                <Movie movie={selectedMovie}/>
            </div>
            <Cards cards={cards}/>
        </ErrorBoundary>;
    }
}


export default MoviePage;

MoviePage.propTypes = {
    match: PropTypes.object,
};
