import React from "react";
import PropTypes from "prop-types";

import { useTable, useSortBy } from "react-table";

import "./table.scss";

const Table = ({ columns, data }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headers,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  );

  if (!data || data.length === 0) {
    return <h2>Error</h2>;
  }
  return (
    <table {...getTableProps()} className="table">
      <thead>
        <tr className="table__row">
          {headers.map((column, i) => (
            <th
              key={i}
              {...column.getHeaderProps(column.getSortByToggleProps())}
              className="table__head"
            >
              {column.render("Header")}
              <span>
                {column.isSorted ? (column.isSortedDesc ? "▼" : "▲") : ""}
              </span>
            </th>
          ))}
        </tr>
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            // eslint-disable-next-line
            <tr {...row.getRowProps()} className="table__row">
              {row.cells.map((cell, i) => {
                return (
                  <td key={i} {...cell.getCellProps()} className="table__data">
                    {cell.render("Cell")}
                  </td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;

Table.propTypes = {
  columns: PropTypes.array,
  data: PropTypes.array,
};
