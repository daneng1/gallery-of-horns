import React from 'react';
import Modal from 'react-bootstrap/Modal';

class SelectedBeast extends React.Component{
  render(){
    console.log(this.props);
    return (
      <>
        <Modal size={'xl'} show={this.props.show} onHide={this.props.handleClose}>
          <Modal.Dialog>
            <Modal.Body>
              <img width={450} src={this.props.favoriteBeast.image_url}/>
            </Modal.Body>
          </Modal.Dialog>
        </Modal>
      </>
    );
  }
}

export default SelectedBeast;
