import React from 'react';
import Layout from '@components/Layout/Layout'
import { dataInfo } from './constant';
import Card from './Card/Card';
import styles from './styles.module.scss'
const info = () => {
    const {container} = styles
    return (
        <div >
            <Layout>
                <div className={container}>
                    {dataInfo.map((i, index) => {
                        return <Card title = {i.title} description={i.description} src={i.src}/>
                    })}
                </div>
            </Layout>
        </div>
    );
};

export default info;