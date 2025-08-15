import React from 'react';
import Layout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import ProductItems from '../ProductItems/ProductItems';
const PopularProducts = ({data}) => {
    const {container} = styles
    console.log('da nhan data', data)
    return (
        <Layout>
            <div className={container}>
                {data.map((i) => (
                    <ProductItems
                        key={i.id}
                        src={i.images[0]}
                        prevSrc={i.images[1]}
                        name={i.name}
                        price={i.price}
                    />
                ))}
            </div>
        </Layout>
    );
};

export default PopularProducts;