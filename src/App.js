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
      filteredData: null,
      displayModal: false,
      favoriteBeast: {},
    };
  }

  displayAsModal = (index) => {this.setState({ favoriteBeast: this.state.newData[index], displayModal: true });
  }

  handleInput = (e) => {this.setState({ filteredData: this.state.newData.filter(value => {
    if (e === 'all') {
      return value;
    } else {
      return value.horns === Number(e);} 
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
