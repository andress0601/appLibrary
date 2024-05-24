import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowPrestamos = () => {

    const [ prestamos, setPrestamos] = useState( [] )

    useEffect( ()=> {
        getAllPrestamos()
    }, [])

    const getAllPrestamos = async () => {
        const response = await axios.get(`${endpoint}/prestamo/4`)
        setPrestamos(response.data)
    }

    const deletePrestamos = async (id) => {

        await axios.delete(`${endpoint}/Prestamo/${id}`)
        getAllPrestamos()

    }

  return (
    <div>
      <div className='d grid gap-2'>
        <Link to="/create" className='btn btn-success btn-lg mt 2 mb-2 text-white'>Crear</Link>
      </div>

      <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Libro</th>
                </tr>
            </thead>
            <tbody>
                { prestamos.map( (prestamo) => (
                    <tr key={prestamo.id}>
                        <td> {prestamo.libro_prestado.nombre} </td>    
                        <td>
                            <button onClick={ ()=>deletePrestamos(prestamo.id) } className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowPrestamos