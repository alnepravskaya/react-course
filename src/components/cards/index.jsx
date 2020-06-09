import React from "react";
import style from "./style.less"
import {Card} from "./companents/card"
import cx from 'classnames'


export const Cards = (props) => (
    <>
        {props.cards && props.cards.length !== 0 &&
        <div className={style.cards}>
            <div className="wrapper">
                <div className={style.alignment}>
                    {props.cards.map((posts, i) => {
                        return <Card posts={posts} key={i}/>
                    })}
                </div>
            </div>
        </div>
        }
        {props.cards && props.cards.length === 0 &&
        <div className={cx('wrapper', style.center)}>
            <div className={style.textInfo}>No films found</div>
        </div>
        }
    </>
)