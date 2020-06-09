import React from "react";
import style from "./style.less"
import {Logo} from "../../../logo";
import {Link} from "react-router-dom";
import noPoster from "../../../../source/img/no-poster.jpg";
import cx from "classnames";

export const Movie = (props) => {
    return <div className={style.movieCard}>
            <div className="wrapper">
                <div className = {cx( style.line, style.margin)} >
                    <Logo className={style.logo}/>
                    <Link className={style.search} to="/"></Link>
                </div>
                <div className={style.line}>
                    <img src={props.movie.poster_path} className={style.picture} onError={(e) => {
                        e.target.setAttribute('src', noPoster)
                    }}/>
                    <div className={style.textInfo}>
                        <div className={style.line}>
                            <h1>{props.movie.title}</h1>
                            <div className={style.rating}>{props.movie.vote_average}</div>
                        </div>
                        <div className={style.tagline}>{props.movie.genres && props.movie.genres.join('&')}</div>
                        <div className={cx(style.line, style.flexCenter)}>
                            <div className={style.number}>{props.movie.release_date && props.movie.release_date.slice(0, 4)}</div>
                            <div className={style.value}>year</div>
                            <div className={style.number}>{props.movie.runtime||'-'}</div>
                            <div className={style.value}>min</div>
                        </div>
                        <div className={style.desc}>{props.movie.overview}</div>
                    </div>
                </div>
            </div>
        <div className={style.foundInfo}>
            <div className = {cx('wrapper', style.alignment, 'contentPadding')}>
               <div className={style.info}>Films by {props.movie.genres && props.movie.genres.join(', ')} genre</div>
            </div>
        </div>
        </div>
}
