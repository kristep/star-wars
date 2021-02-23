import React from "react";
import PropTypes from "prop-types";

import Button from "../button/Button";

import "./tablePagination.scss";

function TablePagination(props) {
  const {
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    pageIndex,
  } = props;

  return (
    <div className="pagination">
      <div className="pagination__buttons">
        <Button
          handleClick={() => gotoPage(0)}
          isDisabled={!canPreviousPage}
          ariaLabel={"First page"}
          pagination
        >
          <span>≪</span>
        </Button>
        <Button
          handleClick={() => previousPage()}
          isDisabled={!canPreviousPage}
          ariaLabel={"Previous page"}
          pagination
        >
          <span>⊲</span>
        </Button>
        <span className="pagination__info">
          page {pageIndex + 1} of {pageOptions.length}
        </span>
        <Button
          handleClick={() => nextPage()}
          isDisabled={!canNextPage}
          ariaLabel={"Next page"}
          pagination
        >
          <span>⊳</span>
        </Button>
        <Button
          handleClick={() => gotoPage(pageCount - 1)}
          isDisabled={!canNextPage}
          ariaLabel={"Last page"}
          pagination
        >
          <span>≫</span>
        </Button>
      </div>
    </div>
  );
}

TablePagination.propTypes = {
  canPreviousPage: PropTypes.bool,
  canNextPage: PropTypes.bool,
  pageOptions: PropTypes.array,
  pageCount: PropTypes.number,
  gotoPage: PropTypes.func,
  nextPage: PropTypes.func,
  previousPage: PropTypes.func,
  pageIndex: PropTypes.number,
};

export default TablePagination;
