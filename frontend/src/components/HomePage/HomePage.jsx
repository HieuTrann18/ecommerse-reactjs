import React from 'react';
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Banner from '@components/Banner/Banner'
import styles from './styles.module.scss'
import Info from '@components/Info/Info'
import AdvanceHealing from '@components/AdvanceHealing/AdvanceHealing';
import Products from '@components/Products/Products';

const HomePage = () => {
  const {container} = styles
  return (
    <div>
      <div>
        <Header />
        <Banner />
        <Info />
        <AdvanceHealing />
        <Products />
      </div>
    </div>
  );
};

export default HomePage;