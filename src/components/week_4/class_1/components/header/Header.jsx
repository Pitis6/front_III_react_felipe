import React from 'react'
import { Header, Navbar, ListContainer } from "./headerStyles"
import { ButtonNewTask, Input, Title } from "./headerStyles"

const HeaderComponent = ({ appTitle, handleSelection, todos, done, handleNewTask, handleButtonNewTask, reset }) => (
  (
    <Header>
      <Navbar>
        <Title>{appTitle}</Title>
        <Input type="text" placeholder='Nueva tarea' onChange={(e)=> handleNewTask(e.target.value)}/>
        <ButtonNewTask type='submit' onClick={()=> handleButtonNewTask("")}>Nueva tarea</ButtonNewTask>
      </Navbar>
      <ListContainer>
        <li onClick={() => handleSelection("todos")}>Todas: {todos.length}</li>
        <li onClick={() => handleSelection("finished")}>Terminadas: {done.length}</li>
        <li onClick={() => handleSelection("pending")}>Pendientes: {todos.length - done.length}</li>
      </ListContainer>
    </Header>
  )
)

export default HeaderComponent;