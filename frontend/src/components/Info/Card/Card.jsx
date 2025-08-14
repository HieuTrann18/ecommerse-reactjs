import React from 'react';
import styles from '../styles.module.scss'
import truckIcon from '@icons/svgs/truck.svg'
const Card = ({title, description, src}) => {
    const {container_card, container_content, ttl, des} = styles
    return (
       <>
       <div className={container_card}>
            <img width={40} height={41} src={src} alt="" />
            <div className={container_content}>
                <div className={ttl}>{title}</div>
                <div className={des}>{description}</div>
            </div>
       </div>
       </>
    );
};

export default Card;