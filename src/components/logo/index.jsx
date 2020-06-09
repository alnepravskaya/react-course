import React from "react";
import style from "./style.less"
import cx from 'classnames'

export const Logo = (props) => {
        return <div  className={cx(style.logo, props.className)}>
           <span className={style.bold}>netflix</span>roulette
        </div>
}

