import React from 'react'

const HistoryPrograms = () => {
  return (
    <div>
        <div className='row justify-content-md-center mt-5'>
        <div className="col-7">
          <h3 className=''>Programas anteriores</h3>
        </div>
        <div className="col-sm-2">
              <button className="btn btn-secondary">Limpiar todo</button>
        </div>
      </div>
      <div className='row justify-content-md-center mt-5'>
        <div className="col-7">
          <table className="table">
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
                  <button className='btn btn-outline-danger'><i className="bi-trash3-fill"></i> Eliminar</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default HistoryPrograms