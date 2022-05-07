
import React, { FC, useCallback, useState } from 'react'
import styled from 'styled-components'
import { Button, Form } from 'react-bootstrap'
import enterLobby from '../../Auth/enterLobby'
import { useNavigate } from 'react-router'

const PanelFrame = styled.div`
display: inline-flex;
align-items: center;
flex-direction: column;
padding: 50px;
width: 300px;
height: 200px;
border-radius: 50px;
background: papayawhip;
`


const LoginPanel: FC = () => {
  const [secretID, setSecretID] = useState("")
  const navigate = useNavigate();
  
  const handleSubmit = useCallback( (e: React.FormEvent) => {
    e.preventDefault();

    enterLobby(secretID)
    .then(data => {
      if(data.err) {
        
      } else {
        navigate('/game');
      }
    })

  }, [navigate, secretID]);



  return (
    <PanelFrame>
      <h1>Login</h1>
      <Form onSubmit={e => handleSubmit(e)}>
        <Form.Group>
          <Form.Control autoFocus value={secretID} onChange={e => setSecretID(e.target.value)} placeholder="Secret ID"/>
        </Form.Group>
        <Button type="submit">Join</Button>
      </Form>
    </PanelFrame>
    )
  }
  
  export default LoginPanel