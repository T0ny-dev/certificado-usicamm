import React from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Certificate from './components/Certificate.jsx';

// Definir la lista de certificados directamente en el archivo
const certificates = [
  { id: 1, name: 'ANA PAOLA', apellido: 'CACERES LUCIO', course: 'Diplomado: Teoría y práctica educativa en el aula de educación básica', hours: 120, folio: '0001', emision: '15 de diciembre del 2023', periodo: 'Del 15 de noviembre al 15 de diciembre de 2023' },
  { id: 2, name: 'ROSA AMELIA', apellido: 'CAMERO CASTRO', course: 'Diplomado: Teoría y práctica educativa en el aula de educación básica', hours: 120, folio: '0002', emision: '15 de diciembre del 2023', periodo: 'Del 15 de noviembre al 15 de diciembre de 2023' },
  { id: 3, name: 'ZULMA SARAHI', apellido: 'CARRIZALES PINEDA', course: 'Diplomado: Teoría y práctica educativa en el aula de educación básica', hours: 120, folio: '0003', emision: '15 de diciembre del 2023', periodo: 'Del 15 de noviembre al 15 de diciembre de 2023' },
  { id: 4, name: 'JORGE ALBERTO', apellido: 'GARCIA GARCIA', course: 'Diplomado: Teoría y práctica educativa en el aula de educación básica', hours: 120, folio: '0004', emision: '15 de diciembre del 2023', periodo: 'Del 15 de noviembre al 15 de diciembre de 2023' },
  { id: 5, name: 'ALMA IDALIA', apellido: 'GONZALEZ LOPEZ', course: 'Diplomado: Teoría y práctica educativa en el aula de educación básica', hours: 120, folio: '0005', emision: '15 de diciembre del 2023', periodo: 'Del 15 de noviembre al 15 de diciembre de 2023' },
  { id: 6, name: 'MARIA ADRIANA', apellido: 'GONZALEZ MUÑOZ', course: 'Diplomado: Teoría y práctica educativa en el aula de educación básica', hours: 120, folio: '0006', emision: '15 de diciembre del 2023', periodo: 'Del 15 de noviembre al 15 de diciembre de 2023' },
  { id: 7, name: 'MARLENE', apellido: 'GONZALEZ PEREZ', course: 'Diplomado: Teoría y práctica educativa en el aula de educación básica', hours: 120, folio: '0007', emision: '15 de diciembre del 2023', periodo: 'Del 15 de noviembre al 15 de diciembre de 2023' },
  // ... Agregar más certificados según sea necesario
];

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
      <div className='certificate'>
        <h1>Validación de Certificados</h1>
        <Routes>
          <Route path="/certificate" element={<CertificatePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;







