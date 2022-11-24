import React, { Fragment, useState, useEffect } from 'react'
import ResponsiveAppBar from './NavBar';
import FormOdontologo from './FormOdontologo'
import { Button } from '@mui/material';

// import StateTextFields from './NavBar'
// import NavBar from './NavBar'


const FormDad = () => {
    // const [inputValuesOdontologos, setInputValuesOdontologos] = useState(null)

    const forms =[
        
        { odontologo: { matricula: "123", nombre: "", apellido: "" }},
        { paciente: { Nombre: "pacinte", apellido: "", dni: "", fecha: "", email: "", }},
        { turno: { paciente: "turno", odontologo: "", fecha: "" }}
    ]
    const [seleccion, setSeleccion] = useState('paciente')
    // const opcion =  forms.filter(item => Object.keys(item) == seleccion )
    const [opcion, setOpcion] = useState(forms.filter(item => Object.keys(item) == seleccion ))
    
    useEffect(() => {
        const newOpcion = forms.filter(item => Object.keys(item) == seleccion) 
        // console.log(seleccion);
        console.log(newOpcion);
        setOpcion(newOpcion)

    }, [seleccion])


    
    // console.log(opcion);


    const handleSelection = (e) => {
        const selectValue = e.slice(0,(e.length-1))
        setSeleccion(selectValue)
        // console.log(selectValue);
        // console.log(seleccion);
        // console.log(objeto);
        // console.log(tipo[seleccion])
    }


    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(inputValuesOdontologos)
    //     e.target.reset();
    // }

    // const handleCleanUp = () => {
    //     setInputValuesOdontologos({ name: "", lastname: "", email: "", password: "" })
    // }

    // const childProps = {
    //     inputValuesOdontologos,
    //     setInputValuesOdontologos,
    //     handleSubmit,
    //     handleCleanUp,
    //     seleccion
    // }
    const prueba = Object.keys(opcion[0])
    console.log(prueba);
    return (

        <Fragment>
            <ResponsiveAppBar setSeleccion={handleSelection} />
            <h1>Registrar {seleccion}</h1>
            {
                opcion?.map(item => (Object.keys(item && item[seleccion]).map(item2 => (<FormOdontologo campo={item2} key={item2}/>))
                     
                ))
            }
            <p>{JSON.stringify(opcion[0])}</p>
            <Button sx={{ color: 'green' }} >Registar {seleccion}</Button>
        </Fragment>



    )
}

export default FormDad