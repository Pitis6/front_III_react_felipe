import { Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'

const Turnos = () => {
  const [inputValues, setInputValues] = useState({})

const prueba = (e) =>{

  setInputValues(e.target.value)
  
}
console.log(inputValues)
  

  return (
    <Fragment>
      <Typography variant='h4' sx={{ marginTop: '20px' }}>{'Registrar turno'}</Typography>
      <FormGroup sx={{ width: '300px', marginTop: '20px', gap: '10px' }}>
        <FormControl>
          <InputLabel>{'Id odontologo'}</InputLabel>
          <Input
            name='id_odontologo'
            onChange={(e) => prueba(e)}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>{'Id paciente'}</InputLabel>
          <Input
            name='id_paciente'
            onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>{'Fecha'}</InputLabel>
          <Input
            name='fecha'
            onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button>Registrar</Button>
      </FormGroup>
    </Fragment>
  )
}

export default Turnos