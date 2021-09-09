import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({statNames, onBtnFeedback}) => (
    <div className="container">
        <h1 className={ s.title}>Please leave feedback</h1>
        <div className={s.buttonList}>
            {statNames.map((name) => (
                <button className={s.button} key={name} onClick={()=>onBtnFeedback(name)}>{name}</button>
            ))}
            </div>
    </div>
);
Controls.propTypes = {
    statNames: PropTypes.arrayOf(PropTypes.string),
    onBtnFeedback: PropTypes.func,
};
export default Controls;