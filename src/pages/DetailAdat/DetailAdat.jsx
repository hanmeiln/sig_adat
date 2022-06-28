import React, { useEffect, useState } from "react";
import "./detailadat.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Gallery from "../../components/gallery/Gallery";
import { publicRequest } from "../../requestMethods";
import { useLocation } from "react-router-dom";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const DetailAdat = () => {
    const [value, setValue] = useState(0);
    const [culture, setCulture] = useState({});
    const location = useLocation();
    const id = location.pathname.split("/")[2];
    // console.log(culture);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const photos = [
        "https://www.99.co/blog/indonesia/wp-content/uploads/2020/11/egrang.jpg",
        "https://www.99.co/blog/indonesia/wp-content/uploads/2020/11/egrang.jpg",
        "https://www.99.co/blog/indonesia/wp-content/uploads/2020/11/egrang.jpg",
    ];
    const videos = [
        "https://www.youtube.com/embed/D4jq5Bd9bTA",
        "https://www.youtube.com/embed/D4jq5Bd9bTA",
        "https://www.youtube.com/embed/D4jq5Bd9bTA",
    ];

    useEffect(() => {
        const getAllCultures = async () => {
            try {
                const res = await publicRequest.get(`/adat/find/${id}`);
                setCulture(res.data);
            } catch (err) {}
        };
        getAllCultures();
    }, []);

    return (
        <>
        <Navbar />
        <div className="cultureDetail">
            <div className="stripe"></div>
            <div className="cultureDetail-container">
                <div className="heading">

                    <h1>{culture?.name}</h1>
                    <div className="info-top">
                        <div className="infos">
                            {"Nomor " + culture?.reg_num || "-"}
                        </div>
                        <div className="infos">
                            {"Tahun : " + culture?.year || "-"}
                        </div>
                        <div className="infos"> 
                            {"Provinsi : " + culture?.province?.name || "-"}
                        </div>
                    </div>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                        <Tabs value={value} onChange={handleChange}>
                            <Tab label="Deskripsi" />
                            <Tab label="Foto" />
                            <Tab label="Video" />
                        </Tabs>
                    </Box>
                </div>
                <div className="tab-container">
                    {value === 0 ? (
                        <div className="description">
                            <p>
                                {culture.desc ||
                                    "Belum ada deskripsi tentang adat ini"}
                            </p>
                        </div>
                    ) : value === 1 ? (
                        <div className="img-container">
                        <img
                            src={
                                culture.img ===
                                    "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/" ||
                                !culture.img
                                    ? "https://dpwfkdtjabar.com/assets/images/artikel/no-image.png"
                                    : culture.img
                            }
                            alt=""
                        />
                        {
                            culture.imgs.length > 0 ? (
                            <Gallery images={culture.imgs} />
                        ) : (
                            "Belum ada foto-foto tentang adat ini"
                        )
                        }
                        </div>

                    ) : (
                        <div className="videos-container">
                            {culture.videos.length > 0
                                ? culture?.videos.map((video) => (
                                      <iframe
                                          width="320"
                                          height="215"
                                          src={video}
                                      ></iframe>
                                  ))
                                : "Belum ada video tentang permainan ini"}
                        </div>
                    )}''
                </div>
            </div>
        </div>
        <Footer />
        </>
    );
};

export default DetailAdat;