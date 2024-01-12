// App.jsx
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, Link, useParams } from 'react-router-dom';
import CertificatesData from './data/CertificatesData.js';
import Certificate from './components/Certificate.jsx';

const CertificateList = ({ certificates }) => {
  return (
    <div>
      <h2>Directorio de Certificados</h2>
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
  const [certificatesData, setCertificatesData] = useState([]);

  useEffect(() => {
    // Simulación de carga asíncrona de datos
    // En este caso, utilizo CertificatesData directamente, pero podrías cargarlos de una API, etc.
    setCertificatesData(CertificatesData);
  }, []);

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






