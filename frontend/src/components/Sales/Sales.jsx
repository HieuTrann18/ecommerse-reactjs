import React, { useEffect, useState, useRef } from 'react';
import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import useTranslateX from '../../hooks/useTranslateX';
const Sales = () => {
    const {container, container_content, title, description} = styles
    const {  translateXPosition,handleTranslateX,scrollPosition} = useTranslateX()

    useEffect(() => {
        handleTranslateX()
    },[scrollPosition])

    return (
        <div className={container}>
            <div style={{transform: `translateX(${translateXPosition}px)`, transition: 'transform 0.5s ease'}}>
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg" alt="" />
            </div>
            <div className={container_content}>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={description}>Libero sed faucibus facilisis fermentum. Est nibh sed massa sodales.</p>
                <Button content={'Read more'} isPrimary={false} />
            </div>
            <div style={{transform: `translateX(-${translateXPosition}px)`, transition: 'transform 0.5s ease'}}>
                <img src="https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg" alt="" />
            </div>
        </div>
    );
};

export default Sales;