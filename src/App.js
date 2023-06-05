import './App.css';
import React from 'react';

function App() {
  return (
    <main role='main' className='container text-center' >
      <h1>Jugá a los 8 escalones desde casa!</h1>
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
      <div className='row justify-content-md-center mt-5'>
        <div class="col-7">
          <h3 className=''>Programas anteriores</h3>
        </div>
        <div class="col-sm-2">
              <button className="btn btn-secondary">Limpiar todo</button>
        </div>
      </div>
      <div className='row justify-content-md-center mt-5'>
        <div class="col-7">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Fecha</th>
                <th scope="col">Correctas</th>
                <th scope="col">Incorrectas</th>
                <th scope="col">Acciones</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>4/6/2023</td>
                <td>95%</td>
                <td>5%</td>
                <td>
                  <button className='btn btn-outline-danger'><i class="bi-trash3-fill"></i> Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}

export default App;
