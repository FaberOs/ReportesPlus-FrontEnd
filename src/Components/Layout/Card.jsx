import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Components/Card.css' // Assuming you have a separate CSS file for additional styles

const ReportCard = () => {
  return (
    <div className="card text-center" style={{ width: '360px', height: '360px', borderRadius: '25px' }}>
      <div className="card-body d-flex flex-column justify-content-between p-4">
        <img
          src="./assets/subject-icon-1.svg"
          className="card-img-top"
          alt="Report Icon"
          style={{ width: '90px', height: '92px', margin: '0 auto' }}
        />
        <h5 className="card-title" style={{ color: '#000066', fontWeight: '700', fontSize: '24px' }}>
          Reportes Posgrados
        </h5>
        <a href="#" className="btn btn-primary" style={{ backgroundColor: '#000066', borderColor: '#000066', borderRadius: '25px' }}>
          CONSULTAR
        </a>
      </div>
    </div>
  );
};

export default ReportCard;