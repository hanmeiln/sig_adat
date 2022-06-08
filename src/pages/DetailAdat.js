import React from 'react';
import Detail from '../components/detail/Detail';
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const DetailAdat = () => {
  return (
    <div className='detailadat'>
        <Navbar />
        <Detail />
        <Footer />
    </div>
  );
};

export default DetailAdat;