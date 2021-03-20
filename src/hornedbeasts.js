import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Card from 'react-bootstrap/Card';
import './hornedBeasts.css';

class HornedBeasts extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      numberOfHearts:0
    };
  }

  hearts = () => {
    this.setState({ numberOfHearts: this.state.numberOfHearts + 1});

  };

  enlargeImage = () => {
    this.props.displayAsModal(this.props.title);
  };

  render() {
    return(
      <div>
        <Card className="card" bg="primary" text="white" border="primary" style={{ width: '18rem' }}>
          <Card.Img src={this.props.src} onClick={this.enlargeImage}/>
          <Card.Body onClick={this.hearts}>
            <Card.Title>{this.props.title}</Card.Title>
            <Card.Text >
              ❤️  {this.state.numberOfHearts}
            </Card.Text>
            <Card.Text>
              {this.props.description}
            </Card.Text>
            <Card.Text>
              Number of Horns: {this.props.horns}
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}

export default HornedBeasts;
