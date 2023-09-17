import React from 'react';
import '../index';
import Main from '../components/Main/Main';
import Hero from 'components/Hero/Hero';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <section className="mainSection">
        <Hero></Hero>
        <Main></Main>
      </section>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};
export default Home;
