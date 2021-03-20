import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import SelectedBeast from './selectedBeast';
import rawData from './data.json';
import Dropdown from './formInfo';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newData: rawData,
      filteredData: rawData,
      displayModal: false,
      favoriteBeast: {},
    };
  }

  displayAsModal = (name) => {
    console.log('open beast', name);
    const favoriteBeast = rawData.find(beast => beast.title === name);
    this.setState({ favoriteBeast, displayModal: true });
  }

  handleInput = (e) => {

    this.setState({ filteredData: this.state.newData.filter(beast => {
      if (e === 'all') {
        return beast;
      } else {
        return beast.horns === +e;}
    })
    });
  };

  render() {
    return(
      <>
        <Header />
        <Dropdown
          handleInput={this.handleInput}
        ></Dropdown>
        <Main
          displayAsModal={this.displayAsModal}
          cards= {(this.state.filteredData) !== null ? (this.state.filteredData) : (this.state.newData)} />
        <SelectedBeast
          show={this.state.displayModal}
          handleClose={() => this.setState({displayModal:false})}
          favoriteBeast={this.state.favoriteBeast}
          title={this.state.title}/>
        <Footer />
      </>
    );
  }
}

export default App;
