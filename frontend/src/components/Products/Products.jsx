import React from 'react';
import Layout from '@components/Layout/Layout'
import CountDownTimer from '@components/CountDownTimer/CountDownTimer';
import styles from './styles.module.scss'
import CountDownBanner from '@components/CountDownBanner/CountDownBanner';
import ProductItems from '../ProductItems/ProductItems';

const Products = ({data}) => {
    const { container, container_items } = styles
    const targetDate = '2025-12-31T00:00:00'
    console.log(data)
    return (
        <Layout>
            <div className={container}>
                <CountDownBanner />
                <div className={container_items}>
                    {data.map((i) => (
                         <ProductItems key={i.id} src={i.images[0]} prevSrc={i.images[1]} name={i.name} price={i.price}/>
                    ))}
                   
                </div>
            </div>
        </Layout>
    );
};

export default Products;