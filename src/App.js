import React from 'react'
import Form from './componentes/form'
import image from './componentes/img/circleReact.gif'
import './App.css'

export default function App(){

  return(
    
    <div className='container'>

      <img src={image} className='bg-circle'/>

      <div className='formulario'>
        <h2>Formúlario de Clientes</h2>
        <Form nome='Nome do Cliente: ' sobrenome='Sobrenome: ' email='Seu email: '/>
      </div>

    </div>
  )
}