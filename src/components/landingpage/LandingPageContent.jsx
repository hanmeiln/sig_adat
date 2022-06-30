import './LandingPageContent.scss'

const LandingPageContent = () => {
    return (
        <div className='lpcontent'>
            <div className='left'>
                <img src='https://cdn.dribbble.com/users/2104173/screenshots/7855181/media/fc140e3fc8d260348f1576ee928bbb54.png?compress=1&resize=1200x900&vertical=top' alt=''/>
            </div>
            <div className='right'>
                <div className='judul'>Warisan Budaya Tak Benda</div>
                <div className="subjudul">Pemetaan Adat Istiadat di Indonesia</div>
                <div className="isi">
                    Website ini berisi data adat istiadat di seluruh Indonesia. Terdapat data
                    adat istiadat berupa peta persebaran berdasarkan provinsi. 
                </div>
                <a href="/peta">
                    <button>Lihat Peta</button>
                </a>
                <a href="/dataadat">
                    <button>Lihat Data Adat</button>
                </a>
            </div>
        </div>
    );
};

export default LandingPageContent;