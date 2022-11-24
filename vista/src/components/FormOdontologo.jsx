import React, { useState } from 'react'
import { FormControl, FormGroup, InputLabel, FormHelperText, Input, Button, keyframes } from '@mui/material';
import axios from 'axios'

const FormOdontologo = ({ campo, seleccion, inputValuesOdontologos, setInputValuesOdontologos, handleSubmit, handleCleanUp }) => {
    
    // const filtro = inputValuesOdontologos.filter(item => Object.keys(item) == seleccion  );
    // const campos = filtro.map(item => (Object.keys(item[seleccion])) )


    const peticion = () => {

        axios.post('http://localhost:8080/odontologos', inputValuesOdontologos)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    const prueba = () => {
        // const filtro = inputValuesOdontologos.filter(item => Object.keys(item) == seleccion  );
        // filtro.map(item => (Object.keys(item[seleccion])) )
        //  console.log(res);
        //  console.log(filtro);
        console.log(campo);
    }

    return (
        <FormGroup row={false} sx={{
            // border: 'solid 1px',
            width: '500px',
            gap: '20px'
        }}>
            {
                <FormControl  margin='normal'>
                        <InputLabel htmlFor="my-input">{campo}</InputLabel>
                        <Input
                            id={campo}
                            aria-describedby="my-helper-text"
                            // onChange={(e) => setInputValuesOdontologos({ ...inputValuesOdontologos, matricula: e.target.value })}
                            onChange={prueba}
                        />
                        <FormHelperText id="my-helper-text"></FormHelperText>
                    </FormControl>
            }
           
        </FormGroup>
    )
}

export default FormOdontologo;
