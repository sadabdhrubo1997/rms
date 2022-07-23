import React,{useEffect} from 'react';
import '../../App.scss';
import Header from './Component/Header/Header';
import MenuBar from '../Partials/MenuBar/MenuBar';
import Categories from './Component/Categories/Categories';
import NewArrival from './Component/NewArrival/NewArrival';
import Director from './Component/Director/Director';
import OurClient from './Component/OurClient/OurClient';
import Footer from '../Partials/Footer/Footer';

const HomePage = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

  return (
    <div>
      <title>Home</title>
      <MenuBar/>
      <div className="content">
        <Header/>
        <Categories/>
        <NewArrival/>
        <Director/>
        <OurClient/>
        <Footer/>
      </div>


    </div>
  );
}

export default HomePage;
