import React from 'react';
import Datatable from '../components/datatable/Datatable';
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

const DataAdat = () => {
  return (
    <div className='dataadat'>
        <Navbar />
        <Datatable />
        <Footer />
    </div>
  );
};

export default DataAdat;