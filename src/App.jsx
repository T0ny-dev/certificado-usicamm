import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import certificates from "./data/certificates.js";
import Certificate from './components/Certificate.jsx';

const CertificateList = ({ certificates }) => {
  return (
    <div>
      <h2>directorio de Certificados</h2>
      <ul>
        {certificates.map((cert) => (
          <li key={cert.id}>
            <Link to={`/certificate/${cert.id}`}>{cert.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const CertificatePage = ({ certificates }) => {
  const { id } = useParams();
  const cert = certificates.find((c) => c.id === parseInt(id, 10));

  return (
    <div>
      {cert ? <Certificate {...cert} /> : <div>Cargando ...</div>}
    </div>
  );
};

const App = () => {
  const [certificatesData, setCertificatesData] = useState(certificates);

  useEffect(() => {
    // Simulación de carga asíncrona de datos
    const fetchData = async () => {
      // Aquí establecemos la lista de certificados utilizando los datos importados
      setCertificatesData(certificates);
    };

    fetchData();
  }, []); // El segundo parámetro asegura que useEffect solo se ejecute una vez al montar el componente

  return (
    <BrowserRouter>
      <div className='certificate'>
        <Routes>
          <Route path="/" element={<CertificateList certificates={certificatesData} />} />
          <Route path="/certificate/:id" element={<CertificatePage certificates={certificatesData} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;








