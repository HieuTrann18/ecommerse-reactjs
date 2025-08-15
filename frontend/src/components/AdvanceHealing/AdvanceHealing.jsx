import React from 'react';
import Layout from '@components/Layout/Layout'
import styles from './styles.module.scss'
const AdvanceHealing = () => {
    const {container, headline, des,container_middle_box, title} = styles
    return (
        <Layout>
            <div className={container}>
                <div className={headline}></div>
                <div className={container_middle_box}>
                    <p>don't miss super offers</p>
                    <h2>Our best products</h2>
                </div>
                <div className={headline}></div>
            </div>
        </Layout>
    );
};

export default AdvanceHealing;