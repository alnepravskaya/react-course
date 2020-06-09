import React from "react";
import style from "./style.less"
import {Radiogroup} from "../radiogroup"
import {Logo} from "../logo"
import {GetMoviesList} from "../../api.service"
import cx from "classnames";
import {withRouter} from "react-router-dom";

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            searchByValue: props.match.params.searchBy || 'title',
            sortByValue: props.match.params.sortBy || 'vote_average',
            query: props.match.params.query || ''
        }
        if (this.state.query) {
            this.handleSubmit()
        }
    }

    handleSubmit(event) {
        event && event.preventDefault();
        this.props.history.push(`/search/${this.state.searchByValue}/${this.state.sortByValue}/${this.state.query}`)
        GetMoviesList({
            value: this.state.query,
            searchByValue: this.state.searchByValue,
            sortByValue: this.state.sortByValue
        });
    }

    changeActiveButton(value) {
        this.setState({searchByValue: value})
    }

    changeActiveButtonSortBy(value) {
        this.setState({sortByValue: value}, this.handleSubmit.bind(this))
    }


    render() {
        const buttonsSearchBy = [
            {title: 'Title', value: 'title'},
            {title: 'Genre', value: 'genres'}
        ];
        const buttonsSortBy = [
            {title: 'Release date', value: 'release_date'},
            {title: 'Rating', value: 'vote_average'}
        ];

        return <div className={style.search}>
            <div className={cx('wrapper', style.searchBox)}>
                <Logo className={style.logo}/>
                <div className="contentPadding">
                    <h2>FIND YOUR MOVIE</h2>
                    <form onSubmit={this.handleSubmit}>
                        <input
                            type="text"
                            placeholder="Search"
                            className={style.input}
                            value={this.state.query}
                            onChange={event => this.setState({query: event.target.value})}
                        />
                        <input type="submit" value="Search" className={style.button}/>
                        <Radiogroup text="search by" buttons={buttonsSearchBy} value={this.state.searchByValue}
                                    active={this.changeActiveButton.bind(this)}/>
                    </form>
                </div>

            </div>
            <div className={style.foundInfo}>
                <div className={cx('wrapper', style.alignment, 'contentPadding')}>
                    {this.props.cardsLength !== 0 && <div className={style.info}>{this.props.cardsLength} movie found</div>}
                    <Radiogroup text="Sort by" buttons={buttonsSortBy} value={this.state.sortByValue}
                                className={style.radiogroup}
                                active={this.changeActiveButtonSortBy.bind(this)}/>
                </div>
            </div>
        </div>
    }
}

export default withRouter(Search)

