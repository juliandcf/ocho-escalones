import React, { useState } from 'react'
import ProgramService from '../services/ProgramService';

const NewProgramButton = ({ onProgramCreated }) => {


    const handleClick = (event) => {
        event.preventDefault();
        const newProgramData = ProgramService.createNewProgramData();
        onProgramCreated(newProgramData);
        console.log('Nuevo programa creado:', newProgramData);
    }  

  return (
    <button className="btn btn-primary" onClick={handleClick}> <i className="bi-plus-circle"></i> Nuevo Programa</button>
  )
}

export default NewProgramButton