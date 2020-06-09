import React from "react";
import style from "./style.less"
import cx from 'classnames'
import {Movie} from "./components/movie";
import {Cards} from "../cards";
import {Route, withRouter} from "react-router-dom";
import {getMovieInfo, GetMoviesList} from "../../api.service";
import {ErrorBoundary} from "react-error-boundary";



class MoviePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cards:[],
            selectedMovie: {
                id:props.match.params.id,
                genres:''
            }
        }
        this.gotMoviesListHandler = (event) => {
            this.setState({
                cards: event.detail.data
            })
        }
        this.gotMovieInfoHandler = (event) =>{
            this.setState({
                selectedMovie: event.detail
            })
            GetMoviesList({
                genres:this.state.selectedMovie.genres.join('%2C%20').replace(' ','%20')
            });
        }
        document.body.addEventListener("gotMovieInfo", this.gotMovieInfoHandler);
        document.body.addEventListener("gotMoviesList",this.gotMoviesListHandler)
        if (this.state.selectedMovie.id) {
            getMovieInfo(this.state.selectedMovie.id)
        }
    }

    componentWillUnmount() {
        document.body.removeEventListener("gotMoviesList", this.gotMoviesListHandler)
        document.body.removeEventListener("gotMovieInfo", this.gotMovieInfoHandler)
    }
    render() {
        return <ErrorBoundary>
            <div className={cx('header', style.movieHeader)}>
                <Movie movie={this.state.selectedMovie}/>
            </div>
            <Cards cards={this.state.cards}/>
        </ErrorBoundary>
    }
}
export default withRouter(MoviePage)

