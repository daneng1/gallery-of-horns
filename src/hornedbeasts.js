import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';




class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      numberOfHearts:0
    };
  }
 

  render() {
    const hearts = () => {
      this.setState({ numberOfHearts: this.state.numberOfHearts + 1});
    };
    // const bkgndColor = () => {
    //   this.setState( bg = "primary");
    // };
    // console.log('props of the square:', this.props);
    return(
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img src={this.props.src} onClick={hearts}/>
          <Card.Body>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text>
              ❤️{this.state.numberOfHearts}
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>  
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
