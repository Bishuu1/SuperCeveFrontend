import React from 'react';
import { Pagination } from 'react-bootstrap';

const Paginate = ({ dataPerPage, totalData, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalData / dataPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination style={{ display: 'flex', float: 'right' }}>
      <Pagination.Prev
        onClick={() => currentPage !== 1 && paginate(currentPage - 1)}
      />
      {pageNumbers.map((number) => (
        <Pagination.Item
          key={number}
          onClick={() => paginate(number)}
          active={currentPage === number}
        >
          {number}
        </Pagination.Item>
      ))}
      <Pagination.Next
        onClick={() =>
          currentPage !== pageNumbers.length && paginate(currentPage + 1)
        }
      />
    </Pagination>
  );
};

export default Paginate;
