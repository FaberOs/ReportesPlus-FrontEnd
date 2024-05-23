import { useState } from "react";
import PropTypes from "prop-types";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "../../Styles/Components/Table.css";
import { useThemeContext } from "../../ThemeContext";

import { Modal, ModalTitle, ModalHeader, ModalBody} from "react-bootstrap";  // modal select row

function ResponsiveTable({ data, lista }) {
  const { contextTheme } = useThemeContext();
  const isDarkTheme = contextTheme === "Dark";

  const [modalInfo, setModalInfo] = useState([]);  // info modal ,vacía
  const [showModal, setshowModal] = useState(false); // activar modal

  const [show, setShow] = useState(false); // cierre/apertura, estado modal
  const handleClose = () => setShow(false); // cierre modal
  const handleShow = () => setShow(true); // apertura modal

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
        className="modal-custom">
        <ModalHeader closeButton style={{ marginRight: "3%" }}>
          <ModalTitle className="modal-title">Información Seleccionada</ModalTitle>
        </ModalHeader>

        <ModalBody className="modal-body" >
          {modalInfo.map((info, index) => (
            <div key={index}>
              <p><strong style={{ color: "#000066" }}>{lista[index]}:</strong> {info}</p>
            </div>
          ))}
        </ModalBody>
      </Modal>
    );
  }

  const identifyRowClick = (event) => {
    // Busca la fila más cercana desde el elemento clicado
    const tr = event.target.closest('tr');
    if (tr) { // si encontró fila
      // Extrae los datos de las celdas dentro de la fila
      const rowData = Array.from(tr.children).map(cell => cell.textContent);
      setModalInfo(rowData); // guardar información de la fila (array)
      setshowModal(handleShow); // activar modal
    }
  };


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
    <div className={`table-container ${isDarkTheme ? "dark-table" : ""}`} style={{ overflow: "hidden", width: "100%" }}>

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
        </thead >

        <tbody onClick={identifyRowClick}> 
          {currentData.map((row) => {
            //console.log(row);  Consolaa
            return row;
          })}
        </tbody>

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

      {show ? <ModalContent /> : null} {/* condicion renderiza Modal  */}

    </div>
  );
}

ResponsiveTable.propTypes = {
  data: PropTypes.array.isRequired,
  lista: PropTypes.array.isRequired,
};

export default ResponsiveTable;