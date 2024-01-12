// CertificateList.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CertificateList = ({ certificates }) => {
  return (
    <div>
      <h2>Directorio de Certificados</h2>
      <ul>
        {certificates.map((cert) => (
          <li key={cert.Folio}>
            <Link to={`/certificate/${cert.Folio}`}>{cert.Nombre} {cert.Apellidos}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CertificateList;

