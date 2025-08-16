import React from 'react';
import styles from './styles.module.scss';
import PayMethod from '@icons/images/pay-method.png'
import { dataMenu } from './constant';

const Footer = () => {
    const {container, footer_links, pay_method, copyright} = styles
    return (
        <div className={container}>
            <div>
                <img width={160} height={55} src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png' alt="" />
            </div>
            <div className={footer_links}>
                {dataMenu.map((i) => (
                    <a href={i.href}>{i.content}</a>
                ))}
            </div>
            <div className={pay_method}>
                <h3>Guaranteed safe ckeckout</h3>
                <img width={270} height={29} src={PayMethod} alt="" />
            </div>
            <div className={copyright}>
                <span>Copyright © 2024 XStore theme. Created by 8theme – WordPress WooCommerce themes.</span>
            </div>
        </div>
    );
};

export default Footer;