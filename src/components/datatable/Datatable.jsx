import './datatable.scss'
import { DataGrid } from '@mui/x-data-grid';
import { userColumns, userRows } from '../../datatablesource';
import { Link } from "react-router-dom";

const Datatable = () => {

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 100,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/detailadat" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
          </div>
        );
      },
    },
  ];

  return (
    <div className='datatable'>
       <DataGrid
        rows={userRows}
        columns={userColumns.concat(actionColumn)}
        pageSize={5}
        rowsPerPageOptions={[4]}
        // checkboxSelection
      />
    </div>
  )
}

export default Datatable;