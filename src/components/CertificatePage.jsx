import React from 'react';
import { useParams } from 'react-router-dom';

const CertificatePage = ({ loading, certificates }) => {
  const { id } = useParams();
  const cert = certificates.find((c) => c.Folio === id);

  return (
    <div>
      {loading ? (
        <div>Cargando...</div>
      ) : (
        <div>
          {cert ? (
            <div>
              <h2>{cert.Nombre} {cert.Apellidos}</h2>
              <p>Folio: {cert.Folio}</p>
              <p>Curso: {cert.Curso}</p>
              <p>Horas: {cert.Horas}</p>
              <p>Fecha de emisión: {cert['Fecha de emisión']}</p>
              <p>Periodo: {cert.Periodo}</p>
              {/* Agrega más detalles según la estructura de tus datos */}
            </div>
          ) : (
            <div>Certificado no encontrado</div>
          )}
        </div>
      )}
    </div>
  );
};

export default CertificatePage;

