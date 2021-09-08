import React from 'react';
import s from './Notification.module.css';

const Notification = ({ message }) => (
       <div class="container">
              <p className={s.text}>{message}</p>
       </div>
);


export default Notification;