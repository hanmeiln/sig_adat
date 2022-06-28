import "./datatable.scss";
import { DataGrid } from "@mui/x-data-grid";
//import { userColumns, userRows } from "../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";

const Datatable = ({ list, columns }) => {
  const [inputSearch, setInputSearch] = useState("");
  const [province, setProvince] = useState("");
  const [year, setYear] = useState("");
  // const [list, setList] = useState([]);

  // const dispatch = useDispatch();
  // const { provinces } = useSelector((state) => state.provinces);

  // const [data] = useState(userRows);
  // console.log(cultures);
  // console.log(provinceColumns);

  const actionColumn = [
    {
      field: "action",
      headerName: "",
      width: 80,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link
              to={`/dataadat/${params.row._id}`}
              style={{ textDecoration: "none" }}
            >
              <div className="viewButton">Lihat</div>
            </Link>
          </div>
        );
      },
    },
  ];
  return (
    <div className="datatable">
      <DataGrid
        className="datagrid"
        getRowId={(row) => row._id}
        rows={list}
        columns={columns.concat(actionColumn)}
        pageSize={9}
        rowsPerPageOptions={[9]}
        // checkboxSelection
      />
    </div>
  );
};

export default Datatable;