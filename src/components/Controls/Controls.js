import React from 'react';
import s from './Controls.module.css';

const Controls = ({onGood, onNeutral, onBad}) => (
    <div className="container">
        <h1 className={ s.title}>Please leave feedback</h1>
        <div className={s.buttonList}>
            <button type="button" id="Good" className={s.button} onClick={onGood}>Good</button>
            <button type="button" id="Neutral" className={ s.button} onClick={onNeutral}>Neutral</button>
            <button type="button" id="Bad" className={ s.button} onClick={onBad}>Bad</button>
            </div>
    </div>
);
export default Controls;