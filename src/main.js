import React from 'react';
import HornedBeasts from './hornedbeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardDeck from 'react-bootstrap/CardDeck';
import './App.css';


class Main extends React.Component{
  render(){
    return(
      <div className="beasts">
        <CardDeck>
          {this.props.cards.map((el, index) => (
            <div key={index}>
              <HornedBeasts
                index={index}
                src={el.image_url}
                title={el.title}
                description={el.description}
                keyword={el.keyword}
                horns={el.horns}
                displayAsModal={() => this.props.displayAsModal(el.title)}
              />
            </div>
          ),
          )}
        </CardDeck>
      </div>
    );
  }
}

export default Main;
