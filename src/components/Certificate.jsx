import React from 'react';

const Certificate = ({ id, name, apellido, course, hours, folio, emision, periodo }) => {
  return (
    <div className='certicate'>
      <h2>Certificate {id}</h2>
      <p>Nombre: {name}</p>
      <p>Apellido: {apellido}</p>
      <p>Accion de formacion: {course}</p>
      <p>Horas: {hours}</p>
      <p>Folio: {folio}</p>
      <p>Fecha de emisión: {emision} </p>
      <p>Fecha de Periodo: {periodo}</p>
    </div>
  );
};

export default Certificate;
