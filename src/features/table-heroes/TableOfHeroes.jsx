import React, { useState, useEffect, useMemo } from "react";

import { useFetch } from "../../utils/useFetch";
import Table from "../../components/table/Table";

const TableOfHeroes = () => {
  const [data, setData] = useState([]);
  const [url, setUrl] = useState("http://swapi.dev/api/people");

  const { response, isLoading } = useFetch(url);

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        width: "30%",
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
        width: "30%",
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

  return <Table columns={columns} data={data} isLoading={isLoading} />;
};

export default TableOfHeroes;
