import "./culturecard.scss";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LocationOnIcon from "@mui/icons-material/LocationOn";

const CultureCard = ({ culture }) => {
    const page = window.location.pathname.split("/")[1];
    // console.log(culture);

    return (
        <div className={page === "map" ? "card" : "card map"}>
            {/* <img
                src={
                    culture.img ===
                        "https://warisanbudaya.kemdikbud.go.id/dashboard/media/photos/" ||
                    !culture.img
                        ? "https://dpwfkdtjabar.com/assets/images/artikel/no-image.png"
                        : culture.img
                }
                alt="adat"
                srcset=""
            /> */}
            <div className="info">
                <div className="info-wrap">
                    <div className="info-top">
                        <div className="infos">
                            {/* <CalendarTodayIcon className="icon" /> */}
                            Tahun : 
                            {culture.year ? culture.year : "-"}
                        </div>
                        <div className="infos">
                            {/* <LocationOnIcon className="icon" /> */}
                            Provinsi : 
                            {culture.province
                                ? culture.province.name
                                : "-"}
                        </div>
                    </div>
                    <a
                        target="_blank"
                        href={`/dataadat/${culture._id}`}
                        rel="noreferrer"
                    >
                        <h1>{culture.name}</h1>
                    </a>
                    {culture.desc ? (
                        <p>{culture.desc.substring(0, 100)} ...</p>
                    ) : (
                        <p>Deskripsi belum tersedia</p>
                    )}
                </div>
                <div className="info-bottom">
                    <a
                        className="button"
                        target="_blank"
                        href={`/dataadat/${culture._id}`}
                        rel="noreferrer"
                    >
                        Lihat selengkapnya
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CultureCard;