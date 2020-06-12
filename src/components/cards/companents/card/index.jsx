import React from 'react';
import style from './style.less';
import noPoster from '../../../../source/img/no-poster.jpg';
import {Link} from 'react-router-dom';
import {getMovieInfo} from '../../../../api.service';
import PropTypes from 'prop-types';

export class Card extends React.Component {
    getMovieInfo(id){
        window.scrollTo({top: 0, behavior: 'smooth'});
        getMovieInfo(id);
    }

    render() {
        return <Link className={style.card} to={'/movie/' + this.props.posts.id} onClick={()=>this.getMovieInfo(this.props.posts.id)}>
            <img  src={this.props.posts.poster_path} className={style.picture} onError={(e) => {
                e.target.setAttribute('src', noPoster);

            }}/>
            <div>
                <div className={style.alignment}>
                    <div className={style.title}>{this.props.posts.title}</div>
                    <div className={style.year}>{this.props.posts.release_date.slice(0, 4)}</div>
                </div>
                <div className={style.tagline}>{this.props.posts.genres.join('&')}</div>
            </div>
        </Link>;
    }
}

Card.propTypes = {
    posts: PropTypes.shape({
        title: PropTypes.string,
        release_date: PropTypes.string,
        genres: PropTypes.array,
        id: PropTypes.number,
        poster_path: PropTypes.string,
    }),
};
