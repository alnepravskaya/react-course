import React from "react";
import style from "./style.less"
import {Logo} from "../logo"

export const Footer = () => {
    return <div className={style.footer}>
        <Logo className={style.logo}/>
    </div>
}

