import axios from 'axios'
import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'

const endpoint = 'http://localhost:8000/api/libro'

const CreateLibros = () => {

    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const navigate = useNavigate()

    const store = async (e) => {
        e.preventDefault()
        await axios.post(endpoint, {nombre: nombre, cantidad: cantidad})
        navigate('/')
    }

    return (
        <div>
        <h3>Crear Libro</h3>
        <form onSubmit={store}>
            <div className='mb-3'>
                <label className='form-label'>Nombre</label>
                <input 
                    value={nombre}
                    onChange={ (e)=> setNombre(e.target.value)}
                    type='text'
                    className='form-control'
                />
            </div>
            <div className='mb-3'>
                <label className='form-label'>Cantidad</label>
                <input 
                    value={cantidad}
                    onChange={ (e)=> setCantidad(e.target.value)}
                    type='number'
                    className='form-control'
                />
            </div>
            <button type='submit' className='btn btn-primary'>Store</button>
        </form>
    </div>
    )
  
}

export default CreateLibros
