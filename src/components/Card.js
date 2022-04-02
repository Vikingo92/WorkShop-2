import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { url } from './url';
import { Detalle } from './Detalle';
import { useNavigate, useParams } from 'react-router-dom';
import { StarIcon, SearchIcon } from '@heroicons/react/outline';

const Card = () => {

    let navigate = useNavigate();
    let { id } = useParams()

    const [sesiones, setSesiones] = useState([]); //Datos dinamicos
    const [busqueda, setBusqueda] = useState(''); //Controlar la busqueda
    const [datos, setDatos] = useState([]); //Datos estaticos

    const [modal, setModal] = useState(false)

    const getData = () => {
        axios.get(url)
            .then(res => {
                setSesiones(res.data)
                setDatos(res.data)

            })
            .catch(error => {
                console.log(error)
            })
    }


    useEffect(() => {
        getData()

    }, [])


    const handleChanged = (e) => {
        setBusqueda(e.target.value)
        filtrar(e.target.value)
    }


    const filtrar = (termino) => {
        let resultadoBusqueda = datos.filter(elem => {
            if (elem.title.toString().toLowerCase().includes(termino.toLowerCase())
                || elem.description.toString().toLowerCase().includes(termino.toLowerCase())
                || elem.speakers.toString().toLowerCase().includes(termino.toLowerCase())
                || elem.industry_segment.toString().toLowerCase().includes(termino.toLowerCase())
                || elem.audience_type.toString().toLowerCase().includes(termino.toLowerCase())
            )
                return elem
        })
        setSesiones(resultadoBusqueda)
        // console.log(resultadoBusqueda);
    }

    const pageDetails = () => {
        navigate(`/${sesiones.id}`)

    }



    const Icons = () => {

        localStorage.setItem('Sessions', JSON.stringify(sesiones))
    }




    return (
        <>
            <label className='text-black'>
                {/* <SearchIcon className='h-6 w-6 mx-10' /> */}
                <input className='mx-40 my-10 w-[30rem] h-[3rem] h-50 border-black' value={busqueda}
                    placeholder='Search'
                    onChange={handleChanged}
                />
            </label>

            <div className='container ' onClick={() => pageDetails()}>
                <div>
                </div>

                <div className='mx-[20rem] grid-cols-2 justify-items-center mx-10 my-7 h-10 border-500 '>
                    {sesiones.map(val => (
                        <div key={val.id} className='px-20 py-10 bg-white h-50 border-black'>
                            <StarIcon onClick={() => Icons()} className='h-6 w-6 text-yellow-500 hover:fill-current my-2 mx-[30rem]' />
                            <h2 className='text-green-500 text-lg font-bold'>{val.title}</h2>
                            <p className='text-green-500 font-bold'>{val.description}</p>
                            <ul>
                                <li>Speakers: {val.speakers[0]} - {val.speakers[1]} - {val.speakers[2]} </li>
                            </ul>
                            <p><span className='text-black font-bold'>Industry  Segment:</span> {val.industry_segment}</p>
                            <p><span className='text-black font-bold my-6'>Primary Topic: </span>{val.audience_type}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Card
