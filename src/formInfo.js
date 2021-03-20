import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Form from 'react-bootstrap/Form';
import './formInfo.css';
import Dropdown from 'react-bootstrap/Dropdown';


class FormInfo extends React.Component{

  render() {
    return(
      <Dropdown id="button-group"onSelect={this.props.handleInput}>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Horns
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1" eventKey='all' as='button' >All</Dropdown.Item>
          <Dropdown.Item href="#/action-2" eventKey='1' as='button' >1</Dropdown.Item>
          <Dropdown.Item href="#/action-3" eventKey='2' as='button' >2</Dropdown.Item>
          <Dropdown.Item href="#/action-3" eventKey='3' as='button' >3</Dropdown.Item>
          <Dropdown.Item href="#/action-3" eventKey='100' as='button' >Really Horny</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  }
}

export default FormInfo;
