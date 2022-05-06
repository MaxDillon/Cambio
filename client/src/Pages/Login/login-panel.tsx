
import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Form } from 'react-bootstrap'

const PanelFrame = styled.div`
display: inline-flex;
align-items: center;
flex-direction: column;
padding: 50px;
width: 300px;
height: 400px;
border-radius: 50px;
background: papayawhip;

`

function LoginPanel() {
  const [secretID, setSecretID] = useState("")
  
  return (
    <PanelFrame>
      <h1>Login</h1>
      <Form>
        <Form.Group>
          <Form.Control value={secretID} onChange={e => setSecretID(e.target.value)} placeholder="Secret ID"/>
        </Form.Group>
        <Button onClick={ e => {
          console.log(secretID)
        } }>Join</Button>
      </Form>
    </PanelFrame>
    )
  }
  
  export default LoginPanel