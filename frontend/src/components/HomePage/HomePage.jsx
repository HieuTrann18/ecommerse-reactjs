import React from 'react';
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Banner from '@components/Banner/Banner'
import styles from './styles.module.scss'

const HomePage = () => {
  const {container} = styles
  return (
    <div>
      <div>
        <Header />
        <Banner />
      </div>
    </div>
  );
};

export default HomePage;