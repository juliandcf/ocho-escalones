import React, { useEffect, useState } from 'react';
import NewProgramButton from './NewProgramButton';

const Program = () => {
  const [programCreated, setProgramCreated] = useState();
  const [programTitle, setProgramTitle] = useState("Crea un programa para empezar!");
  const [porcentajeCorrectas, setPorcentajeCorrectas] = useState(0);
  const [porcentajeIncorrectas, setPorcentajeIncorrectas] = useState(0);

  useEffect(() => {
    if (programCreated === undefined) {
      return;
    }

    setProgramTitle(`Programa Nº ${programCreated.id} - ${programCreated.fecha.toLocaleDateString()}`);
  }, [programCreated]);

  useEffect(() => {
    const totalRespuestas = programCreated?.respuestasCorrectas + programCreated?.respuestasIncorrectas;

    if (totalRespuestas > 0) {
      const porcentajeCorr = ((programCreated?.respuestasCorrectas || 0) / totalRespuestas) * 100;
      const porcentajeIncorr = ((programCreated?.respuestasIncorrectas || 0) / totalRespuestas) * 100;

      setPorcentajeCorrectas(isNaN(porcentajeCorr) ? 0 : porcentajeCorr.toFixed(2));
      setPorcentajeIncorrectas(isNaN(porcentajeIncorr) ? 0 : porcentajeIncorr.toFixed(2));
    } else {
      setPorcentajeCorrectas(0);
      setPorcentajeIncorrectas(0);
    }
  }, [programCreated?.respuestasCorrectas, programCreated?.respuestasIncorrectas]);

  const incrementRespuestasCorrectas = (event) => {
    event.preventDefault();
    setProgramCreated(prevProgram => ({
      ...prevProgram,
      respuestasCorrectas: prevProgram.respuestasCorrectas + 1
    }));
  };

  const incrementRespuestasIncorrectas = (event) => {
    event.preventDefault();
    setProgramCreated(prevProgram => ({
      ...prevProgram,
      respuestasIncorrectas: prevProgram.respuestasIncorrectas + 1
    }));
  };

  return (
    <div className="card mt-5 row">
      <div className='card-header'>
        <div className='row'>
          <div className="col-sm-9">
            <h3 className=''>{programTitle}</h3>
          </div>
          <div className="col-sm-3">
            <NewProgramButton onProgramCreated={setProgramCreated} />
          </div>
        </div>
      </div>
      <div className="card-body">
        <div className='row mt-3'>
          <div className="col-sm-6">
            <div className="card border-success">
              {programCreated !== undefined && (
                <div className="card-body text-success">
                  <div className="card-header">Respuestas correctas</div>
                  <h5 className="card-title">{porcentajeCorrectas}%</h5>
                  <p className="card-text">{programCreated.respuestasCorrectas}</p>
                  <button className="btn btn-success" onClick={incrementRespuestasCorrectas}><i className="bi-check-circle"></i> Correcta</button>
                </div>
              )}
            </div>
          </div>
          <div className="col-sm-6">
            <div className="card border-danger">
              {programCreated !== undefined && (
                <div className="card-body text-danger">
                  <div className="card-header">Respuestas incorrectas</div>
                  <h5 className="card-title">{porcentajeIncorrectas}%</h5>
                  <p className="card-text">{programCreated.respuestasIncorrectas}</p>
                  <button className="btn btn-danger" onClick={incrementRespuestasIncorrectas}><i className="bi-x-circle"></i> Incorrecta</button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Program;
