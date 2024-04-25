import { useState } from "react";
import PropTypes from "prop-types"; // Importa PropTypes para validar las props
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import "../../Styles/Components/Table.css";

function ResponsiveTable({ data, lista }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // Cambia este valor según el número de elementos que deseas mostrar por página

  // Calcula el índice inicial y final de los elementos a mostrar en la página actual
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = data.slice(indexOfFirstItem, indexOfLastItem);

  // Calcula el número total de páginas
  const totalPages = Math.ceil(data.length / itemsPerPage);

  // Cambia a la página especificada
  const handleClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="table-container">
      <Table responsive bordered hover>
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
        <Pagination>
          <Pagination.Prev
            onClick={() => currentPage > 1 && handleClick(currentPage - 1)}
          />
          {[...Array(totalPages)].map((_, index) => (
            <Pagination.Item
              key={index}
              active={index + 1 === currentPage}
              onClick={() => handleClick(index + 1)}
            >
              {index + 1}
            </Pagination.Item>
          ))}
          <Pagination.Next
            onClick={() =>
              currentPage < totalPages && handleClick(currentPage + 1)
            }
          />
        </Pagination>
      )}
    </div>
  );
}

// Define PropTypes para asegurarte de que se pasen las props correctamente
ResponsiveTable.propTypes = {
  data: PropTypes.array.isRequired,
  lista: PropTypes.array.isRequired,
};

export default ResponsiveTable;
