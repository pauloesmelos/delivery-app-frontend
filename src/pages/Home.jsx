import React from 'react';
import Category from '../components/category/Category';
import Food from '../components/food/Food';
import Footer from '../components/footer/Footer';
import Headline from '../components/headline/Headline';
import Hero from '../components/hero/Hero';
import Navbar from '../components/navbar/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Headline />
      <Food />
      <Category />
      <Footer />
    </div>
  )
}

export default Home;