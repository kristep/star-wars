import React, { useState, useEffect, useMemo } from "react";

import { useFetch } from "../../utils/useFetch";
import Table from "../../components/table/Table";

const TableOfHeroes = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://swapi.dev/api/people");

  const { response } = useFetch(url);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Birth data",
        accessor: "birth_year",
      },
      {
        Header: "Gender",
        accessor: "gender",
      },
      {
        Header: "Home world",
        accessor: "homeworld",
        width: 150,
        Cell: (row) => {
          const { response: world, isLoading } = useFetch(row.value);
          if (isLoading) return <>...</>;
          if (row.value) return <>{world.name}</>;
        },
      },
    ],
    []
  );

  useEffect(() => {
    response.results &&
      setData((prevData) => [...prevData, ...response.results]);
    response.next && setUrl(response.next);
  }, [response.results, response.next]);

  return <Table columns={columns} data={data} />;
};

export default TableOfHeroes;
