import React,{useEffect, useState} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const endpoint = 'http://localhost:8000/api'
const ShowLibros = () => {

    const [ libros, setLibros] = useState( [] )

    useEffect( ()=> {
        getAllLibros()
    }, [])

    const getAllLibros = async () => {
        const response = await axios.get(`${endpoint}/libros`)
        setLibros(response.data)
    }

    const deleteLibros = async (id) => {

        await axios.delete(`${endpoint}/libro/${id}`)
        getAllLibros()

    }

  return (
    <div>
      <div className='d grid gap-2'>
        <Link to="/create" className='btn btn-success btn-lg mt 2 mb-2 text-white'>Crear</Link>
      </div>

      <table className='table table-striped'>
            <thead className='bg-primary text-white'>
                <tr>
                    <th>Nombre</th>
                    <th>Cantidad</th>
                </tr>
            </thead>
            <tbody>
                { libros.map( (libro) => (
                    <tr key={libro.id}>
                        <td> {libro.nombre} </td>    
                        <td> {libro.cantidad} </td>    
                        <td>
                            <Link to={`/edit/${libro.id}`} className='btn btn-warning'>Editar</Link>
                            <button onClick={ ()=>deleteLibros(libro.id) } className='btn btn-danger'>Eliminar</button>
                        </td>

                    </tr>
                )) }
            </tbody>
        </table>
    </div>
  )
}

export default ShowLibros
