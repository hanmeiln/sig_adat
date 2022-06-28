import Footer from "../../components/footer/Footer";
import List from "../../components/list/List";
import Navbar from "../../components/navbar/Navbar";
import Peta from "../../components/peta/Peta";
import React, { useState } from "react";
import './petaadat.scss';

const PetaAdat = () => {
    const [province, setProvince] = useState("");

    return (
        <div className="petaAdat">
            <Navbar />
            <div className="container">
                <Peta setProvince={setProvince}/>
                <List province={province} setProvince={setProvince} />
            </div>
            <Footer />
        </div>
    );
};

export default PetaAdat;