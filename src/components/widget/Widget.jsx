import './widget.scss'

const Widget = ({ type }) => {
    let data;

    //temporary
    // const amount = 1000;

    switch (type) {
        case "admin":
            data = {
                title: "Data Warisan Budaya",
                isMoney: true,
                amount: 12.683,
            };
            break;
        case "adat":
            data = {
                title: "Data Adat Istiadat",
                isMoney: true,
                amount: 1.621,
            };
            break;
        case "provinsi":
            data = {
                title: "Jumlah Provinsi",
                isMoney: false,
                amount: "34 provinsi",
            };
            break;
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{data.amount}{data.isMoney && " data"}</span>
        </div>
    </div>
  )
}

export default Widget