import React, { useEffect, useState } from "react";
import Navbar from "../../components/navbar/Navbar"
//import Footer from "../Footer/Footer.js";
import Datatable from "../../components/datatable/Datatable";
//import React, { useEffect, useState } from "react";
//import Ritus from "../DataRitus/Ritus";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SelectFilter from "../../components/selectfilter/SelectFilter";
//import provinces from "../../../data/Indonesia.json";
// import ritus from "../../../data/ritus.json";
import { publicRequest } from "../../requestMethods";
import CircularProgress from "@mui/material/CircularProgress";
import { tahun } from "../../utils/naming";
import "./dataadat.scss";
import Footer from "../../components/footer/Footer";
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';

const DataAdat = () => {
  const [province, setProvince] = useState("");
  const [year, setYear] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [list, setList] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cultures, setCultures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  console.log(cultures);

  useEffect(() => {
    const getAllProvinces = async () => {
      try {
        const res = await publicRequest.get(`/province`);
        setProvinces(res.data);
      } catch (err) {}
    };
    getAllProvinces();
  }, []);

  useEffect(() => {
    const getAllCultures = async () => {
      setIsLoading(true);
      try {
        const res = await publicRequest.get(`/adat`);
        setList(res.data);
        setCultures(res.data);
        if (res) {
          setIsLoading(false);
        }
      } catch (err) {}
    };
    getAllCultures();
  }, []);

  const years = [
    {
      id: 1,
      label: 2018,
      value: 2018,
    },
    {
      id: 2,
      label: 2019,
      value: 2019,
    },
  ];

  const reset = () => {
    setProvince("");
    setYear("");
  };

  useEffect(() => {
    const applyFilters = () => {
      let updatedList = cultures;

      if (year) {
        updatedList = updatedList.filter((item) => item.year === year);
      }
      if (province) {
        updatedList = updatedList.filter(
          (item) => item.province._id === province
        );
      }
      if (inputSearch) {
        updatedList = updatedList.filter(
          (item) =>
            item.name.toLowerCase().search(inputSearch.toLowerCase().trim()) !==
            -1
        );
      }

      setList(updatedList);
    };
    applyFilters();
  }, [year, province, inputSearch]);

  const provinceColumns = [
    // { field: "_id", headerName: "ID", minWidth: 100, flex: 1 },
    {
      field: "reg_num",
      headerName: "No. Regist",
      minWidth: 50,
      // flex: 1,

      renderCell: (params) => {
        return params.row.reg_num || "-";
      },
    },
    {
      field: "year",
      headerName: "Tahun",
      minWidth: 50,
      // flex: 1,
      renderCell: (params) => {
        return params.row.year || "-";
      },
    },

    {
      field: "name",
      headerName: "Nama Adat",
      minWidth: 310,
      // flex: 1,

      renderCell: (params) => {
        return params.row.name;
      },
    },
    {
      field: "province",
      headerName: "Provinsi",
      minWidth: 200,
      // flex: 1,
      renderCell: (params) => {
        return params.row?.province?.name;
      },
    },

    {
      field: "desc",
      headerName: "Deskripsi",
      minWidth: 400,
      // flex: 1,
      renderCell: (params) => {
        return params.row.desc || "-";
      },
    },
  ];

  return (
    <div className="dataadat">
      <Navbar />
      <div className="list">
        <div className="top">
          <div className="search">
            <input
              type="text"
              value={inputSearch}
              onChange={(e) => setInputSearch(e.target.value)}
              placeholder="Cari nama adat.."
            />
            <SearchOutlinedIcon className="icon" />
          </div>
          <div className="filters">
            <SelectFilter
              options={provinces}
              label="Provinsi"
              value={province}
              setValue={setProvince}
            />
            <SelectFilter
              options={tahun(2010, 2021)}
              label="Tahun"
              value={year}
              setValue={setYear}
            />

            <button className="reset" onClick={reset}>
              <RestartAltRoundedIcon style={{width:"20px", height:"20px"}}/>
            </button>
            {/* <SelectFilter answer={answer} setAnswer={setAnswer} /> */}
          </div>
        </div>
      </div>
      <div className="tabel">
      <Datatable list={list} columns={provinceColumns} />
      </div>
      <Footer />
    </div>
  );
};

export default DataAdat;