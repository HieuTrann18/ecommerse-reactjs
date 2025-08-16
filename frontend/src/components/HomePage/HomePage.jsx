import React, { useEffect, useState } from 'react';
import Header from '@components/Header/Header'
import Footer from '@components/Footer/Footer'
import Banner from '@components/Banner/Banner'
import Info from '@components/Info/Info'
import AdvanceHealing from '@components/AdvanceHealing/AdvanceHealing';
import Products from '@components/Products/Products';
import {getProduct} from '../../apis/productsService';
import PopularProducts from '../PopularProducts/PopularProducts';
import Sales from '../Sales/Sales';
const HomePage = () => {

  const [listProduct, setListProduct] = useState([])

  useEffect(() => {
    getProduct().then((res) => {
      setListProduct(res.contents)
    })
  },[])
  console.log('data', listProduct)

  return (
    <div>
      <div>
        <Header />
        <Banner />
        <Info />
        <AdvanceHealing />
        <Products data={listProduct.slice(0,2)}/>
        <PopularProducts data={listProduct.slice(3,11)}/>
        <Sales />
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;