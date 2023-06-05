import React from 'react'

const Program = () => {
  return (
    <div className="card mt-5 row">
    <div className='card-header'>
      <div className='row'>
        <div class="col-sm-9">
          <h3 className=''>Programa Nº 1 - 14/02/2023 22:40</h3>
        </div>
        <div class="col-sm-3">
          <button className="btn btn-primary" > <i class="bi-plus-circle"></i> Nuevo Programa</button>
        </div>
      </div>
    </div>
    <div className="card-body">
      <div className='row mt-3'>
        <div class="col-sm-6">
          <div class="card border-success">
            <div class="card-body text-success">
              <div class="card-header">Respuestas correctas</div>
              <h5 class="card-title">80%</h5>
              <p class="card-text">(50 respuestas correctas)</p>
              <a href="#" class="btn btn-success"><i class="bi-check-circle"></i> Correcta</a>
            </div>
          </div>
        </div>
        <div class="col-sm-6">
          <div class="card border-danger">
            <div class="card-body text-danger">
              <div class="card-header">Respuestas incorrectas</div>
              <h5 class="card-title">20%</h5>
              <p class="card-text">(15 respuestas incorrectas)</p>
              <a href="#" class="btn btn-danger"><i class="bi-x-circle"></i> Incorrecta</a>
            </div>
          </div>
        </div>
      </div>
  </div>
  </div>
  )
}

export default Program