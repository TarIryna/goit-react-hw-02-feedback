import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, percentage}) => (
     <div className="container">
        <h2 className={s.title}>Statisctics</h2>
            <p className={ s.statInfo}>Good: {good}</p>
            <p className={ s.statInfo}>Neutral: {neutral}</p>
            <p className={s.statInfo}>Bad: {bad}</p>
            <p className={s.statInfo}>Total: {total}</p>
            <p className={s.statInfo}>Positive Feedback: {percentage}%</p>
    </div>
);

Statistics.defaultProps = {
    percentage: 0,
}

export default Statistics;