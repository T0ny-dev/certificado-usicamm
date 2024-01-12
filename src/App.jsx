import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import CertificateList from './components/CertificateList.jsx';
import CertificatePage from './components/CertificatePage.jsx';

const App = () => {
  const [certificatesData, setCertificatesData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api-cert-utusicamm1.onrender.com/certificates');
        console.log('Data from API:', response.data);
        setCertificatesData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setLoading(false);
      }
    };

    fetchData(); // Llama a la función asíncrona para obtener los datos
  }, []);

  return (
    <BrowserRouter>
      <div className='certificate'>
        <Routes>
          {/* 
            Verifica si los datos están cargados antes de renderizar los componentes
            Si los datos no están cargados, puedes mostrar un mensaje de carga o algo similar.
          */}
          <Route
            path="/"
            element={
              loading ? (
                <div>Loading...</div>
              ) : (
                <CertificateList certificates={certificatesData} />
              )
            }
          />
          <Route
            path="/certificate/:id"
            element={
              loading ? (
                <div>Loading...</div>
              ) : (
                <CertificatePage certificates={certificatesData} />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
