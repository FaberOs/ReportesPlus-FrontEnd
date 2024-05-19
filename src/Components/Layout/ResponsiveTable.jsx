import { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "../../Styles/Components/Table.css";
import { useThemeContext } from "../../ThemeContext";

function ResponsiveTable({ data, lista }) {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxPages = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const renderPaginationItems = () => {
    const pages = [];
    let startPage, endPage;

    if (totalPages <= maxPages) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= Math.ceil(maxPages / 2)) {
        startPage = 1;
        endPage = maxPages;
      } else if (currentPage + Math.floor(maxPages / 2) >= totalPages) {
        startPage = totalPages - maxPages + 1;
        endPage = totalPages;
      } else {
        startPage = currentPage - Math.floor(maxPages / 2);
        endPage = currentPage + Math.floor(maxPages / 2);
      }
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(
        <Pagination.Item
          key={i}
          active={i === currentPage}
          onClick={() => handleClick(i)}
        >
          {i}
        </Pagination.Item>
      );
    }

    return pages;
  };

  return (
    <div className={`table-container ${isDarkTheme ? "dark-table" : ""}`} style={{overflow: "hidden", width: "100%"}}>
      <Table
        responsive
        bordered
        hover
        variant={contextTheme === "Dark" ? "dark" : "light"}
      >
        <thead>
          <tr>
            {lista.map((l, index) => (
              <th key={index}> {l} </th>
            ))}
          </tr>
        </thead>
        <tbody>{currentData}</tbody>
      </Table>
      {data.length > itemsPerPage && (
        <Pagination className={`pagination ${isDarkTheme ? "dark-pager" : ""}`}>
          <Pagination.Prev
            onClick={() =>
              currentPage > 1 && setCurrentPage((prev) => prev - 1)
            }
          />
          {renderPaginationItems()}
          <Pagination.Next
            onClick={() =>
              currentPage < totalPages && setCurrentPage((prev) => prev + 1)
            }
          />
        </Pagination>
      )}
    </div>
  );
}

ResponsiveTable.propTypes = {
  data: PropTypes.array.isRequired,
  lista: PropTypes.array.isRequired,
};

export default ResponsiveTable;
