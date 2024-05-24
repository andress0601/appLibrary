import axios from "axios";
import React, {useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";

const endpoint = 'http://localhost:8000/api/libro/'


const EditLibro = () => {
    const [nombre, setNombre] = useState('')
    const [cantidad, setCantidad] = useState(0)
    const navigate = useNavigate()
    const {id} = useParams()

    const update = async (e) => {
        e.preventDefault()
        await axios.put(`${endpoint}${id}`, {
            nombre: nombre,
            cantidad: cantidad
        })
        navigate('/')
    }

    useEffect( () =>{

        const getLibroById = async () => {

            const response = await axios.get(`${endpoint}${id}`)
            setNombre(response.data.nombre)
            setCantidad(response.data.cantidad)

        }
        getLibroById()

    }, [] )

    return (
        <div>
            <h3>Editar Libro</h3>
            <form onSubmit={update}>
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
                <button type='submit' className='btn btn-primary'>Update</button>
            </form>
        </div>
    )
}

export default EditLibro
