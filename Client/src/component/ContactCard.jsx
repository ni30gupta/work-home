import { Button } from 'react-bootstrap'
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Axios from 'axios'


export default function ContactCard() {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault()
    Axios.post('http://localhost:3030/api/submit',{userName:name,email:email,mobile:mobile,password:password})
  }



  return (
    <div>
      <Form>
        <Form.Group controlId="formBasicText">
          <Form.Control name = {name} onChange={(e) => { setName(e.target.value) }} type="text" placeholder="Enter Full Name" />
        </Form.Group>
        <Form.Group controlId="formBasicNumber">
          <Form.Control name = {mobile}  onChange={(e) => { setMobile(e.target.value) }} type="number" placeholder="Enter Mobile No." />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control name = {email} onChange={(e) => { setEmail(e.target.value) }} type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control name = {password} onChange={(e) => { setPassword(e.target.value) }} type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button onClick={handleSubmit} variant="primary" type="submit">
          Submit
       </Button>
      </Form>
    </div>
  )
}
