import React from 'react';
import styles from './styles.module.scss'
import classNames from 'classnames'

const Button = ({content, isPrimary = true}) => {
    const {btn, primary_btn, secondary_btn} = styles
    return (
        <div>
            <button className={classNames(btn, {
                [primary_btn]: isPrimary,
                [secondary_btn]: !isPrimary
            })}>{content}</button>
        </div>
    );
};

export default Button;