import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Dropdown from 'react-bootstrap/Dropdown';


class Form extends React.Component{
  render() {
    return(
      <Form>
        <Form.Group controlId="exampleForm.SelectCustom">
          <Form.Label>Custom select</Form.Label>
          <Form.Control as="select" custom>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Form.Control>
        </Form.Group>
      </Form>
    )}
}
export default Form;
