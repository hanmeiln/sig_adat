import Footer from "../components/footer/Footer";
import LandingPageContent from "../components/landingpage/LandingPageContent";
// import LandingPageContent2 from "../components/landingpage/LandingPageContent2";
import Widget from "../components/widget/Widget";
import Navbar from "../components/navbar/Navbar";
import './tentang.scss';
import LandingPageContent2 from "../components/landingpage/LandingPageContent2";

const Tentang = () => {
    return (
        <div className="tentang">
            <div className="container">
                <Navbar />
                <LandingPageContent />
                <div className="widgets">
                    <Widget type='admin'/>
                    <Widget type='adat'/>
                    <Widget type='provinsi'/>
                </div>
                <LandingPageContent2 />
                <Footer />
            </div>
        </div>
    );
};

export default Tentang;