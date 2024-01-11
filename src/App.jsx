import React from 'react';
import { BrowserRouter, Route, Link, Routes, useLocation } from 'react-router-dom';
import Certificate from './components/Certificate.jsx';
import { certificates } from './data/fakeApiData';

const CertificatePage = () => {
  const location = useLocation();
  const certId = new URLSearchParams(location.search).get('id');
  const cert = certificates.find((c) => c.id === parseInt(certId, 10));

  return (
    <div>
      {cert ? <Certificate {...cert} /> : <div>Certificate not found</div>}
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <div className='certicate'>
        <h1>Validación de Certificados</h1>
        <Routes>
          <Route path="/certificate" element={<CertificatePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;






