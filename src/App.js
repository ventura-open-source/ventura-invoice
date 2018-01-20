import React, { Component, PureComponent } from 'react';
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

//window.open('https://mail.google.com/mail/?ui=2&view=cm&fs=1&tf=1&shva=1&to=genesisdaft@gmail.com&su=Invoice XXX&body=Hi Mariel&bcc=tavo@viv.com','Compose%20Gmail','status=no,directories=no,location=no,resizable=no,menubar=no,width=600,height=600,toolbar=no');

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
