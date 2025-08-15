import React from 'react';
import Layout from '@components/Layout/Layout'
import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from './styles.module.scss'
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';

const Products = () => {
    const { container, container_items } = styles
    const targetDate = '2025-12-31T00:00:00'
    return (
        <Layout>
            <div className={container}>
                <CountDownBanner />
                <div className={container_items}>
                    <div>1</div>
                    <div>2</div>
                </div>
            </div>
        </Layout>
    );
};

export default Products;