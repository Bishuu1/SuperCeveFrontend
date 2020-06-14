import React, { useState, useEffect } from 'react';
import { useTable, useSortBy } from 'react-table';
import { Row, Col, Button } from 'react-bootstrap';
import Pagination from '../common/Pagination';
const UserTable = ({ columns, data, dataPerPage }) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data }, useSortBy);

  // const [inputValue, setInputValue] = useState('');ç
  // const [filteredBy, setFilteredBy] = useState('');
  // const [orderedBy, setOrderedBy] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [renderedData, setRenderedData] = useState([]);
  const [indexFirstData, setIndexOfFirst] = useState(0);
  const [indexLastData, setIndexOfLast] = useState(dataPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const paginate = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    setIndexOfLast(data.length < dataPerPage ? data.length : dataPerPage);
    setFilteredData(rows);
  }, [data, dataPerPage, rows]);

  useEffect(() => {
    setRenderedData(filteredData.slice(indexFirstData, indexLastData));
  }, [filteredData, indexFirstData, indexLastData]);

  useEffect(() => {
    if (rows) {
      const indexOfLastData = currentPage * dataPerPage;
      const indexOfFirstData = indexOfLastData - dataPerPage;
      const currentData = filteredData.slice(indexOfFirstData, indexOfLastData);
      setIndexOfFirst(indexOfFirstData);
      setIndexOfLast(
        indexOfLastData < data.length ? indexOfLastData : data.length
      );
      setRenderedData(currentData);
    }
  }, [currentPage, data, dataPerPage, filteredData, rows]);

  return (
    <React.Fragment>
      <Row>
        <Col sm={3}>
          <Button variant="primary">Agregar usuarios</Button>{' '}
        </Col>
        <Col sm={{ span: 3, offset: 6 }}>
          <input type="text" placeholder="Buscar" />{' '}
        </Col>
      </Row>
      {data.length !== 0 && (
        <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
          <thead>
            {headerGroups.map((headerGroup) => (
              <tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    style={{
                      borderBottom: 'solid 3px red',
                      background: 'aliceblue',
                      color: 'black',
                      fontWeight: 'bold',
                    }}
                  >
                    {column.render('Header')}
                    <span>
                      {column.isSorted
                        ? column.isSortedDesc
                          ? ' 🔽'
                          : ' 🔼'
                        : ''}
                    </span>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {renderedData.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => {
                    return (
                      <td
                        {...cell.getCellProps()}
                        style={{
                          padding: '10px',
                          border: 'solid 1px gray',
                          background: 'papayawhip',
                        }}
                      >
                        {cell.render('Cell')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
      <Row>
        <Col>
          <Pagination
            dataPerPage={dataPerPage}
            totalData={filteredData.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default UserTable;
