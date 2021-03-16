import React from 'react';
import HornedBeasts from './hornedbeasts';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CardColumns } from 'react-bootstrap';



class Main extends React.Component{
  // construcrot(props) {
  //   super(props);
  //   this.state = {

  //   };
  // }
  render(){
    var info = require('./data.json');
    return(
      <div>
        {info.map((el) => {
          return <CardColumns> 
            <HornedBeasts
              src={el.image_url}
              title={el.title}
              description={el.description}
              keyword={el.keyword}
              horns={el.horns}
            />
          </CardColumns>;
        })
        };
      </div>
    );
  }
}

export default Main;
