import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const CertificatePage = () => {
  const { id } = useParams();
  const [cert, setCert] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si ya tienes los datos
    if (!cert) {
      // Realizar la solicitud a la API para obtener el certificado específico
      axios.get(`https://api-cert-utusicamm1.onrender.com/certificates/${id}`)
        .then(response => {
          setCert(response.data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error fetching certificate data:', error);
          setLoading(false);
        });
    }
  }, [cert, id]);

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

