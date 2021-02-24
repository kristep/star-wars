import React, { useState, useEffect, useMemo } from "react";
import axios from "axios";

import { useFetch } from "../../utils/useFetch";
import Table from "../../components/table/Table";

import "./tableOfHeroes.scss";

const TableOfHeroes = () => {
  const [data, setData] = useState([]);
  const [tableData, setTableData] = useState([]);
  const [url, setUrl] = useState("http://swapi.dev/api/people");

  const { response, isLoading, error } = useFetch(url);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        width: "35%",
      },
      {
        Header: "Birth data",
        accessor: "birth_year",
        width: "22%",
      },
      {
        Header: "Gender",
        accessor: "gender",
        width: "18%",
      },
      {
        Header: "Home world",
        accessor: "homeworld",
        width: "25%",
      },
    ],
    []
  );

  const getWorldAndSetData = async (url, heroData) => {
    try {
      const response = await axios.get(url);
      heroData.homeworld = response.data.name;
      setTableData((prevData) => [...prevData, heroData]);
    } catch (error) {
      return;
    }
  };

  useEffect(() => {
    response.results &&
      setData((prevData) => [...prevData, ...response.results]);
    response.next && setUrl(response.next);
  }, [response.results, response.next]);

  useEffect(() => {
    if (response.count === data.length) {
      data.forEach((item) => {
        let heroData = {};

        heroData.name = item.name;
        heroData.birth_year = item.birth_year;
        heroData.gender = item.gender;

        getWorldAndSetData(item.homeworld, heroData);
      });
    }
  }, [data, response.count]);

  if (isLoading) {
    return <p className="table__loader">Loading...</p>;
  }
  if (error) {
    return <p className="table__loader">Failed to fetch data.</p>;
  }
  return (
    tableData.length !== 0 && (
      <div className="table-heroes">
        <Table columns={columns} data={tableData} />
      </div>
    )
  );
};

export default TableOfHeroes;
