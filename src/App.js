import React from 'react';
import Header from './header';
import Main from './main';
import Footer from './footer';
import SelectedBeast from './selectedBeast';
import rawData from './data.json';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      newData: rawData,
      displayModal: false,
      favoriteBeast: {},
    };
  }

  displayAsModal = (index) => {
    // console.log("here");
    // set modal to true
    this.setState({ favoriteBeast: this.state.newData[index],
      displayModal: true });
  }

  handleClose = () => {
    this.setState({displayModal:false});
  }

  render() {
    return(
      <>
        <Header />
        <Main
          displayAsModal={this.displayAsModal}
          cards={this.state.newData}/>
        <SelectedBeast
          show={this.state.displayModal}
          handleClose={this.handleClose}
          favoriteBeast={this.state.favoriteBeast}/>
          title={this.state.title}
        <Footer />
      </>
    );
  }
}
export default App;
