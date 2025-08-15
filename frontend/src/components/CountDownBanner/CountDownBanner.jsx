import React from 'react';
import styles from './styles.module.scss'
import CountDownTimer from '@components/CountDownTimer/CountDownTimer'
import Button from '@components/Button/Button'
const CountDownBanner = () => {
    const {container,container_timer, title} = styles 
    const targetDate = '2025-12-31T00:00:00'
    return (
        <div className={container}>
            <div className={container_timer}>
                <CountDownTimer targetDate={targetDate} />
            </div>
            <h2 className={title}>The Classics Make A Comeback</h2>
            <Button content={'Buy now'} />
        </div>
    );
};

export default CountDownBanner;