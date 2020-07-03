import React from 'react';
import style from './style.less';
import cx from 'classnames';
import PropTypes from 'prop-types';

export const Radiogroup = (props) => (
    <div className={cx(style.radioGroup, props.className)}>
        <div className={style.text}>{props.text}</div>
        {props.buttons.map((button) => <div
            className={cx(style.radio, {[style.active]: button.value === props.value})}
            key={button.value}
            data-key={button.value}
            onClick={() => props.active(button.value)}
        >
            {button.title}
        </div>
        )}

    </div>
);

Radiogroup.propTypes = {
    className: PropTypes.string,
    text: PropTypes.string,
    value: PropTypes.string,
    buttons: PropTypes.array,
    button: PropTypes.object,
    active: PropTypes.func,

};
