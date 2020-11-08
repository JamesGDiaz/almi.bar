import React from 'react'
// import sections
import GenericSection from '../components/sections/GenericSection'

//import elements
import Input from '../components/elements/Input'
import FormLabel from '../components/elements/FormLabel'
import Button from '../components/elements/Button'
import ButtonGroup from '../components/elements/ButtonGroup'

const Login = (props) => {
  return (
    <GenericSection className="reveal-from-bottom" data-reveal-delay="600">
      <Input placeholder="nombre de la tienda"></Input>
      <Input placeholder="nombre de usuario"></Input>
      <Input placeholder="contraseña" type="password"></Input>
      <div className="bg-white">
        <ButtonGroup>
          <Button wideMobile>Registrarme</Button>
          <Button wideMobile>Iniciar sesion con Facebook</Button>
          <Button wideMobile>Iniciar sesion con Instagram</Button>
          <Button wideMobile>Iniciar sesion con Google</Button>
        </ButtonGroup>
      </div>
    </GenericSection>
  )
}

export default Login
