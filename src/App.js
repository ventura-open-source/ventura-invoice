import React, { Component } from 'react';
import { Flex, Box } from 'grid-styled';
import { hot } from 'react-hot-loader';
import InvoiceDocument from './InvoiceDocument';
import InvoiceForm from './InvoiceForm';
import './App.css';


class App extends Component {
  state = {
    form: {
      name: '',
      address: '',
      location: '',
    },
  };

  onFormChange = form => {
    this.setState({form})
  };

  render() {
    return (
      <Box className="App" width={1}>
        <Flex wrap={true}>
          <InvoiceDocument data={this.state.form}/>
          <InvoiceForm onChange={this.onFormChange}/>
        </Flex>
      </Box>
    );
  }
}

export default hot(module)(App);
