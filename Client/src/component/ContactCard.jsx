import { Button } from 'react-bootstrap'
import React from 'react'
import { Form } from 'react-bootstrap'

export default function ContactCard() {
  return (
    <div>
      <Form>
      <Form.Group controlId="formBasicText">
          <Form.Control type="text" placeholder="Enter Full Name" />
        </Form.Group>
        <Form.Group controlId="formBasicNumber">
          <Form.Control type="number" placeholder="Enter Mobile No." />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
  </Button>
      </Form>
    </div>
  )
}
