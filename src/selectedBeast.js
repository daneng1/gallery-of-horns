import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
  render(){
    console.log(this.props);
    return (
      <>
        <Modal show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Dialog>
            <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
