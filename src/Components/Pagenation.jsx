import React from "react";
import _ from "loadsh";
import propType from "prop-type";
const Pagenation = ({ pageSize, onPageChange, currentPage, itemsCount }) => {
  const pagesize = Math.ceil(itemsCount / pageSize);
  const pages = _.range(1, pagesize + 1);

  if (0 === pageSize && null === pages) return null;
  else if (1 === pages.length) return null;
  else {
    return (
      <>
        <ul className="pagination">
          {pages.map((page) => {
            return (
              <li
                key={page}
                className={
                  page === currentPage ? "page-item active" : "page-item"
                }
                onClick={() => {
                  onPageChange(page);
                }}
              >
                <a className="page-link" href="#">
                  {page}
                </a>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
};

Pagenation.propType = {
  pageSize: propType.number,
  onPageChange: propType.func,
  currentPage: propType.number,
  itemsCount: propType.number,
};
export default Pagenation;
