import "./list.scss";
import React, { useEffect, useState } from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import SelectFilter from "../selectfilter/SelectFilter";
import CultureCard from "../culturecard/CultureCard";
import { publicRequest } from "../../requestMethods";
import { tahun } from "../../utils/naming";
import CircularProgress from "@mui/material/CircularProgress";
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';

const List = ({ province, setProvince }) => {
  // const [province, setProvince] = useState("");
  const [year, setYear] = useState("");
  const [inputSearch, setInputSearch] = useState("");
  const [list, setList] = useState([]);
  const [provinces, setProvinces] = useState([]);
  const [cultures, setCultures] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
  }, [year, province, inputSearch, cultures, isLoading]);

  return (
    <div className="list">
      <div className="top">
        <div className="search">
          <input
            type="text"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            placeholder="Cari adat.."
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
      <div className="card-container">
        {isLoading ? (
          <CircularProgress color="primary" size="2rem" thickness={5} />
        ) : (
          list.map((culture) => <CultureCard culture={culture} />)
        )}
      </div>
    </div>
  );
};

export default List;