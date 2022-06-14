import './widget.scss'

const Widget = ({ type }) => {
    let data;

    //temporary
    const amount = 1000;

    switch (type) {
        case "admin":
            data = {
                title: "Data Pencatatan",
                isMoney: true,
            };
            break;
        case "adat":
            data = {
                title: "Data Penetapan",
                isMoney: true,
            };
            break;
        case "provinsi":
            data = {
                title: "Total Data",
                isMoney: true,
            };
            break;
        default:
            break;
    }
  return (
    <div className='widget'>
        <div className="left">
            <span className='title'>{data.title}</span>
            <span className='counter'>{amount}{data.isMoney && " data"}</span>
        </div>
    </div>
  )
}

export default Widget