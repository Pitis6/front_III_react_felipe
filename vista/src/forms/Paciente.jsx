import { Button, FormControl, FormGroup, FormHelperText, Input, InputLabel, Typography } from '@mui/material'
import React, { Fragment, useState } from 'react'

export const Pacientes = () => {

  const [inputValues, setInputValues] = useState({})
  console.log(inputValues)


  return (
    <Fragment>
      <Typography variant='h4' sx={{ marginTop: '20px' }}>{'Registrar paciente'}</Typography>
      <FormGroup sx={{ width: '300px', marginTop: '20px', gap: '10px' }}>
        <FormControl>
          <InputLabel>{'Nombre'}</InputLabel>
          <Input
            name='nombre'
            onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>{'Apellido'}</InputLabel>
          <Input
            name='apellido'
            onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <FormControl>
          <InputLabel>{'Cedula'}</InputLabel>
          <Input
            name='cedula'
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
        <FormControl>
          <InputLabel>{'Email'}</InputLabel>
          <Input
            name='email'
            onChange={(e) => setInputValues({ ...inputValues, [e.target.name]: e.target.value })}
          />
          <FormHelperText></FormHelperText>
        </FormControl>
        <Button>Registrar</Button>
      </FormGroup>
    </Fragment>
  )
}
