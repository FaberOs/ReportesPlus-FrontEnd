import { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "../../Styles/Components/Table.css";
import { useThemeContext } from "../../ThemeContext";

import { Modal, ModalTitle, ModalHeader, ModalBody } from "react-bootstrap";

function ResponsiveTable({ data, lista }) {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  const [modalInfo, setModalInfo] = useState([]);
  const [showModal, setShowModal] = useState(false);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const maxPages = 5;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data.length / itemsPerPage);

  const ModalContent = () => {
    return (
      <Modal
        centered
        show={show}
        onHide={handleClose}
        size="lg"
        className={`modal-responsive-table ${isDarkTheme ? "dark-modal" : ""}`}
      >
        <ModalHeader closeButton className="modal-header">
          <ModalTitle className="modal-title">
            Información Seleccionada
          </ModalTitle>
        </ModalHeader>

        <ModalBody className="modal-body">
          {modalInfo.map((info, index) => (
            <div key={index}>
              <p>
                <strong className="item-col">{lista[index]}:</strong> {info}
              </p>
            </div>
          ))}
        </ModalBody>
      </Modal>
    );
  };

  const identifyRowClick = (event) => {
    const tr = event.target.closest("tr");
    if (tr) {
      const rowData = Array.from(tr.children).map((cell) => cell.textContent);
      setModalInfo(rowData);
      setShowModal(handleShow);
    }
  };

  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleFirstPageClick = () => {
    setCurrentPage(1);
  };

  const handleLastPageClick = () => {
    setCurrentPage(totalPages);
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
    <div
      className={`table-container ${isDarkTheme ? "dark-table" : ""}`}
      style={{ overflow: "hidden", width: "100%" }}
    >
      <Table
        responsive
        bordered
        hover
        variant={contextTheme === "Dark" ? "dark" : "light"}
      >
        <thead>
          <tr>
            {lista.map((l, index) => (
              <td key={index}> {l} </td>
            ))}
          </tr>
        </thead>

        <tbody onClick={identifyRowClick}>
          {currentData.map((row) => {
            return row;
          })}
        </tbody>
      </Table>
      {data.length > itemsPerPage && (
        <Pagination className={`pagination ${isDarkTheme ? "dark-pager" : ""}`}>
          <Pagination.First
            onClick={handleFirstPageClick}
            disabled={currentPage === 1}
          />
          <Pagination.Prev
            onClick={() => handleClick(currentPage - 1)}
            disabled={currentPage === 1}
          />
          {renderPaginationItems()}
          <Pagination.Next
            onClick={() => handleClick(currentPage + 1)}
            disabled={currentPage === totalPages}
          />
          <Pagination.Last
            onClick={handleLastPageClick}
            disabled={currentPage === totalPages}
          />
        </Pagination>
      )}
      {show ? <ModalContent /> : null}
    </div>
  );
}

ResponsiveTable.propTypes = {
  data: PropTypes.array.isRequired,
  lista: PropTypes.array.isRequired,
};

export default ResponsiveTable;
